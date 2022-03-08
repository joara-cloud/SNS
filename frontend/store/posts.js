export const state = () => ({ // state는 함수형태!!
  // contents:"123"
  // createdAt:1646701584228
  // id:1646701584228
  // user:Object

  mainPosts: []
})

export const mutations = { // mutations는 객체형태!! 상수화 대문자화!!
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload)
  },
  removeMainPost(state, payload) {
    /*
      post의 id가 필요!!
    */

    const postIndex = state.mainPosts.findIndex(v => v.id === payload.id);
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