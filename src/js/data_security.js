```javascript
// src/js/data_security.js

// Function to ensure data security and privacy
function ensureDataSecurity() {
    // Do not store user's personal information or homework
    let userData = null;
    let homeworkData = null;

    // Only parse data when actively used by the user
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message === 'parseContent') {
            // Parse content only when requested
            parseContent(request.data);
        }
    });

    // Do not run in the background
    chrome.runtime.onSuspend.addListener(() => {
        // Clear all data when the extension is not in use
        userData = null;
        homeworkData = null;
    });
}

// Function to parse content from Blackboard
function parseContent(data) {
    // Parse data here
    // Note: This is a placeholder and should be replaced with actual parsing logic
    parsedContent = JSON.parse(data);

    // Do not store parsed content
    parsedContent = null;
}

// Call the function to ensure data security
ensureDataSecurity();
```