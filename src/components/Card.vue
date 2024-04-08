<template>
  <div class="px-1.5">
    <form class="pb-1" v-if="adapter">
      <div class="pb-1.5">
        <div class="flex justify-between py-2">
          <div class="grid gap-1 grid-cols-12 pb-1.5">
            <div class="col-span-2">
              <img style="max-width: 16px" src="../assets/icons/enabled/48.png"/>
            </div>
            <div class="block text-white text-md font-bold col-span-9">
              Car Search 2020
            </div>
          </div>
          <div class="block text-white text-md font-bold col-span-6">
            {{ adapter.getTitle() }}
          </div>
        </div>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               :value="adapter.getCurrentUrl()"
               type="text"
               placeholder="url">
      </div>
      <div class="grid grid-cols-12">
        <button class="form-border-color-btn col-span-6" @click="copy">Copy Link</button>
        <button class="form-border-color-btn col-span-6" @click="redirect">Assign Campaign</button>
      </div>
    </form>
    <div class="text-white py-2 " v-else>
      Unsupported site
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    adapter: null,
    tabId: Number,
    sourceType: String,
    tabUrl: String,
  },
  methods: {
    copy () {
      this.$clipboard(this.adapter.getCurrentUrl())
    },
    redirect () {
      window.open(this.adapter.getCarSearchUrl(), "_blank")
    }
  },
};
</script>

<style>
html {
  width: max-content;
  height: min-content;
}

.form-border-color-btn {
  margin: 0 5px 0 5px;
  background: #1f3158 !important;
  border-radius: 22px !important;
  color: #fff !important;
  padding: 7px 32px !important;
  text-transform: none !important;
  font-size: 13px !important;
  line-height: 24px;
}
</style>