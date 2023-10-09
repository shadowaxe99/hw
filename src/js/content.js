```javascript
// Importing dependencies
import { AssignmentSchema } from './data_schemas.js';
import { parseContent, categorizeAssignments } from './content_parsing.js';

// Content Parsing
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'parseContent') {
    let parsedContent = parseContent(document.body);
    let assignmentCategories = categorizeAssignments(parsedContent);
    sendResponse({ parsedContent, assignmentCategories });
  }
});

// Function to detect if the current page is a Blackboard domain
function isBlackboardDomain() {
  let url = window.location.href;
  let domain = url.split('/')[2];
  return domain.includes('blackboard');
}

// Function to start content parsing if on Blackboard domain
function startContentParsing() {
  if (isBlackboardDomain()) {
    chrome.runtime.sendMessage({ message: 'parseContent' });
  }
}

// Start content parsing when the page is fully loaded
window.addEventListener('load', startContentParsing);
```