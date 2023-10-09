```javascript
// Importing required modules
import axios from 'axios';

// Defining the AI services
const AI_SERVICES = {
  WOLFRAM_ALPHA: 'https://api.wolframalpha.com/v2/query',
  GRAMMARLY: 'https://api.grammarly.com/v2/documents'
};

// Function to integrate with Wolfram Alpha for math problems
async function integrateWolframAlpha(problem) {
  try {
    const response = await axios.get(AI_SERVICES.WOLFRAM_ALPHA, {
      params: {
        input: problem,
        format: 'plaintext',
        output: 'JSON'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error integrating with Wolfram Alpha:', error);
  }
}

// Function to integrate with Grammarly for writing
async function integrateGrammarly(text) {
  try {
    const response = await axios.post(AI_SERVICES.GRAMMARLY, {
      text: text,
      language: 'en-US'
    });
    return response.data;
  } catch (error) {
    console.error('Error integrating with Grammarly:', error);
  }
}

// Exporting the functions
export { integrateWolframAlpha, integrateGrammarly };
```