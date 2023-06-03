<template>
  <div class="bg-grey rounded-md w-80">
    <div class="flex justify-center">
      <img class="rounded w-100" src="@/views/_components/_assets/random-people.jpeg" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-blue">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/PeopleVector.svg" alt="">
          <p class="pl-1" v-for="item in accountDetails" :key="item.id">{{ accountDetails.breed }}</p>
        </div>
        <p v-for="item in accountDetails" :key="item.id">{{ accountDetails.pricehour }}</p>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/MarkerVector.svg" alt="">
          <p v-for="item in accountDetails" :key="item.id" class="pl-1">{{ accountDetails.weight}}</p>        
        </div>
        <p v-for="item in accountDetails" :key="item.id">{{ accountDetails.priceday }}</p>
        <p v-for="item in accountDetails" :key="item.id">{{ accountDetails.location }}</p>
      </div>
    </div>
</template>
  
  <script>
  
  import { mapGetters, mapActions } from 'vuex';
  import axios from 'axios'
  
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },

    computed: {
    ...mapGetters(['accountDetails']),
  },
    methods: {
    ...mapActions(['addUserDogInfo']),
    async addUserDogInfo() {
      try {
        const result = await axios.get('/auth/getOwner', {
        race: this.breed,
        weight: this.weight,
        location: this.location,
        description: this.description,
        priceday: this.price,
        pricehour: this.hour,
        birthday: this.date,
      }, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
        console.warn(result.data.data);
        this.accountDetails = result.data.data
      } catch (error) {
        console.error(error);
      }
    },
  },

  };
  </script>