import { createStore } from 'vuex'
import auth from './modules/auth'
import images from './modules/images'

export const store = createStore({
  modules: {
    auth,
    images
  }
})
