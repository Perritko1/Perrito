<template>
  <div>
  <router-view/>  
  <cardsUser v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CardsUser from '@/views/_components/CardsUser.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    CardsUser
  },
  computed: {
    ...mapState(['data']),
  },
  mounted() {
    this.$store.dispatch('fetchData'); // Dispatch the fetchData action from the store
  },
  methods: {
    ...mapActions(['fetchData']),
  }
};
</script>


