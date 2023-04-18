<template>
  <div class="home">
    <navbar/>
    <div>
      <div class="intro">
        <h1 class="header-hp">
          Perrito
        </h1>
        <h3 class="subtitle1">
          Najspolahlivejsia stranka na strazenie zvierat
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/_components/Navbar.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
  }
}

</script>

<style>
.body {
  background-color: #C5FFF6;
}

.header-hp {
  margin-left: 180px; 
  font-size: xxx-large;
}

.subtitle1 {
  margin-left: 180px;
  font-size: x-large;
}

</style>