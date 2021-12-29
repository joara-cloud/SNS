<template>
  <v-app>
    <v-toolbar color="green">
      <v-toolbar-title>
        <nuxt-link to="/">v-sns</nuxt-link>
      </v-toolbar-title>
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

}
</script>

<style>
.v-application--wrap {min-height:auto}
</style>