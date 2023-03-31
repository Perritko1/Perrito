<template>
    <div class="about bg-grey h-screen">
      <nav-bar />
      
      <back-btn/>
      <h1 class="header-rg text-4xl text-blue my-10">Registrácia</h1>
      <div class="justify-center grid">
        <div class="grid">
          <input type="text" placeholder="Celé meno" v-model="state.name" class="input-r1 w-60 bg-blue h-10 rounded-xl">
          <span v-if="v$.email.$error">
          {{ v$.name.$errors[0].$message }}
          </span>
          <br>
          <input type="text" placeholder="Uživateľské meno" v-model="state.username" class="input-r2 bg-blue h-10 rounded-xl">
          <span v-if="v$.email.$error">
          {{ v$.username.$errors[0].$message }}
          </span>
          <br>
          <input type="text" placeholder="E-mailová adresa" v-model="state.email" class="input-r3 bg-blue h-10 rounded-xl">
          <span v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
          </span>
          <br>
          <input type="password" placeholder="Heslo" v-model="state.password" class="input-r4 bg-blue h-10 rounded-xl">
          <span v-if="v$.email.$error">
          {{ v$.password.$errors[0].$message }}
          </span>
          <br>
        </div>     
        <div class="flex justify-center">
          <button class="majBtn-r grey rounded-xl w-full h-10 bg-blue ">Majitel</button>
          <br>
          <button class="strBtn-r grey rounded-xl w-full h-10 bg-blue ">Strazca</button>
          <br>
        </div>
      </div>
      
      
      
      <accept-btn @click="submitForm"/>
      <br>
    </div>
  </template>

<script>

import BackBtn from '../components/BackBtn.vue';
import AcceptBtn from '../components/AcceptBtn.vue';
import NavBar from '../components/NavBar.vue';




import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers, } from '@vuelidate/validators'
import { reactive, computed } from 'vue'


export default {
  name: 'RegisterPage',
  components: {
    BackBtn,
    AcceptBtn,
    NavBar
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
  