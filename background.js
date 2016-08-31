function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf("g") > -1) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {code: "document.getElementById('lst-ib').value = 'Hello World!';"});
});