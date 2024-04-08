import BaseParser from "@/ParsersSitesUrls/BaseParser.js";


let BaseParserInstance = new BaseParser()

/**
 * Runs the extension.
 */
chrome.tabs.onActivated.addListener(function () {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        BaseParserInstance.isActiveTab = false
        BaseParserInstance.isActive(url)
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status == "complete") {
        if (chrome.webRequest.onBeforeRequest.hasListener(setTabActive)) {
            chrome.webRequest.onBeforeRequest.removeListener(setTabActive);
        }

        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            BaseParserInstance.isActiveTab = false
            BaseParserInstance.isActive(url)
        });

        chrome.webRequest.onBeforeRequest.addListener(setTabActive, {urls: ["<all_urls>"]}, ["requestBody"]);
    }
});
//
function setTabActive(details) {
    BaseParserInstance.isActive(details.url)
}

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//     console.log(activeInfo.tabId);
// });
//
// function getBody(details) {
//     let body = false;
//     if (details.requestBody && details.requestBody.raw && details.requestBody.raw[0]) {
//         body = decodeURIComponent(String.fromCharCode.apply(null,
//             new Uint8Array(details.requestBody.raw[0].bytes)));
//     }
//
//     return body;
// }
//
// function setActiveTabUrl(payload)
// {
//     chrome.storage.local.set(payload.tabId, payload)
// }
//
// function clearCurrentTabStorage(tabId) {
//     chrome.storage.local.get(null, function (items) {
//         for (var key in items) {
//             if (key.endsWith(`_${tabId}`)) {
//                 chrome.storage.local.remove(key)
//             }
//         }
//     })
// }