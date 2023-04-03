<template>
  <div class="about">
    <nav class="flex h-42 items-center justify-between px-5 bg-blue">
        <div class="flex align-sub"> 
          <logo-perrito/>
          <h1 class="text-5xl inter font-extralight">Perrito</h1>
        </div>
        <div class="flex">
          <div class="flex items-center">
            <shield-vector/>
            <guardians-btn/>
          </div>
         <div class="flex items-center ml-14">
            <house-vector/>
            <home-btn/>
          </div>
          <div class="flex items-center ml-14">
            <register-btn />
          </div>
        </div>
      </nav>


    <h1>Prihlásenie</h1>
      <back-btn/>
      <input type="text" placeholder="E-mailová adresa" v-model="state.email" class="">
      <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
      <br>
      <input type="password" placeholder="Heslo" v-model="state.password" class="">
      <span v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }}</span> 
      <br>
      <button @click="submitForm" class="">Prihlasit sa</button>
      <br>
      <a href="/register">
        <button class="">Nemas ucet ? Registruj sa</button>
      </a>
      
  </div>
</template>

<script>

import BackBtn from '../components/BackBtn.vue';
import RegisterBtn from '../components/RegisterBtn.vue';
import GuardiansBtn from '../components/GuardiansBtn.vue';
import LogoPerrito from '../assets/LogoPerrito.vue';
import ShieldVector from '../assets/ShieldVector.vue';
import HomeBtn from '../components/HomeBtn.vue';
import HouseVector from '../assets/HouseVector.vue';

import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from "vue"


export default {
  name: 'LoginPage',
  components: {
    BackBtn,
    RegisterBtn,
    GuardiansBtn,
    LogoPerrito,
    ShieldVector,
    HomeBtn,
    HouseVector
  },

  setup() {
    const state = reactive ({
      email: '',
      password: '',
    })

    const mustBeMail = (value) => value.includes('@')

    const rules = computed(() => {
      return {
        email: { required, email, mustBeMail: helpers.withMessage('Email musi obsahovat @', mustBeMail ), },
        password: { required, minLength: minLength(8) },
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state, 
      v$,
    }

  },

  methods: {
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error) { 
        alert("prihlasenie prebehlo uspesne")
      } else {
        alert('nepodarilo sa prihlasit')
      }
    },
   },
}

</script>

<style>

</style>

