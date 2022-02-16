export const state = () => ({
  me: null, // 로그인했는지 안했는지: null이면 로그인X

})

export const mutations = { // 동기적 작업
  // mutations는 비동기 작업이 있으면 안된다!! 예를들어 setTimeout, promise, ajax, axios, ... => actions에서 함
  setMe(state, payload) {
    state.me = payload;
  }
}

export const actions = { 
  // 1. context는 객체!! commit, dispatch, state, rootState, ... 여러 속성들이 들어있음
  // 2. 여러 객체의 속성들로 mutations를 호출(commit)하거나 상태도 변경가능(state)
  // 3. 좀 더 고차원적인 기능이 있다고 해아할까나,, 특히 비동기작업은 무조건 여기서
  // signUp(context, payload) { 

  signUp({commit}, payload) { 
    // 서버에 회원가입 요청보냄

    commit('setMe', payload); // payload는 회원정보
  },
  logIn({commit}, payload) {

    commit('setMe', payload); // payload는 회원정보
  },
  logIn({commit}, payload) {

    commit('setMe', null); // payload는 회원정보
  },
}