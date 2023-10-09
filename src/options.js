```javascript
// src/options.js

// Save options to chrome.storage
function saveOptions() {
  let reminderSetting = document.getElementById('reminderSetting').checked;
  let calendarIntegration = document.getElementById('calendarIntegration').checked;
  let preferredAIPlatform = document.getElementById('preferredAIPlatform').value;

  chrome.storage.sync.set({
    reminderSetting: reminderSetting,
    calendarIntegration: calendarIntegration,
    preferredAIPlatform: preferredAIPlatform
  }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get({
    reminderSetting: true,
    calendarIntegration: false,
    preferredAIPlatform: 'default'
  }, function(items) {
    document.getElementById('reminderSetting').checked = items.reminderSetting;
    document.getElementById('calendarIntegration').checked = items.calendarIntegration;
    document.getElementById('preferredAIPlatform').value = items.preferredAIPlatform;
  });
}

// Event listeners for saving and restoring options
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
```