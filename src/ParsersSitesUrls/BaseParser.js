import RegisterAdapters from "@/ParsersSitesUrls/RegisterAdapters.js";

export default class BaseParser  {

    instance = false

    url = '';

    details = null;

    adapters = [];

    tabId = null;

    isActiveTab = false;

    currentAdapter = false

    constructor() {
        if (!this.instance) {
            this.adapters = RegisterAdapters()
            this.instance = this;
        }

        return this;
    }

    setDetails(details) {
        this.details = details
        this.adapters.map((adapter) => {
            if (adapter.is(details.url)) {
                alert("Activated Adapter")
            }
        })
    }

    setUrl(url) {
        this.url = url
    }

    setTabId(tabId) {
        this.tabId = tabId
    }

    getInstance() {
        return this;
    }

    setActiveTabUrl(tabId, url) {
        this.adapters.map((adapter) => {
            if (adapter.is(url)) {
                chrome.storage.local.set({ tabId: tabId }).then(() => { console.log("Значение установлено"); });
            }
        })
    }

    getCurrentUrl() {
        return this.currentAdapter.getCurrentUrl()
    }

    isActive(url) {
        this.url = url
        if (!this.isActiveTab) {
            this.stateExtension(false)
            this.adapters.map((adapter) => {
                if (adapter.isActive(this.url) && !this.isActiveTab) {
                    this.isActiveTab = true
                    this.stateExtension(true)
                }
            })
        }
    }

    hasAdapter(url) {
        this.currentAdapter = false
        this.adapters.map((adapter) => {
            if (adapter.is(url)) {
                this.currentAdapter = adapter;
            }
        })

        return this.currentAdapter
    }

    stateExtension(state)
    {
        chrome.action.setIcon(state ? this.enabled() : this.disabled());
    }

    enabled()
    {
        return {
            path: {
                "16": "/icons/enabled/19.png",
                "32": "/icons/enabled/38.png",
            }
        }
    }

    disabled()
    {
        return {
            path: {
                "16": "/icons/disabled/19.png",
                "32": "/icons/disabled/38.png",
            }
        }
    }
}