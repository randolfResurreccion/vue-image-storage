import qs from 'qs'

const CLIENT_ID = 'c925ac30d9aa91e'
// const CLIENT_SECRET = '41eba2f5566b9de8da4a8ba749f38de33c473cae'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token',
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`
  },

  async fetchImages(token) {
    const res = await fetch(`${ROOT_URL}/3/account/me/images`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.json()

    return data
  },

  async uploadImages(images, token) {
    const promises = [...images].map(async (img) => {
      const formData = new FormData()
      formData.append('image', img)

      const response = await fetch(`${ROOT_URL}/3/image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      })

      return await response.json()
    })

    return Promise.all(promises)
  },
}
