```javascript
// Importing dependencies
import { parseContent, categorizeAssignments } from './content_parsing.js';
import { generateRecommendations } from './homework_assistant.js';
import { setReminder } from './reminder_system.js';
import { getFeedback } from './feedback_system.js';
import { integrateExternalServices } from './integration.js';
import { ensureManifestV3Compatibility } from './manifest.js';
import { ensureDataSecurity } from './data_security.js';
import { ensurePerformance } from './performance.js';

// Listening for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'parseContent') {
    let parsedContent = parseContent(request.data);
    let assignmentCategories = categorizeAssignments(parsedContent);
    sendResponse({ parsedContent, assignmentCategories });
  } else if (request.message === 'generateRecommendations') {
    let aiRecommendations = generateRecommendations(request.data);
    sendResponse({ aiRecommendations });
  } else if (request.message === 'setReminder') {
    let dueDates = setReminder(request.data);
    sendResponse({ dueDates });
  } else if (request.message === 'getFeedback') {
    let userFeedback = getFeedback(request.data);
    sendResponse({ userFeedback });
  }
});

// Ensuring Manifest V3 compatibility
ensureManifestV3Compatibility();

// Ensuring data security and privacy
ensureDataSecurity();

// Ensuring performance
ensurePerformance();

// Integrating with external AI services
integrateExternalServices();
```