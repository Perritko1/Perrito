
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {

  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {

    registerUser(user) {
        axios.post('', user).then(response => {
            console.log(response)
        })
    },
    
  },
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
})

export default store