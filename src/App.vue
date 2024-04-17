<template>
  <main class="bg-indigo-950">
    <card :adapter="adapter"/>
  </main>
</template>
<script>
import {browser} from "webextension-polyfill-ts";
import BaseParser from "@/ParsersSitesUrls/BaseParser.js";
import Card from "@/components/Card.vue";

export default {
  components: {Card},
  data() {
    return {
      isActive: false,
      current_url: false,
      query: {active: true, currentWindow: true},
      baseParserInstance: new BaseParser(),
      adapter: false
    }
  },
  methods: {
    detectedSites: function () {
      browser.tabs.query(this.query).then(tabs => {
        this.adapter = this.baseParserInstance.hasAdapter(tabs[0].url)
      })
    },

    onUpdating() {
      this.adapter ? this.adapter.isLoading = true : false
      browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if (changeInfo.status === "complete") {
          browser.webRequest.onBeforeRequest.hasListener(this.parseDetails) ? browser.webRequest.onBeforeRequest.removeListener(this.parseDetails) : false;
          browser.webRequest.onBeforeRequest.addListener(this.parseDetails, {urls: ["<all_urls>"]}, ["requestBody"])
        }
      })
    },

    parseDetails(details) {
      this.adapter.setDetails(details)
      this.current_url = this.adapter.getCarSearchUrl()
      console.log('Detected Url From Vue: ' + this.current_url)
    }
  },
  mounted() {
    this.detectedSites()
    this.onUpdating()
  }
};
</script>

<style scoped>
main {
  max-width: 380px;
}
</style>


