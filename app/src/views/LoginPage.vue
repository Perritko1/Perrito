<template>
  <div class="about bg-grey h-screen">
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
          <div class="flex items-center">
          </div>
        </div>
      </nav>

    <back-btn/>
    <h1 class="header-rg text-4xl text-blue my-10">Prihlásenie</h1>
    <div class="justify-center grid">
      <div class="grid w-60">
        <input type="text" placeholder="E-mailová adresa" v-model="state.email" class="input-r1  bg-blue h-10 rounded-xl indent-2">
        <span v-if="v$.email.$error" class="flex text-red-600 items-center">
        <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
        </svg>
        {{ v$.email.$errors[0].$message }} 
        </span>
        <br>
        <input type="password" placeholder="Heslo" v-model="state.password" class="input-r1  bg-blue h-10 rounded-xl indent-2">
        <span v-if="v$.password.$error" class="flex text-red-600 items-center">
        <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
        </svg>  
        {{ v$.password.$errors[0].$message }}</span> 
        <br>
      </div>   
    </div>
    <div class="flex justify-center">
      <button @click="submitForm" class="text-blue w-32 h-10 bg-grey rounded-xl mt-6 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]">Prihlásiť sa</button>    
  </div>
  <div class="flex justify-center items-center">
    <div class="w-96">
      <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700">
    </div>
  </div>  
      <a href="/register" class="flex justify-center">
      <button class="text-blue">Nemáš účet? Registruj sa!</button>
      </a>
    
  </div>
</template>

<script>

import BackBtn from '../components/BackBtn.vue';
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

