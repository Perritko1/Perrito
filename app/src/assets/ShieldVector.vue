<template>
  <svg class="fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible">
    <path d="M18 9.7C18 15.0835 14.16 20.1178 9 21.34C3.84 20.1178 0 15.0835 0 9.7V3.88L9 0L18 3.88V9.7ZM9 19.4C12.75 18.43 16 14.1038 16 9.9134V5.141L9 2.1146L2 5.141V9.9134C2 14.1038 5.25 18.43 9 19.4ZM7 15.52L3 11.64L4.41 10.2723L7 12.7749L13.59 6.3826L15 7.76" class="fill-current-color" /></svg>
</template>

<script>
  export default {
    name: 'Vector',

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
        return this.width || "18px";
      },

      heightAttr() {
        if (this.width) return undefined;
        if (this.size) return this.size;
        return this.height || "22px";
      }
    }
  }
</script>
