export const state = () => ({ // state는 함수형태!!
  mainPosts: [
    {
      id: 0,
      contents: 'jsidofj',
      user: {
        nickname: 'arajo'

      }
    }
  ]
})

export const mutations = { // mutations는 객체형태!! 상수화 대문자화!!
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload)
  },
  removeMainPost(state, payload) {
    const postIndex = state.mainPosts.findId(v => v.id === payload.id);
    state.mainPosts.splice(postIndex, 1);
  }
}

export const actions = {
  ADD_POST({commit}, payload) {
    // commit('addMainPost', payload, {root: ture}) 이렇게하면 index.js에 있는 addMainPost을 호출함 (해당파일의 addMainPost 아니고)
    commit('addMainPost', payload)
  },
  REMOVE_POST({commit}, payload) {
    commit('removeMainPost', payload)
  }
}