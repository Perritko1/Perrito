<template>
  <div class="home">
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
            <login-vector/>
            <login-btn/>
          </div>
          <div class="flex items-center ml-14">
            <register-btn />
          </div>
        </div>
      </nav>
    

    

   <div>
    <div class="intro">
      <h1 class="header-hp">Perrito</h1>
      <h3 class="subtitle1">Najspolahlivejsia stranka na strazenie zvierat</h3>
    </div>
  </div>




  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import LoginBtn from '../components/LoginBtn.vue';
import RegisterBtn from '../components/RegisterBtn.vue';
import GuardiansBtn from '../components/GuardiansBtn.vue';
import LogoPerrito from '../assets/LogoPerrito.vue';
import ShieldVector from '../assets/ShieldVector.vue';
import LoginVector from '../assets/LoginVector.vue';




export default {
  name: 'HomePage',
  components: {
    LoginBtn,
    RegisterBtn,
    GuardiansBtn,
    LogoPerrito,
    ShieldVector,
    LoginVector

  }
}
</script>

<style>
.body {
  background-color: #C5FFF6;
}

.header-hp {
  margin-left: 180px; 
  font-size: xxx-large;
}

.subtitle1 {
  margin-left: 180px;
  font-size: x-large;
}

</style>
