
import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('perrito_vue_user') || '{}'),
    token: localStorage.getItem('perrito_vue_token') || '',
    data: []
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },

    auth_success(state, data) {
			if (data.token) {
				state.token = data.token
				localStorage.setItem('perrito_vue_token', data.token)
			}

			if (data.user) {
				state.user = data.user
				console.log(state.user)
				localStorage.setItem('perrito_vue_user', JSON.stringify(data.user))
			}
		},

    auth_error(state) {
			state.token = ''
			localStorage.removeItem('perrito_vue_user')
			localStorage.removeItem('perrito_vue_token')
		},
  },
  actions: {

    async register({ commit }, credentials){
      try {
        const response = await axios.post('/auth/register', credentials);
        const token = response.data.token;

        localStorage.setItem('token', token);

        commit('auth_success', response.data)
      } catch(err) {
        commit('auth_error')
        console.error(err)
      }
    },

    async login({ commit, state }, credentials){
      try {
        const response = await axios.post('/auth/login', credentials);
        const token = response.data.token;
        const userToken = state.user.token;

        if(token === userToken) {
          commit('auth_success', token);
        } else {
          commit('auth_error');
          console.error('Invalid token');
        }
      } catch(err) {
        commit('auth_error')
        console.error(err);
      }
    },

    async fetchData({ commit }) {
      try {
        const response = await axios.get('/auth/addDetails')
        commit('setData', response.data);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    },


  },
  getters: {
    isLoggedIn: (state) =>  {
			return !!state.token
		},

    // registerUser(user) {
    //   axios.post('/auth/register', user).then(response => {
    //     console.log(response);
    //   });
    // }
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