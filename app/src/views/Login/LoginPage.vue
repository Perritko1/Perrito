<template>
  <div class="bg-grey h-screen">
    <navbar/>
    <a @click="$router.push('/')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
      <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </a>
    <form @submit.prevent="handleSubmit"> 
      <h1 class="text-4xl text-blue my-10 flex justify-center">
        Prihlásenie
      </h1>
      <div class="justify-center grid">
        <div class="grid w-60">
          <input type="text" placeholder="E-mailová adresa" v-model="state.email" class="bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.email.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier"> 
                <title/> 
                <g id="Complete"> 
                  <g id="alert-circle"> 
                    <g> 
                      <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> 
                      <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> 
                      <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> 
                    </g> 
                  </g> 
                </g> 
              </g>
            </svg>
            {{ v$.email.$errors[0].$message }} 
          </span>
          <br>
          <input type="password" placeholder="Heslo" v-model="state.password" class="input-r1  bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.password.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier"> 
                <title/> 
                <g id="Complete"> 
                  <g id="alert-circle"> 
                    <g> 
                      <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> 
                      <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> 
                      <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> 
                    </g> 
                  </g> 
                </g> 
              </g>
            </svg>
            {{ v$.password.$errors[0].$message }}
          </span> 
          <br>
        </div>   
      </div>
      <div class="flex justify-center">
        <button @click="submitForm(); loginUser()" class="text-blue w-32 h-10 bg-grey rounded-xl mt-6 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]">
          Prihlásiť sa
        </button>    
      </div>
      <div class="flex justify-center items-center">
        <div class="w-72 md:w-96">
          <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700">
        </div>
      </div>  
      <a @click="$router.push('/register')" class="flex justify-center">
        <button class="text-blue">
          Nemáš účet? Registruj sa!
        </button>
      </a>
    </form>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from "vue"
import Navbar from '@/views/_components/Navbar.vue'
import axios from 'axios'


export default {
  name: 'LoginPage',
  components: {
    Navbar,

  },
  
  data() {
    return {
      email: '',
      password: ''
    }
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

    async loginUser() {
      let result = await axios.post("/auth/login", {
        email:this.state.email,
        password:this.state.password,
      })
      console.warn(result)
    },

    async handleSubmit() {
      const response = await axios.push('login', {
        email: this.state.email,
        password: this.state.password,
      });
      
      localStorage.setItem('token', response.data.token);
    }
  },
  
}


</script>

<style>

</style>