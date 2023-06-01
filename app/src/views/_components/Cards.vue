<template>
  <div class="bg-grey rounded-md w-80">
    <div class="flex justify-center">
      <img class="rounded w-100" src="@/views/_components/_assets/random-people.jpeg" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-blue">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/PeopleVector.svg" alt="">
          <p class="pl-1">{{ accountDetails.meno }}</p>
        </div>
        <p>{{ accountDetails.pricehour }}</p>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/MarkerVector.svg" alt="">
          <p class="pl-1">{{ accountDetails.description }}</p>        
        </div>
        <p>{{ accountDetails.priceday }}</p>
      </div>
    </div>
</template>
  
  <script>
  
  import { mapGetters, mapActions } from 'vuex';
  
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
    ...mapActions(['addUserInfo']),
    async addUserInformation() {
      const userInfo = {
        phoneNum: this.phoneNum,
        price: this.price,
        location: this.location,
        description: this.description,
      };

      await this.addUserInfo(userInfo);
    },
  },

  };
  </script>