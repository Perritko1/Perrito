<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible">
    <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
</template>

<script>
  export default {
    name: 'FlipBackward',

    props: {
      width: {
        type: String,
        required: false
      },

      height: {
        type: String,
        required: false
      },

      size: {
        type: String,
        required: false
      }
    },

    computed: {
      widthAttr() {
        if (this.height) return undefined;
        if (this.size) return this.size;
        return this.width || "58px";
      },

      heightAttr() {
        if (this.width) return undefined;
        if (this.size) return this.size;
        return this.height || "58px";
      }
    }
  }
</script>
