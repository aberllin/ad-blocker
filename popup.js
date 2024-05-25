const toggleTextContent = (isEnabled) => {
    document.getElementById('toggle').textContent = isEnabled ? 'Disable Ad Blocking' : 'Enable Ad Blocking';
}

document.getElementById('toggle').addEventListener('click', () => {
    chrome.storage.local.get(['adBlockEnabled'], function(result) {
      const newStatus = !result.adBlockEnabled;
      chrome.storage.local.set({ adBlockEnabled: newStatus }, () => toggleTextContent(newStatus));
    });
  });
  
chrome.storage.local.get(['adBlockEnabled'], (result) => toggleTextContent(result.adBlockEnabled));
  