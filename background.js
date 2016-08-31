function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf("http://localhost:8080/") > -1) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {code: "document.getElementById('cpf').value = '305.809.118-45';"});
});