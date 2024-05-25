
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
  
  // Load the declarativeNetRequest rules
  chrome.declarativeNetRequest.updateDynamicRules({
   /** Over time, the extension might add multiple dynamic rules. Each rule is assigned a unique ID.
   * When you update these rules, it's good practice to clean up old rules that might conflict with new ones.
   * */
    removeRuleIds: [1, 2],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||doubleclick.net",
          resourceTypes: ["script", "image", "stylesheet"]
        }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "||adserver.com",
          resourceTypes: ["script", "image", "stylesheet"]
        }
      }
    ]
  });
});
