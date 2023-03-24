<template>
  <div class="about">
    <h1 class="header-lg">Toto je LoginPage hnusaci</h1>
    
    <home-btn />
  </div>
</template>

<script>

import HomeBtn from '../components/HomeBtn.vue';

export default {
  name: 'RegisterPage',
  components: {
    HomeBtn
  }
}

</script>

<style>
.header-lg {
  text-align: center;
  margin: 0%;
}
</style>

