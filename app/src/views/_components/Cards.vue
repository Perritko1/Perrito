<template>
    <div class="card">
      <h1>gggg</h1>
      <p>{{ user.race }}</p>
      <p>{{ user.birthday }}</p>
      <p>{{ user.weight }}</p>
      <p>{{ user.location }}</p>
      <p>{{ user.pricehour }}</p>
      <p>{{ user.priceday }}</p>
      <p>{{ user.dog_trained }}</p>
      <p>{{ user.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>