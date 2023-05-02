<template>
  <div>
    <navbar/>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" fill="none" :width="widthAttr" :height="heightAttr" overflow="visible" class="w-12 h-12 m-7">
          <path d="M7.25 21.7497H39.875C45.8811 21.7497 50.75 26.6186 50.75 32.6247C50.75 38.6308 45.8811 43.4997 39.875 43.4997H29M7.25 21.7497L16.9167 12.083M7.25 21.7497L16.9167 31.4163" stroke="#C5FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <h1>
        Vítame Vas.
        Donastavujte si svoj účet
      </h1>
      <div class="">
        <button @click="browse()">
          <input type="file" accept="image/*" class="hidden" ref="file" @change="change" >
          <img :src="src" class="rounded cursor-pointer h-52 w-52">
        </button>
      </div>
      <div>
        <label for="birthdate">Zadajte datum narodenia:</label>
        <input type="date" id="birthdate" v-model="birthdate">
        <p v-if="error"> {{error}} </p>
      </div>
      <div>
        <p>Telefonne cislo:</p>
        <input type="number">
      </div>
      <div>
        <p>Cena:</p>
        <input type="number">
        <p>/den</p>
      </div>
      <div>
        <p>Lokalita:</p>
        <input type="text">
      </div>
      <div>
        <p>Napiste nieco o sebe a vztahu k zvieratkam</p>
        <input type="text" maxlength="800">
      </div>
      <div>
        <p>Poziadavky na strazene zvieratka</p>
      </div>
      <div>
        <div>
          <p>Vek zvieratka:</p>
          <input type="number">
        </div>
        <div>
          <p>Trenovany:</p>
          <button>Ano</button>
          <button>Nie</button>
        </div>
        <div>
          <p>Vaha zvieratka:</p>
          <input type="number">
        </div>
        <div>
          <button @click="calculateAge" >Potvrdit</button>
        </div>
      </div>
  </div>
</template>

<script >

import Navbar from '@/views/_components/Navbar.vue'

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
     src: null,
     file: null,
      birthdate: '',
      age: '',
      error: ''
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

    calculateAge() {
      const today = new Date()
      const birthDate = new Date (this.birthdate)
      let age = today.getFullYear() - birthDate.getFullYear()
      const month = today.getMonth() - birthDate.getMonth()
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--
      } if (age < 15) {
          this.error = "Na strazenie zvierat potrebujes mat 15 rokov"
      } else {
        this.age = age 
        this.error = ''
      }
    }
  },
}


</script>