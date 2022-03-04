import api from '@/api/imgur'
import router from '@/router/index'

const state = {
  images: [],
}

const getters = {
  allImages(state) {
    return state.images
  },
}

const mutations = {
  setImages(state, images) {
    state.images = images
  },
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)

    const { data } = await response

    commit('setImages', data)
  },

  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth

    await api.uploadImages(images, token)

    router.push('/')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
