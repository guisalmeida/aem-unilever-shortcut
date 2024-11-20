document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("redirectButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "redirect", url: "https://www.google.com" });
    });
  });
})