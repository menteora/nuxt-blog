export const state = () => ({
  isCookieAccepted: false
})

export const mutations = {
  acceptCookie (state) {
    state.isCookieAccepted = true
  },
  setCookieStatus (state) {
    state.isCookieAccepted = localStorage.getItem('cookie:accepted') || false
  }
}
