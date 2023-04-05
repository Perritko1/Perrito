<template>
  <div class="h-screen bg-grey">
    <div class="about bg-grey">
      <navbar />
      <back-btn/>
      <h1 class="header-rg text-4xl text-blue my-10">Registrácia</h1>
      <div class="justify-center grid">
        <div class="grid w-60">
          <input type="text" placeholder="Celé meno" v-model="state.name" class="input-r1  bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.email.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
            </svg>
          {{ v$.name.$errors[0].$message }}
          </span>
          <br>
          <input type="text" placeholder="Užívateľské meno" v-model="state.username" class="input-r2 bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.email.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
            </svg>
          {{ v$.username.$errors[0].$message }}
          </span>
          <br>
          <input type="text" placeholder="E-mailová adresa" v-model="state.email" class="input-r3 bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.email.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
            </svg>
          {{ v$.email.$errors[0].$message }}
          </span>
          <br>
          <input type="password" placeholder="Heslo" v-model="state.password" class="input-r4 bg-blue h-10 rounded-xl indent-2">
          <span v-if="v$.email.$error" class="flex text-red-600 items-center">
            <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" stroke="#ff0000" class="mr-0.5">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> </g>
            </svg>
          {{ v$.password.$errors[0].$message }}
          </span>../components/Navbar.vue
          <br>
        </div>     
        <div class="flex justify-center">
          <button class="majBtn-r grey rounded-xl w-full h-10 bg-green mr-5 drop-shadow-lg text-blue focus:bg-blue focus:text-grey">Majiteľ</button>
          <br>
          <button class="strBtn-r grey rounded-xl w-full h-10 bg-green drop-shadow-lg text-blue focus:bg-blue focus:text-grey">Strážca</button>
          <br>
        </div>
      </div>
      <div class="flex justify-center">
        <accept-btn @click="submitForm" class="w-32 h-10 bg-grey rounded-xl mt-6 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]"/>
      </div>
      <br>
    </div>
  </div>
</template>

<script>

import BackBtn from '../components/BackBtn.vue';
import AcceptBtn from '../components/AcceptBtn.vue';
import Navbar from '../components/Navbar.vue';




import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers, } from '@vuelidate/validators'
import { reactive, computed } from 'vue'


export default {
  name: 'RegisterPage',
  components: {
    BackBtn,
    AcceptBtn,
    Navbar
  },

  setup() {
    const state = reactive({
      name: '',
      username: '',
      email: '',
      password: '',
    })

    const mustBeZavinac = (value) => value.includes('@')


    const rules = computed(() => {
      return {
        name: { required },
      username: { required, minLength: minLength(4) },
      email: { required, email, mustBeZavinac: helpers.withMessage('E-mail musi obsahovat @', mustBeZavinac), },
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
        alert('Registracia prebehla uspesne')
      } else {
        alert('Musis vsetko vyplnit')
      }
    },
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
  