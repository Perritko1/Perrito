<template>
  <div class="h-screen bg-grey">
    <div class="about bg-grey">
      <navbar/>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" overflow="visible" class="w-12 h-12 m-7">
          <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <h1 class="text-4xl text-blue my-10 flex justify-center">
        Registrácia
      </h1>
      <form @submit.prevent="registerUser">
        <div class="justify-center grid">
          <div class="grid w-60">
            <input type="text" placeholder="Celé meno" v-model="name" class="input-r1 bg-blue h-10 rounded-xl indent-2">
            <span v-if="v$.name.$error" class="flex text-red-600 items-center">
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
              {{ v$.name.$errors[0].$message }}
            </span>
            <br>
            <input type="text" placeholder="Užívateľské meno" v-model="username" class="input-r2 bg-blue h-10 rounded-xl indent-2">
            <span v-if="v$.username.$error" class="flex text-red-600 items-center">
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
              {{ v$.username.$errors[0].$message }}
            </span>
            <br>
            <input type="text" placeholder="E-mailová adresa" v-model="email" class="input-r3 bg-blue h-10 rounded-xl indent-2">
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
            <input type="password" placeholder="Heslo" v-model="password" class="input-r4 bg-blue h-10 rounded-xl indent-2">
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
          <div class="flex justify-center">
            <button @click="selectOwner()" class="grey rounded-xl w-full h-10 bg-green mr-5 drop-shadow-lg text-blue" :class="{'!bg-blue !text-grey': buttonType === 'owner'}">
              Majiteľ
            </button>
            <br>
            <button @click="selectGuardian()" class="grey rounded-xl w-full h-10 bg-green drop-shadow-lg text-blue" :class="{'!bg-blue !text-grey': buttonType === 'guardian'}">
              Strážca
            </button>
            <br>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="submitForm()" class="w-32 h-10 bg-grey rounded-xl mt-6 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)] accept-btn text-blue">
            Dokončiť
          </button>
        </div>
        <br>
      </form>
    </div>
  </div>
</template>

<script>

import Navbar from '@/views/_components/Navbar.vue';
import { required, email, minLength, } from '@vuelidate/validators'
import store from '@/store.js'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'

export default {
  components: {
    Navbar
  },

  data()  {
   return {
      v$: useVuelidate(),
      name: '',
      username: '',
      email: '',
      password: '',
      dogPrefference: '',
      selectedRoute: '',
      buttonType: '',
   }
  },

  validations(){
    return {
      name: { required },
      username: { required, minLength: minLength(4) },
      email: { required, email, },
      password: { required, minLength: minLength(8) },
    }
  },

  methods: {
    async submitForm() {
      await this.v$.$validate()

      if(!this.v$.$error && (this.buttonType === 'owner' || this.buttonType === 'guardian'))  {
        try {
          await store.dispatch('register', {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirmation: this.password,
            dog_preference: this.buttonType === 'owner' ? this.buttonType : 'caretaker',
          })
          this.navigate()
        } catch(err) {
          console.warn(err)
        }
      }
    },

    async addUserName() {
      try {
        const result = await axios.post('auth/addDetails', {
          name: this.name,
        })
        console.warn(result)
      } catch(err) {
        console.warn(err)
      }
    },

    selectOwner() {
      this.buttonType = 'owner'
      this.selectedRoute = '/first-owner'
    },

    selectGuardian() {
      this.buttonType = 'guardian'
      this.selectedRoute = '/first-guardian'
    },
    navigate() {
      if (this.selectedRoute) {
        this.$router.push(this.selectedRoute);
      } 
    },

  

    
    
  


  //   majitelControl() {
  //   majitel = true;
  //   strazca = false;
  // },
  // strazcaControl() {
  //   strazca = true;
  //   majitel = false;
  // },


  // registerUser() {
  //  const user = new URLSearchParams()
  //  user.append('name',this.name)
  //  user.append('username',this.username)
  //  user.append('email',this.email)
  //  user.append('password',this.password)

  //  this.$store.dispatch('registerUser', user)
  // }
},
}

</script>

<style>

  .header-rg {
    text-align: center;
    margin: 0%;
  }

  .home-btn {
    align-items: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
</style>