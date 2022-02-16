<template>
  <v-app>
    <v-toolbar color="green">
      <h1 class="logo">
        <nuxt-link to="/">
          <!-- <v-icon>mdi-heart</v-icon> -->
          AR
        </nuxt-link>
      </h1>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-flex align-center">
        <v-text-field label="검색" hide-details prepend-icon="mdi-magnify"></v-text-field> <!-- input태그임 / 아이콘은 v-text-field에 prepend-icon을 넘겨주면 됨 / 인풋아래 디테일(영역)이 없어짐 -->
        <v-btn text nuxt to="/profile">프로필</v-btn>
        <v-btn text nuxt to="/signup">회원가입</v-btn> <!-- text를 붙이면 버튼 모양이 아닌 그냥 텍스트 모양 -->
      </v-toolbar-items>
    </v-toolbar>

    <v-row no-gutters>
      <v-col cols="12" md="4" xs="12"> 
        <login-form></login-form>
      </v-col>
      <v-col cols="12" md="8" xs="12">
        <Nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: { LoginForm },
  computed: {
    name() {
      // 1. 모듈에서 접근할 때는 this.$store로 접근
      // 2. store의 posts는.js 모듈의 데이터에 접근할꺼라 posts.name!! posts는 posts.js를 뜻함
      // 3. index.js에 있는 값은 그냥 this.$store.state.name로 접근!
      return this.$store.state.posts.name; 
    }
  },
  methods: {
    onChangeName() {
      this.$store.commit('posts/BYE') // posts는 posts.js를 뜻함
    }
  }
}
</script>

<style>
@import url('@/assets/scss/layout.scss');
</style>