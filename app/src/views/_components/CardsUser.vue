<template>
  <div class="bg-grey rounded-md w-80">
    <div class="flex justify-center">
      <img class="rounded w-100" src="@/views/_components/_assets/random-people.jpeg" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-blue">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/PeopleVector.svg" alt="">
          <p v-for="item in accountDetails" :key="item.id" class="pl-1">{{ item.phoneNum }}</p>
        </div>
        <p v-for="item in accountDetails" :key="item.id">{{ item.pricehour }}</p>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/MarkerVector.svg" alt="">
          <p class="pl-1">{{ item.description}}</p>        
        </div>
        <p v-for="item in accountDetails" :key="item.id">{{ item.priceday }}</p>
        <p v-for="item in accountDetails" :key="item.id">{{ item.location }}</p>
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
...mapActions(['addUserInfos']),
    async addUserInfo() {
       try {
        const result = await axios.get('/auth/getCaretaker', {
        phoneNum:this.phoneNum,
        pricehour:this.hour,
        priceday:this.price,
        location:this.location,
        description:this.description,

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
}
</script>

<style>

</style>