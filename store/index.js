export const state = () => ({
  sidebar: false,
  isCookieAccepted: false
})

export const getters = {
  cookieStatus: state => {
    return localStorage.getItem('cookie:accepted') || false
  }
}

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  acceptCookie (state) {
    state.isCookieAccepted = true
  },
  setCookieStatus (state) {
    state.isCookieAccepted = localStorage.getItem('cookie:accepted') || false
  }
}
