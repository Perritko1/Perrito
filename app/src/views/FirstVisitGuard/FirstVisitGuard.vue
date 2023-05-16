<template>
  <div class="bg-grey h-screen">
    <div class="bg-grey">
      <navbar/>
        <a @click="$router.push('/')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" overflow="visible" class="w-12 h-12 m-7">
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
                <img v-if="src" :src="src" class="rounded cursor-pointer h-52 w-52">
                <img v-else src="@/views/_assets/mdi_image-add-outline.svg" class="rounded cursor-pointer h-52 w-52">
              </button>
            </div>
            <div class="text-blue w-72">
              <div class="inline">
                <label class="mr-4" for="birthdate">
                  Zadajte dátum narodenia:
                </label>
                <input class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" type="date" id="birthdate">
              </div>
              <div class="inline">
                <p class="mr-4">Telefónne číslo:</p>
                <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="phoneNum">
              </div>
              <div class="inline">
                <p class="mr-4">Cena:</p>
                <div class="flex">
                  <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2 mr-2" placeholder="deň" v-model="price">
                  <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" placeholder="hodina" v-model="hour">
                </div>
              </div>
              <div class="inline">
                <p class="mr-4">Lokalita:</p>
                <input type="text" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" placeholder="mesto" v-model="location">
              </div>
            </div>
          </div>    
        </div>
        <div class="flex justify-center sm:justify-center text-blue">
          <div class="inline">
            <p class="mr-4 sm:mt-4 w-72 md:w-auto ml-4 md:ml-auto">Napíšte niečo o sebe a vzťahu k zvieratkám:</p>
            <div class="flex justify-center">
              <textarea name="" id="" class="bg-blue text-black rounded-xl w-[18rem] md:w-[50rem] h-40 indent-2" v-model="description"></textarea> 
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="submitForm(); addUserInfo()" class="w-32 h-10 bg-grey rounded-xl mt-6 mb-10 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)] accept-btn text-blue">
            Dokončiť
          </button>
        </div>   
    </div>
  </div>
</template>

<script >

import Navbar from '@/views/_components/Navbar.vue'
import axios from 'axios'


export default {
  name: 'FirstvisitOwner',
  components: {
    Navbar,
  },

  props: {
    value: File,
    defaultSrc: String
  },

  data() {
    return {
      phoneNum: '',
      price: '',
      hour: '',
      location: '',
      description: '',
      animalAge: '',
      animalWeight: '',
      src: '',
      file: null,
    }
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    
    change(e) {
      this.file = e.target.files[0];
      this.src = URL.createObjectURL(this.file)
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

    async addUserInfo() {
      let result = await axios.post("", {
        phoneNum:this.phoneNum,
        price:this.price,
        location:this.location,
        description:this.description,
        animalAge:this.animalAge,
        animalWeight:this.animalWeight,
      })
      console.warn(result)
    },
  },
}


</script>