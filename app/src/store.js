
import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('perrito_vue_user') || '{}'),
    _token: localStorage.getItem('perrito_vue_token') || '',
    data: []
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    // signup({commit}, credentials){
    //   return new Promise((resolve, reject) => {

    //   })
    // }
    fetchData({ commit }) {
      axios
        .get('/api/backend')
        .then(response => {
          commit('setData', response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },
  getters: {
    registerUser(user) {
      axios.post('/auth/login', user).then(response => {
        console.log(response);
      });
    }
  }

   //   actions: {
  //     fetchCards(context) {
  //         mounted(){
  //                 axios.get('https://api/').then(response => {
  //                     if (Array.isArray(response.data)) {
  //                     console.log(response)
  //                     const titles = response.data.data.map(item => item.tvoje.data.name),
  //                     const images = response.data.data.map(item => item.tvoje.data.link),
          
  //                     for (let i = 0; i < titles.length; i++) {
          
  //                     this.cards.push({
  //                         title: titles[i],
  //                         //image: images[i],
  //                         rating: ratings[i],
  //                         star: Math.floor(ratings[i]),
  //                     })
  //                     }
  //                         }else {
  //                             console.error("piče")
  //                         }
  //                     })
  //                     .catch(error => {
  //                             console.error(error);
  //                         })
  //             }
  //         }
  //     },
});


export default store