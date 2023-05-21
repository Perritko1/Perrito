<template>
  <div>
  <router-view/>  
  <cards v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Cards from '@/views/_components/Cards.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Cards,
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


