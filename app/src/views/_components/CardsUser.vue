<template>
  <div>
    <div class="flex justify-center">
      <img class="rounded w-100" src="@/views/_components/_assets/random-people.jpeg" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-blue">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/PeopleVector.svg" alt="">
          <p class="pl-1">{{ accountDetails.phoneNum }}</p>
        </div>
        <p>{{ accountDetails.price }}</p>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/MarkerVector.svg" alt="">
          <p class="pl-1">{{ accountDetails.description }}</p>        
        </div>
        <p>{{ accountDetails.location }}</p>
      </div>
  </div>
</template>

<script> 
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios'

export default {

  computed: {
    ...mapGetters(['accountDetails']),
  },

  methods: {
...mapActions(['addUserInfo']),
    async addUserInfo() {
       try {
        const result = await axios.get('/auth/addDetails', {
        phoneNum:this.phoneNum,
        price:this.price,
        location:this.location,
        description:this.description,

      }, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
        console.warn(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style>

</style>