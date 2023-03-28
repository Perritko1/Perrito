<template>
    <div class="about">
      <nav class="flex h-42 items-center justify-between px-5 bg-blue">
        <div class="flex align-sub"> 
          <logo-perrito/>
          <h1 class="text-5xl inter font-extralight">Perrito</h1>
        </div>
        <div class="flex">
          <div class="flex items-center">
            <shield-vector/>
            <guardians-btn/>
          </div>
          <div class="flex items-center ml-14">
            <house-vector/>
            <home-btn/>
          </div>
          <div class="flex items-center ml-14">
            <login-vector/>
            <login-btn/>
          </div>
        </div>
      </nav>
      
      <h1 class="header-rg">Registracia</h1>
      <back-btn/>
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
      <accept-btn/>
      <br>
    </div>
  </template>

<script>

import BackBtn from '../components/BackBtn.vue';
import AcceptBtn from '../components/AcceptBtn.vue';
import GuardiansBtn from '@/components/GuardiansBtn.vue';
import LoginBtn from '@/components/LoginBtn.vue';
import HomeBtn from '@/components/HomeBtn.vue';
import LogoPerrito from '@/assets/LogoPerrito.vue';
import HouseVector from '@/assets/HouseVector.vue';
import LoginVector from '@/assets/LoginVector.vue';
import ShieldVector from '@/assets/ShieldVector.vue';



export default {
  name: 'RegisterPage',
  components: {
    BackBtn,
    AcceptBtn,
    GuardiansBtn,
    LoginBtn,
    HomeBtn,
    LogoPerrito,
    HouseVector, 
    LoginVector,
    ShieldVector

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
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>
  