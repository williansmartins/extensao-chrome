function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf("http://localhost:8080/") > -1) {
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

// var cpf = "102.209.277-40";
// var cpf = "010.216.908-05";
// var cpf = "010.323.958-85";
var cpf = "056.801.489-86";

// var senha="95.41.57";
// var senha="57.72.74";
// var senha="37.68.36";
var senha="65.43.21";

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
        tab.id, 
        {
         code:  
          "document.getElementById(\"cpf\").value = \""+cpf+"\";" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[0]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[1]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[3]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[4]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[6]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//label[contains(text(),'"+senha[7]+"')]\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();" +
          "(document.evaluate(\"//input[@id='loggin']\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue).click();"
        },
        function(results){ console.log(results); }
    );
});