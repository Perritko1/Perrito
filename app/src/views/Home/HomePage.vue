<template>
  <navbar/>
  <div>
    <div class="h-[25rem] bg-grey relative flex lg:justify-evenly">
      <div class="ml-6 md:ml-20 lg:ml-4 opacity-100 h-[25rem] grid content-center lg:relative absolute text-blue">
        <h1 class="text-5xl mb-10">
          Perrito
        </h1>
        <h2 class="text-4xl">
          Najspoľahlivejšia stránka na stráženie zvierat.
        </h2>
      </div>
      <img class="ml-20 lg:ml-0 hidden sm:flex" src="@/views/Home/_assets/main_dog.png" alt="">
    </div>
  </div>
  <div class=" bg-blue">
    <div class="flex justify-center text-center items-center pt-4">
      <h1 class="text-3xl">
        Nájdi si svojho strážcu.
      </h1>  
    </div>
    <div class="sm:flex sm:justify-evenly sm:items-center grid gap-4 px-4 grid-cols-1 content-evenly justify-items-center pt-8">
      <div v-for="account in careTakers" :key="account.id">
        <CardsUser :accountDetails="account" />
      </div>
    </div>
    <div class="h-[5rem] flex justify-center items-end">
      <a @click="$router.push('/guardians')">
        <button class="text-blue w-32 h-10 mb-4 bg-grey rounded-xl shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]">
          Zobraziť viac
        </button>    
      </a>
    </div>
  </div>
  <div class="h-[56rem] bg-grey">
    <div class="flex justify-center pt-4">
      <h1 class="text-3xl text-blue text-center">
        Nájdi si psíka ktorého budeš strážiť.
      </h1>
    </div>
    <div class="sm:flex sm:justify-evenly bg-grey sm:items-center grid gap-4 px-4 grid-cols-1 content-evenly justify-items-center pt-8">
      <div v-for="account in owners" :key="account.id">
        <CardsAnimals :accountDetails="account" />
      </div>
    </div>
    <div class="h-[5rem] bg-grey flex justify-center items-end">
      <a @click="$router.push('/animals')">
        <button class="text-grey w-32 h-10 bg-blue rounded-xl shadow-[1px_1px_10px_2px_rgba(0,0,0,0.3)]">
          Zobraziť viac
        </button>
      </a>
    </div>
    <div class="bg-grey">
      <div class="flex justify-center">
        <h1 class="text-3xl text-blue mt-8">
          Ako to funguje?
        </h1>
      </div>
      <div class="mt-8 md:flex grid gap-4 justify-center md:justify-evenly  text-blue bg-grey">
        <div class="w-80 grid gap-4 content-evenly mt-8">
          <div class="flex justify-center">
            <img src="@/views/Home/_assets/create.svg" alt="">
          </div>
          <h1 class="flex justify-center text-2xl">Tvorba účtu</h1>
          <p class="flex justify-center text-center">Vytvorte si jednoduchý účet pre vaše zvieratko.</p>
        </div>
        <div class="w-80 grid gap-4 content-evenly mt-8">
          <div class="flex justify-center">
            <img src="@/views/Home/_assets/search.svg" alt="">
          </div>
          <h1 class="flex justify-center text-2xl">Nájsť strážcu</h1>
          <p class="flex justify-center text-center">Vyberte si jedného z našich zodpovedných strážcov.</p>
        </div>
        <div class="w-80 grid gap-4 content-evenly mt-8">
          <div class="flex justify-center">
            <img src="@/views/Home/_assets/message.svg" alt="">
          </div>         
          <h1 class="flex justify-center text-2xl">Kontaktovanie</h1>
          <p class="flex justify-center text-center">Kontaktujte vybraného strážcu pomocou telefónneho čísla.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/_components/Navbar.vue'
import axios from 'axios'
import CardsAnimals from '@/views/_components/CardsAnimals.vue'
import CardsUser from '@/views/_components/CardsUser.vue'

export default{
  name: 'HomePage',
  components: {
    Navbar,
    CardsAnimals,
    CardsUser,
  },

  data() {
    return {
      users: [],
      userType: 'majitel' || 'strazca',
      accounts: [],
      careTakers: [],
      owners: []
    };
  },

  async created() {
    try {
      const respCare = await axios.get('auth/getCaretaker')
      this.careTakers = respCare.data.data.slice(0, 3)
      const respOwn = await axios.get('auth/getOwner')
      this.owners = respOwn.data.data.slice(0, 3)

      const response = await axios.get('/auth/user');
      this.users = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    filteredUsers() {
      if (this.userType === 'majitel') {
        return this.users.filter(user => user.user_type === 'majitel');
      } else if (this.userType === 'strazca') {
        return this.users.filter(user => user.user_type === 'strazca');
      } else {
        return [];
      }
    },
  }
};

</script>

<style>
.body {
  background-color: #C5FFF6;
}

.header-hp {
  margin-left: 180px; 
  font-size: xxx-large;
}

.subtitle1 {
  margin-left: 180px;
  font-size: x-large;
}

</style>