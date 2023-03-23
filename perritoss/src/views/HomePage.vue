<template>
  <div class="home">
    
    <HelloWorld msg=" Homepage"/>

    <login-btn /> 
    <register-btn />
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
.header-hp {
  text-align: center;
}
</style>
