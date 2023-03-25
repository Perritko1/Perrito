<template>
    <div class="about">
      <h1 class="header-rg">Toto je RegisterPage hnusaci</h1>
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
  .header-rg {
    text-align: center;
    margin: 0%;
  }

.home-btn {
  align-items: left;
  margin-top: 100px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>
  