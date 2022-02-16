<template>
  <v-container>
    <post-form v-if="me"></post-form> <!-- 로그인하면 나오는 입력창 -->
    <div>
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
      <post-card></post-card>
    </div>
  </v-container>
</template>

<script>
import PostCard from '../components/PostCard.vue'
import PostForm from '../components/PostForm.vue'

export default {
  components: { 
    PostCard,
    PostForm,
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  }
}
</script>

<style>

</style>