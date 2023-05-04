<template>
  <div class="bg-grey h-screen">
    <div class="bg-grey">
      <navbar/>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
            <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <div class="flex justify-center text-center">
          <h1 class="text-4xl text-blue md:w-[50rem] my-10 mx-4">
            Vítame Vás. Donastavujte si svoj účet.
          </h1>
        </div>
        <div class="flex md:justify-evenly justify-center">
          <div class="md:flex md:w-[50rem] md:justify-between">
            <div class="flex justify-center mb-4">
              <button @click="browse()">
                <input type="file" accept="image/*" class="hidden" ref="file" @change="change">
                <img :src="src" class="rounded cursor-pointer h-52 w-52">
              </button>
            </div>
            <div class="text-blue w-72">
              <div class="inline">
                <label class="mr-4" for="birthdate">
                  Zadajte dátum narodenia:
                </label>
                <input class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" type="date" id="birthdate">
                <p v-if="error"> 
                  {{error}} 
                </p>
              </div>
              <div class="inline">
                <p class="mr-4">Telefónne číslo:</p>
                <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="state.phoneNum">
                <span v-if="v$.phoneNum.$error" class="flex text-red-600 items-center mt-[-1rem]"> 
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
                  {{ v$.phoneNum.$errors[0].$message }} 
                </span>
              </div>
              <div class="inline">
                <p class="mr-4">Cena:</p>
                <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="state.price">
                <span v-if="v$.price.$error" class="flex text-red-600 items-center mt-[-1rem]"> 
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
                  {{ v$.location.$errors[0].$message }} 
                </span>
              </div>
              <div class="inline">
                <p class="mr-4">Lokalita:</p>
                <input type="text" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="state.location">
                <span v-if="v$.location.$error" class="flex text-red-600 items-center mt-[-1rem] mb-4"> 
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
                  {{ v$.location.$errors[0].$message }} 
                </span>
              </div>
            </div>
          </div>    
        </div>
        <div class="flex justify-center text-blue">
          <div class="inline">
            <p class="mr-4 sm:mt-4 ">Napíšte niečo o sebe a vzťahu k zvieratkám.</p>
            <textarea name="" id="" class="bg-blue text-black rounded-xl w-[18rem] md:w-[50rem] h-40 indent-2" v-model="state.description"></textarea> 
            <span v-if="v$.description.$error" class="flex text-red-600 items-center mt-[-0.5rem]">
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
              {{ v$.location.$errors[0].$message }} 
            </span>
          </div>
        </div>
        <div class="flex justify-center text-center">
          <h1 class="text-4xl text-blue md:w-[50rem] my-10 mx-4">
            Požiadavky na strážené zvieratká.
          </h1>
        </div>
        <div class="flex md:justify-evenly justify-center text-blue">
          <div class="md:flex md:w-[50rem] md:justify-between">
            <div class="">
              <p>Vek zvieratka:</p>
              <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="state.animalAge">
              <span v-if="v$.animalAge.$error" class="flex text-red-600 items-center"> 
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
                {{ v$.location.$errors[0].$message }} 
              </span>
            </div>
            <div class="flex items-center">
              <p class="mr-4">Trénovaný:</p>
              <button class="grey rounded-xl w-full h-10 px-4 bg-green mr-5 drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
                Áno
              </button>
              <button class="grey rounded-xl w-full h-10 px-4 bg-green drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
                Nie
              </button>
            </div>
            <div>
              <p>Váha zvieratka:</p>
              <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="state.animalWeight">
              <span v-if="v$.animalWeight.$error" class="flex text-red-600 items-center">
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
                {{ v$.location.$errors[0].$message }} 
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="submitForm" class="w-32 h-10 bg-grey rounded-xl mt-6 mb-10 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)] accept-btn text-blue">
            Dokončiť
          </button>
        </div>   
    </div>
  </div>
</template>

<script >

import Navbar from '@/views/_components/Navbar.vue'
import useValidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'


export default {
  name: 'FirstvisitOwner',
  components: {
    Navbar,
  },

  props: {
    value: File,
    defaultSrc: String
  },

  setup() {
    const state = reactive({
      phoneNum: '',
      price: '',
      location: '',
      description: '',
      animalAge: '',
      animalWeight: '',
    })

    const mustBePhone = (value) => value.includes('');
    const mustBePrice = (value) => value.includes('');
    const mustBeLocation = (value) => value.includes('');
    const mustBeDescription = (value) => value.includes('');
    const mustBeAnimalAge = (value) => value.includes('');
    const mustBeAnimalWeight = (value) => value.includes('');

    const rules = computed(() => {
      return {
        phoneNum: { required, mustBePhone: helpers.withMessage("musis zadat telefonne cislo", mustBePhone) },
        price: { required, mustBePrice: helpers.withMessage("musis uviest cenu", mustBePrice) },
        location: { required, mustBeLocation: helpers.withMessage("musis zadat lokalitu strazenia", mustBeLocation) },
        description: { required, mustBeDescription: helpers.withMessage("musis zadat telefonne cislo", mustBeDescription) },
        animalAge: { required, mustBeAnimalAge: helpers.withMessage("musis zadat vek zviera", mustBeAnimalAge) },
        animalWeight: { required, mustBeAnimalWeight: helpers.withMessage("musis zadat vahu zvieratka", mustBeAnimalWeight)},
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state, 
      v$,
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

    // calculateAge() {
    //   const today = new Date()
    //   const birthDate = new Date (this.birthdate)
    //   let age = today.getFullYear() - birthDate.getFullYear()
    //   const month = today.getMonth() - birthDate.getMonth()
    //   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    //       age--
    //   } if (age < 15) {
    //       this.error = "Na strazenie zvierat potrebujes mat 15 rokov"
    //   } else {
    //     this.age = age 
    //     this.error = ''
    //   }
    // },

    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error) {
        alert("dokoncovaniie uctu prebehlo uspesne")
      } else {
        alert("nepodarilo sa donastavovat ucet")
      }
    },
  },
}


</script>