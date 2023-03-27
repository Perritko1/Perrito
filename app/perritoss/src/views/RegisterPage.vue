<template>

    <div class="about">
      <h1 class="header-rg">Registracia</h1>
      <home-btn />
      <input type="text" class="input-r1">
      <br>
      <input type="text" class="input-r2">
      <br>
      <input type="text" class="input-r3">
      <br>
      <input type="text" class="input-r4">
      <br>
      <button class="strBtn-r">Strazca</button>
      <br>
      <button class="majBtn-r">Majitel</button>
      <br>
      <accept-btn />
      <br>
    </div>

  </template>


<script>

import HomeBtn from '../components/HomeBtn.vue';
import AcceptBtn from '../components/AcceptBtn.vue';

export default {
  name: 'RegisterPage',
  components: {
    HomeBtn,
    AcceptBtn
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
  