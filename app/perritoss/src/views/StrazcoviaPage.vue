<template>
  <h1 class="header-st">Toto je page strazcov</h1>
  <back-btn />
</template>

<script>
import BackBtn from '../components/BackBtn.vue'
export default {
    name: 'StrazcoviaPage',
    components: {
    BackBtn
  }

} 
</script>

<style>

.header-st {
    text-align: center;
    margin: 0%;
}

</style>