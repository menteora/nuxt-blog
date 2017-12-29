export const state = () => ({
  isCookieAccepted: false,
  facebookAppId: 384531881580043
})

export const mutations = {
  acceptCookie (state) {
    state.isCookieAccepted = true
  },
  setCookieStatus (state) {
    state.isCookieAccepted = localStorage.getItem('cookie:accepted') || false
  }
}
