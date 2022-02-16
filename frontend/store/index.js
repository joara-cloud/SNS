export const state = () => ({ // state는 함수형태!!
  name: 'ara'
})

export const mutations = { // mutations는 객체형태!! 상수화 대문자화!!
  BYE(state) {
    state.hello = 'joara'
  }
}