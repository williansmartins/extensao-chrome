function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf("http://localhost:8080/") > -1) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
    	code: 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" + 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" + 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" + 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" + 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" + 
    	"(document.evaluate(\"//label[contains(text(),'5')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();"
    });
});