<template>

    <div class="about">
      <nav class="flex h-42 items-center justify-between px-5">
        <h1 class="text-5xl inter">Perrito</h1> 
        <div>
          <guardians-btn class="px-5"/>
          <back-btn class="px-5"/>
          <login-btn />
        </div>
      </nav>
      <h1 class="header-rg">Registracia</h1>
      <back-btn />
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

import BackBtn from '../components/BackBtn.vue';
import AcceptBtn from '../components/AcceptBtn.vue';
import GuardiansBtn from '@/components/GuardiansBtn.vue';
import LoginBtn from '@/components/LoginBtn.vue';

export default {
  name: 'RegisterPage',
  components: {
    BackBtn,
    AcceptBtn,
    GuardiansBtn,
    LoginBtn

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
  