```javascript
// Importing necessary modules
import { parseContent, categorizeAssignments } from './js/content_parsing.js';
import { generateRecommendations } from './js/homework_assistant.js';
import { setReminder } from './js/reminder_system.js';
import { getFeedback } from './js/feedback_system.js';
import { ensureManifestV3Compatibility } from './js/manifest_v3.js';
import { ensureDataSecurity } from './js/data_security.js';
import { ensurePerformance } from './js/performance.js';
import { integrateExternalServices } from './js/integration.js';

// Ensuring Manifest V3 compatibility
ensureManifestV3Compatibility();

// Ensuring data security and privacy
ensureDataSecurity();

// Ensuring performance
ensurePerformance();

// Listening for messages from content scripts or popup scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case 'parseContent':
      parseContent(request.data)
        .then(parsedContent => {
          // Categorizing assignments
          const assignmentCategories = categorizeAssignments(parsedContent);
          sendResponse({ parsedContent, assignmentCategories });
        })
        .catch(error => sendResponse({ error }));
      break;
    case 'generateRecommendations':
      generateRecommendations(request.data)
        .then(aiRecommendations => sendResponse({ aiRecommendations }))
        .catch(error => sendResponse({ error }));
      break;
    case 'setReminder':
      setReminder(request.data)
        .then(reminderSet => sendResponse({ reminderSet }))
        .catch(error => sendResponse({ error }));
      break;
    case 'getFeedback':
      getFeedback(request.data)
        .then(userFeedback => sendResponse({ userFeedback }))
        .catch(error => sendResponse({ error }));
      break;
    default:
      sendResponse({ error: 'Invalid message' });
  }
  return true; // Keeps the message channel open for asynchronous responses
});

// Integrating with external AI services
integrateExternalServices();
```