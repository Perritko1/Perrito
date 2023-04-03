<template>
  <div>
  <nav class="flex h-42 items-center justify-between px-5 bg-blue">
        <div class="flex align-sub"> 
          <logo-perrito/>
          <h1 class="text-5xl inter font-extralight">Perrito</h1>
        </div>
        <div class="flex">
          <div class="flex items-center">
            <house-vector/>
            <home-btn/>
          </div>
         <div class="flex items-center ml-14">
            <login-btn />
            <login-vector />
          </div>
          <div class="flex items-center ml-14">
            <register-btn />
          </div>
        </div>
      </nav>
  <back-btn />

  <div>
    <img src="" alt="">
    <p>Jozko Mrkva</p>
    <p>20/den</p>
    <p>5/hod</p>
    <p>Petrzalka</p>
    <p>hodnotenie</p>
  </div>

  <div>
    <img src="" alt="">
    <p>Janka Strbava</p>
    <p>20/den</p>
    <p>5/hod</p>
    <p>Petrzalka</p>
    <p>hodnotenie</p>
  </div>

  <div>
    <img src="" alt="">
    <p>Igor Koktavy</p>
    <p>20/den</p>
    <p>5/hod</p>
    <p>Petrzalka</p>
    <p>hodnotenie</p>
  </div>

</div>
</template>

<script>

import LogoPerrito from '../assets/LogoPerrito.vue'
import BackBtn from '../components/BackBtn.vue'
import HouseVector from '../assets/HouseVector.vue'
import HomeBtn from '../components/HomeBtn.vue'
import LoginBtn from '../components/LoginBtn.vue'
import LoginVector from '../assets/LoginVector.vue'
import RegisterBtn from '../components/RegisterBtn.vue'


export default {
    name: 'StrazcoviaPage',
    components: {
      LogoPerrito,
      BackBtn,
      HouseVector,
      HomeBtn,
      LoginBtn,
      LoginVector,
      RegisterBtn,

  }

} 
</script>

<style>

.header-st { 
    text-align: center;
    margin: 0%;
}

</style>