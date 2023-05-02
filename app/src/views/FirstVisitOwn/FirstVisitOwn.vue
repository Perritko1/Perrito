<template>
  <div class="bg-grey h-screen">
    <navbar/>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
          <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <h1 class="text-4xl text-blue my-10 flex justify-center">
        Vítame Vás.
        Donastavujte si účet pre vaše zvieratko.
      </h1>
      <div class="flex justify-center"> 
        <div class="mr-64">
          <div>
            <button @click="browse()">
              <input type="file" accept="image/*" class="hidden" ref="file" @change="change" >
              <img :src="src" class="rounded cursor-pointer h-52 w-52">
            </button>
          </div>
          <div class="flex justify-center mt-10 text-blue">
            <p class="mr-4">Popis zvieratka:</p>
            <br>
            <input type="text" maxlength="800" class="bg-blue text-black rounded-xl w-48 h-8 indent-2" v-model="state.description">
            <span v-if="v$.description.$error"> {{ v$.description.$errors[0].$message }} </span>
          </div>
        </div>
        <div class="text-blue">
          <div class="flex">
            <p class="mr-4">Rasa:</p>
            <input type="text" class="bg-blue text-black rounded-xl h-8 w-48 mb-4 indent-2" v-model="state.breed">
            <span v-if="v$.breed.$error"> {{ v$.breed.$errors[0].$message }} </span>
          </div>
          <div class="flex">
            <p class="mr-4">Rok narodenia:</p>
            <input type="date" class="bg-blue text-black rounded-xl h-8 w-48 mb-4 indent-2">
          </div>
          <div class="flex">
            <p class="mr-4">Váha:</p>
            <input type="number" class="bg-blue text-black rounded-xl h-8 w-48 mb-4 indent-2" v-model="state.weight">
            <span v-if="v$.weight.$error"> {{ v$.weight.$errors[0].$message }} </span>
          </div>
          <div class="flex mb-4" >
            <p class="mr-4">Trénovaný:</p>
            <button class="grey rounded-xl w-full h-10 bg-green mr-5 drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
              Áno
            </button>
            <button class="grey rounded-xl w-full h-10 bg-green mr-5 drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
              Nie
            </button>
          </div>
          <div class="flex">
            <p class="mr-4">Lokalita:</p>
            <input type="text" class="bg-blue text-black rounded-xl h-8 w-48 indent-2" v-model="state.location">
            <span v-if="v$.location.$error"> {{ v$.location.$errors[0].$message }} </span>
          </div>
        </div>        
      </div>
      
      <div class="flex justify-center">
        <button @click="submitForm" class="w-32 h-10 bg-grey rounded-xl mt-6 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)] accept-btn text-blue">
          Dokončiť
        </button>
      </div>
  </div>
</template>

<script>
import Navbar from '@/views/_components/Navbar.vue'
import  useValidate from '@vuelidate/core'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: 'FirstvisitOwner',
  components: {
    Navbar
  },
  props: {
    value: File,
    defaultSrc: String
  },

  setup() {
    const state =  reactive ({
      breed: '',
      weight: '',
      location: '',
      description: '',
    })

    const mustBeBreed = (value) => value.includes('');
    const mustBeWeight = (value) => value.includes('');
    const mustBeLocation = (value) => value.includes('');
    const mustBedescription = (value) => value.includes('');

    const rules = computed (() => {
      return {
        breed: { required, mustBeBreed: helpers.withMessage("Musis zadat rasu zvieratka",mustBeBreed)},
        weight: { required, maxLength: maxLength(2), mustBeWeight: helpers.withMessage("Musis zadat vahu zvieratka", mustBeWeight)},
        location: { required, mustBeLocation: helpers.withMessage("Musis zadat lokalitu", mustBeLocation)},
        description: { required, minLength: minLength(100), mustBedescription: helpers.withMessage("Musis napisat popis zvieratka", mustBedescription)},
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state,
      v$,
    }
  },

  data() {
    return {
    src: this.defaultSrc,
    file: null,
    }
  },

  methods: {
    browse() {
      this.$refs.file.click();
    },
    
    change(e) {
      this.file = e.target.files[0];
      this.$emit('input', this.file);
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.src = e.target.result;
      }
    },

    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error) {
        alert("nastavenie uctu prebehlo uspesne")
      } else {
        alert("nepodarilo sa dokoncit nastavovanie uctu")
      }
    },
  },
}
</script>

<style>
</style> 