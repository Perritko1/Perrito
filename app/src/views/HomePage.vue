<template>
  <div class="home">
    <nav-bar />
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
import NavBar from '@/views/components/NavBar.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
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