<template>
  <div class="bg-blue h-screen">
  <navbar/>
    <a @click="$router.push('/')">
      <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 m-7">
        <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#33312F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <div class="sm:flex sm:justify-evenly sm:items-center grid gap-4 px-4 grid-cols-1 content-evenly justify-items-center pt-8">
      <div v-for="account in careTakers" :key="account.id">
        <CardsUser :accountDetails="account" />
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/views/_components/Navbar.vue'
import CardsUser from '@/views/_components/CardsUser.vue'
import axios from 'axios'

export default {
  name: 'StrazcoviaPage',
  components: {
    Navbar,
    CardsUser
  },

  data() {
    return {
      careTakers: [],
    };
  },

  async created() {
    try {
      const respCare = await axios.get('auth/getCaretaker')
      this.careTakers = respCare.data.data.slice(0, 3)

      const response = await axios.get('/auth/user');
      this.users = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    },
  },
} 

</script>

<style>

.header-st { 
  text-align: center;
  margin: 0%;
}

</style> 