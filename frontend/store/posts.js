export const state = () => ({ // state는 함수형태!!
  mainPosts: []
})

export const mutations = { // mutations는 객체형태!! 상수화 대문자화!!
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload)
  }
}

export const actions = {
  ADD_POST({commit}, payload) {
    // commit('addMainPost', payload, {root: ture}) 이렇게하면 index.js에 있는 addMainPost을 호출함 (해당파일의 addMainPost 아니고)
    commit('addMainPost', payload)
  }
}