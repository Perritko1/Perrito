<template>
  <div class="about">
    <h1 class="header-lg">Prihlasenie</h1>
      <home-btn />
      <input type="text" class="input-l1">
      <br>
      <input type="text" class="input-l2">
      <br>
      <button class="loginBtn">Prihlasit sa</button>
      <br>
      <button class="linkToReg">Nemas ucet ? Registruj sa</button>
  </div>
</template>

<script>

import HomeBtn from '../components/HomeBtn.vue';

export default {
  name: 'LoginPage',
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

