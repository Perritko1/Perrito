<template>
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
</template>

<script>

import GuardiansBtn from '@/components/GuardiansBtn.vue';
import LoginBtn from '@/components/LoginBtn.vue';
import HomeBtn from '@/components/HomeBtn.vue';
import LogoPerrito from '@/assets/LogoPerrito.vue';
import HouseVector from '@/assets/HouseVector.vue';
import LoginVector from '@/assets/LoginVector.vue';
import ShieldVector from '@/assets/ShieldVector.vue';



export default {
    name: "Navbar",
    components: {
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

</style>