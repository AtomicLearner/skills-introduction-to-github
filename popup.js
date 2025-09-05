document.addEventListener('DOMContentLoaded', () => {
  const websiteInput = document.getElementById('website-input');
  const addButton = document.getElementById('add-button');
  const blockedList = document.getElementById('blocked-list');

  // Load and display the blocked websites
  function loadBlockedSites() {
    chrome.storage.sync.get('blockedSites', (data) => {
      const sites = data.blockedSites || [];
      blockedList.innerHTML = '';
      sites.forEach((site) => {
        const listItem = document.createElement('li');
        listItem.textContent = site;

        const removeButton = document.createElement('span');
        removeButton.textContent = 'x';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          removeBlockedSite(site);
        });

        listItem.appendChild(removeButton);
        blockedList.appendChild(listItem);
      });
    });
  }

  // Add a new site to the blocked list
  addButton.addEventListener('click', () => {
    const newSite = websiteInput.value.trim();
    if (newSite) {
      chrome.storage.sync.get('blockedSites', (data) => {
        const sites = data.blockedSites || [];
        if (!sites.includes(newSite)) {
          sites.push(newSite);
          chrome.storage.sync.set({ blockedSites: sites }, () => {
            websiteInput.value = '';
            loadBlockedSites();
          });
        }
      });
    }
  });

  // Remove a site from the blocked list
  function removeBlockedSite(siteToRemove) {
    chrome.storage.sync.get('blockedSites', (data) => {
      let sites = data.blockedSites || [];
      sites = sites.filter(site => site !== siteToRemove);
      chrome.storage.sync.set({ blockedSites: sites }, () => {
        loadBlockedSites();
      });
    });
  }

  // Initial load
  loadBlockedSites();
});
