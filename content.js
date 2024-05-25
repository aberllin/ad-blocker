const adSelectors = [
  'iframe[src*="ads"]',
  'img[src*="ads"]',
  'div[class*="ad"]',
];

function removeAds() {
  adSelectors.forEach((selector) => {
    const ads = document.querySelectorAll(selector);
    ads.forEach((ad) => {
      ad.remove()
      console.log('removed')
      showNotification();
    } );
    
  });
}

function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Ad Blocked!';
  notification.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    z-index: 9999;
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 1000); // Remove the notification after 3 seconds
}


removeAds();
/** Observes the DOM for changes and removes newly added ads */
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });
