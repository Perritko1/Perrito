<template>
  <div>
    <navbar/>
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
      <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </a>
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

import Navbar from '@/views/_components/Navbar.vue'

export default {
  name: 'StrazcoviaPage',
  components: {
    Navbar,
  }
} 

</script>

<style>

.header-st { 
  text-align: center;
  margin: 0%;
}

</style> 