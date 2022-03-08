<template>
  <v-container>
    <post-form v-if="me"></post-form> <!-- 로그인하면 나오는 입력창 -->
    <div v-if="mainPosts">
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" class="mb-3"></post-card>
    </div>
  </v-container>
</template>

<script>
import {mapState} from 'vuex' ;
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
    },
    ...mapState('posts', ['mainPosts'])
  }
}
</script>

<style>

</style>