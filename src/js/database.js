```javascript
// Importing required modules
const crypto = require('crypto');
const mongoose = require('mongoose');

// Defining Mongoose Schemas
const AssignmentSchema = new mongoose.Schema({
  type: String,
  keyTerms: [String],
  dueDate: Date,
  subjectCategory: String
});

const RecommendationSchema = new mongoose.Schema({
  assignmentId: mongoose.Schema.Types.ObjectId,
  recommendationContent: String,
  source: String
});

const FeedbackSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  feedbackContent: String,
  timestamp: Date
});

// Defining Mongoose Models
const Assignment = mongoose.model('Assignment', AssignmentSchema);
const Recommendation = mongoose.model('Recommendation', RecommendationSchema);
const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Function to encrypt data
function encryptData(data) {
  const cipher = crypto.createCipher('aes-256-cbc', 'encryptionKey');
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt data
function decryptData(encryptedData) {
  const decipher = crypto.createDecipher('aes-256-cbc', 'encryptionKey');
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Function to save data to database
async function saveDataToDatabase(data, model) {
  const encryptedData = encryptData(JSON.stringify(data));
  const newData = new model({ data: encryptedData });
  await newData.save();
}

// Function to retrieve data from database
async function retrieveDataFromDatabase(model) {
  const data = await model.find();
  return data.map(item => JSON.parse(decryptData(item.data)));
}

module.exports = {
  Assignment,
  Recommendation,
  Feedback,
  saveDataToDatabase,
  retrieveDataFromDatabase
};
```