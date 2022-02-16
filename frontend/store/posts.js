export const state = () => ({ // state는 함수형태!!
  post: ''
})

export const mutations = { // mutations는 객체형태!! 상수화 대문자화!!
  POST(state, payload) {
    state.post = payload
  }
}

export const actions = {
  ADD_POST({commit}, payload) {
    commit('POST', payload)
  }
}