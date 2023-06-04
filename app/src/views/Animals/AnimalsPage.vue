<template>
  <div class="bg-grey h-screen">
    <navbar/>
        <a @click="$router.push('/')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" overflow="visible" class="w-12 h-12 m-7">
                <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <div class="sm:flex sm:justify-evenly sm:items-center grid gap-4 px-4 grid-cols-1 content-evenly justify-items-center pt-8">
            <div v-for="account in owners" :key="account.id">
                <CardsAnimals :accountDetails="account" />
            </div>
        </div>
  </div>
</template>

<script>

import Navbar from '@/views/_components/Navbar.vue'
import CardsAnimals from '@/views/_components/CardsAnimals.vue'
import axios from 'axios'


export default {
    name: 'AnimalsPage',
    components: {
        Navbar,
        CardsAnimals
    },

    data() {
        return {
        owners: [],
        account: []
        };
    },

    async cardsCreated() {
        try {
            const respOwn = await axios.get('auth/getOwner')
            this.owners = respOwn.data.data
            const response = await axios.get('/auth/user');
            this.users = response.data.data
        } catch (error) {
        console.error(error);
        } 
    },
}
</script>

<style>

</style>