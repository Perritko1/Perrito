<template>
  <h1 class="header-st">Toto je page strazcov</h1>
  <home-btn />
</template>

<script>
import HomeBtn from '../components/HomeBtn.vue'
export default {
    name: 'StrazcoviaPage',
    components: {
    HomeBtn
  }

} 
</script>

<style>

.header-st {
    text-align: center;
    margin: 0%;
}

</style>