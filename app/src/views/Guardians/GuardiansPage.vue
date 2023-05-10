<template>
  <div>
    <navbar/>
    <a @click="$router.push('/')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
      <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </a>
    <!-- <div> -->
      <!-- <img src="" alt="">
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
    </div>    -->


    <!-- <div v-for="card in cards" :key="card" :title="card.title" :image="card.image" :rating="card.rating" :star="card.star"></div>
    <img class="w-[19rem] h-[11rem] rounded-t-2xl" :src="image" alt="">
      <div class="bg-[#F8EDE3] rounded-b-2xl">
        <h1 class="text-2xl mt-2 ml-4">{{ title }}</h1>
          <div class="flex flex-row ml-3 mb-2  ">
            <img v-for="index in star" :key="index" src="/src/assets/images/rating-star.svg" alt="">
            <a> {{ rating }}</a>
          </div>
      </div> -->

  </div>
</template>

<script>

import Navbar from '@/views/_components/Navbar.vue'

export default {
  name: 'StrazcoviaPage',
  components: {
    Navbar,
  },

  // props: {
  //   title:{
  //     require: true,
  //     type: String,
  //   },
  //   image:{
  //     require: true,
  //     type: String
  //   },
  //   rating:{
  //     require: true,
  //     type: Number
  //   },
  // }
} 

</script>

<style>

.header-st { 
  text-align: center;
  margin: 0%;
}

</style> 