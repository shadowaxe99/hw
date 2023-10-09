```javascript
// Options.js
// This file handles the settings view for customization

document.addEventListener('DOMContentLoaded', function() {
    loadOptions();
    document.querySelector('form').addEventListener('submit', saveOptions);
});

// Load options from chrome.storage
function loadOptions() {
    chrome.storage.sync.get({
        reminderSetting: 'enabled',
        calendarIntegration: 'disabled',
        preferredAIPlatform: 'default'
    }, function(items) {
        document.getElementById('reminderSetting').value = items.reminderSetting;
        document.getElementById('calendarIntegration').value = items.calendarIntegration;
        document.getElementById('preferredAIPlatform').value = items.preferredAIPlatform;
    });
}

// Save options to chrome.storage
function saveOptions(e) {
    e.preventDefault();
    chrome.storage.sync.set({
        reminderSetting: document.getElementById('reminderSetting').value,
        calendarIntegration: document.getElementById('calendarIntegration').value,
        preferredAIPlatform: document.getElementById('preferredAIPlatform').value
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}
```