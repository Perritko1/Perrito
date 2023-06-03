<template>
  <div class="bg-grey rounded-md w-80">
    <div class="flex justify-center">
      <img class="rounded w-100" src="@/views/_components/_assets/random-people.jpeg" alt="">
    </div>
      <div class="grid gap-3 grid-cols-2 pt-2 text-blue">
        <div class="flex pl-2">
          <img src="@/views/_components/_assets/PeopleVector.svg" alt="">
          <p>{{ accountDetails.phoneNum }}</p>
        </div>
        <p>{{ accountDetails.pricehour }}</p>
        <div class="flex pl-2 pb-2">
          <img src="@/views/_components/_assets/MarkerVector.svg" alt="">
          <p class="pl-1">{{ accountDetails.description}}</p>        
        </div>
        <p>{{ accountDetails.priceday }}</p>
        <p>{{ accountDetails.location }}</p>
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
}
</script>

<style>

</style>