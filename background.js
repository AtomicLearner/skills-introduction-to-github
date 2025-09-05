let blockedSites = [];

// Fetch initial list from storage
chrome.storage.sync.get('blockedSites', (data) => {
  if (data.blockedSites) {
    blockedSites = data.blockedSites;
  }
});

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.blockedSites) {
    blockedSites = changes.blockedSites.newValue || [];
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Don't block the request to the "blocked" page itself
    if (details.url.includes("blocked.html")) {
      return { cancel: false };
    }

    for (const site of blockedSites) {
      // Basic matching, works for "youtube.com" blocking "www.youtube.com"
      if (site && details.url.includes(site)) {
        console.log("Blocking:", details.url);
        return {
          redirectUrl: chrome.runtime.getURL('blocked.html') + '?url=' + encodeURIComponent(details.url)
        };
      }
    }
    return { cancel: false };
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame", "sub_frame"]
  },
  ["blocking"]
);
