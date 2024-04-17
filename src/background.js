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

        // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        //     if (tabs && tabs[0] && tabs[0].url) {
        //         let url = tabs[0].url;
        //         BaseParserInstance.isActiveTab = false
        //         BaseParserInstance.isActive(url)
        //     }
        // });

        chrome.webRequest.onBeforeRequest.addListener(setTabActive, {urls: ["<all_urls>"]}, ["requestBody"]);
    }
});

function setTabActive(details) {

    if (details && details.url) {
        let adapter = BaseParserInstance.hasAdapter(details.url)
        if (adapter) {
            adapter.setDetails(details)
            console.log('Detected Url From background.js: ' + this.current_url)
        }
    }
}