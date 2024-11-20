// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "redirect") {
    // Perform the redirection in the current tab
    window.location.href = message.url;
  }
});