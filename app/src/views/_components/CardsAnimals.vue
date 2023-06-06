<template>
  <div class="bg-blue rounded-md w-80">
    <div class="flex justify-center">
      <img class="rounded w-100" :src="accountDetails.avatar" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-grey">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/DogVector.svg" alt="">
          <p class="pl-2">{{ accountDetails.breed }}</p>
        </div>
        <div class="flex justify-end pr-2">
          <p>{{ accountDetails.pricehour }} €/hod</p>
        </div>   
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/MarkerGreyVector.svg" alt="">
          <p class="pl-2">{{ accountDetails.location }}</p>        
        </div>
        <div class="flex justify-end pr-2">
          <p>{{ accountDetails.priceday }} €/deň</p>
        </div>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/WeightVector.svg" alt="">
          <p class="pl-2">{{ accountDetails.weight}} Kg</p>
        </div>
        
      </div>
    </div>
</template>
  
  <script>

  export default {
    props: {
      accountDetails: {
        type: Object,
        required: true
      }
    },

  };
  </script>