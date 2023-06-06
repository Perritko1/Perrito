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
            Vítame Vás. Donastavujte si účet pre vaše zvieratko.
          </h1>
        </div>
        <div class="flex md:justify-evenly justify-center">
          <div class="md:flex md:w-[50rem] md:justify-between">
            <div class="flex justify-center mb-4">
              <button>
                <label for="files" @change = "onFileSelected">
                  <img :src="photoInput ? photoInput :avatar" alt="" class="h-80">
                </label>
                <input @change="onFileSelected" id="files" type="file">
              </button>
              <!-- <button @click="browse()">
                <input type="file" accept="image/*" class="hidden" ref="photoInput" @onFileSelected="onFileSelected" >
                <img v-if="src" :src="photoUrl" class="rounded cursor-pointer h-52 w-52">
                <img v-else src="@/views/_assets/mdi_image-add-outline.svg" class="rounded cursor-pointer h-52 w-52">
              </button> -->
            </div>
            <div class="text-blue w-72">
              <div class="inline">
                <p class="mr-4">Rasa:</p>
                <input type="text" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" v-model="breed">
              </div>
              <div class="inline">
                <p class="mr-4">Rok narodenia:</p>
                <input type="date" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2">
              </div>
              <div class="inline">
                <p class="mr-4">Váha:</p>
                <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" placeholder="kilogramy" v-model="weight">
              </div>
              <div class="inline">
                <p class="mr-4">Lokalita:</p>
                <input type="text" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" placeholder="mesto" v-model="location">
              </div>
              <div class="inline">
                <p class="mr-4">Cena:</p>
                <div class="flex">
                  <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2 mr-2" placeholder="cena za deň" v-model="price">
                  <input type="number" class="bg-blue text-black rounded-xl w-full h-8 mb-4 indent-2" placeholder="cena za hodinu" v-model="hour">
                </div>
              </div>  
              <div class="flex" >
                <p class="mr-4">Trénovaný:</p>
                <button class="grey rounded-xl w-full h-10 bg-green mr-5 drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
                  Áno
                </button>
                <button class="grey rounded-xl w-full h-10 mb-4 bg-green drop-shadow-lg text-blue focus:bg-blue focus:text-grey">
                  Nie
                </button>
              </div>
            </div>
          </div>        
        </div>
        <div class="flex justify-center text-blue">
          <div class="inline">
            <p class="mr-4 sm:mt-4">Popis zvieratka:</p>
            <textarea name="" id="" class="bg-blue text-black rounded-xl w-[18rem] md:w-[50rem] h-40 indent-2" v-model="description"></textarea>
          </div>
        </div>
        <div class="flex justify-center">
            <button @click="submitForm(); addUserDogInfo()" class="w-32 h-10 bg-grey rounded-xl mt-6 mb-10 shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)] accept-btn text-blue">
              Dokončiť
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/_components/Navbar.vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { mapGetters } from 'vuex'
import avatar from '@/views/_assets/mdi_image-add-outline.svg'
import { ref } from 'vue'

export default {
  name: 'FirstvisitOwner',
  components: {
    Navbar
  },
  props: {
    value: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },

  data() {
    return {
      v$: useVuelidate(),
      avatar,
      sentPhoto: null,
      photoInput: ref(null),
      breed: '',
      weight: '',
      location: '',
      description: '',
    }
  },

  computed: {
    ...mapGetters({
      token: 'token'
    })
  },

  methods: {
    browse() {
      this.$refs.photoInput.click();
    },

    change(e) {
      this.file = e.target.files[0];
      this.src = URL.createObjectURL(this.file)
    },

    submitForm() {
      this.v$.$validate()
    },

    onFileSelected(e) {
      console.log(e)
      this.sentPhoto = e.target.files[0]
      const file = e.target.files[0]
      const fr = new FileReader();
      const vm = this

      fr.onload = function() {
        vm.picture = ref(fr.result)
        localStorage.setItem('avatar', fr.result)
      }.bind(vm)
      fr.readAsDataURL(file);
    },

    

    async addUserDogInfo() {
      console.log(this.sentPhoto);
      const fr = new FileReader();
      const formData = new FormData();
      formData.append('avatar', this.sentPhoto);
      formData.append('race', this.breed);
      formData.append('weight', this.weight);
      formData.append('location', this.location);
      formData.append('description', this.description);
      formData.append('priceday', this.price);
      formData.append('pricehour', this.hour);
      formData.append('birthday', this.date);
      fr.readAsDataURL(this.sentPhoto);
      try {
        console.log(formData);
        const result = await axios.post('/auth/addDetails', formData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        console.warn(result);
      } catch (error) {
        console.error(error);
      }
    },

    methods: {
    uploadPhoto() {
      const formData = new FormData();
      formData.append('photo', this.$refs.photoInput.files[0]);

      axios.post('auth/addDetails', formData)
        .then(response => {
          this.photoUrl = response.data.photoUrl;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  },
  
}
</script>

<style>

#files {
  display: none !important;
}

</style> 