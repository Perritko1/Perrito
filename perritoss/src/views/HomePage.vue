<template>
  <div class="home">

    <register-btn />
    <login-btn /> 
   

    <HelloWorld msg=" Homepage"/>


  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home.vue'
import LoginBtn from '../components/LoginBtn.vue';
import RegisterBtn from '../components/RegisterBtn.vue';


export default {
  name: 'HomePage',
  components: {
    HelloWorld,
    LoginBtn,
    RegisterBtn,
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
