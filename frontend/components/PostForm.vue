<template>
  <div>
    <v-container class="mb-7">

      <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
        <!-- 
          auto-grow 줄이 길어지면 자동으로 길어짐
          @input 입력될떄마다
        -->
        <v-textarea
          v-model="contents"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="successMessage"
          :success="success"
          :rules="[v => !!v || '내용을 입력하세요.']"
          @input="onChangeTextarea" 
        />
        <div class="text-right">
          <v-btn>이미지첨부</v-btn>
          <v-btn type="submit" color="green" class="ml-2">제출</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      hideDetails: true,
      successMessage: '',
      success: false,
      valid: false,
      contents: ''
    }
  },
  computed: {
    // me() {
    //   return this.$store.state.posts.post;
    // },
    // ...mapState(['users/me']),
    ...mapState('users', ['me']),
  },
  methods: {
    onChangeTextarea(txt) {
      console.log('ajsdif');
      this.hideDetails = true;
    },
    onSubmit() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('posts/ADD_POST', {
          contents: this.contents,
          user: {
            nickname: this.me.nickname,
          },
          // comments: [],
          // images: [],
          id: Date.now(),
          createdAt: Date.now(),
        })
        .then(() => {
          this.hideDetails = false;
          this.success = true;

          // this.contents = '';

          this.successMessage = '게시글 등록 성공';
        })
        .catch(() => {

        })
      }else {
        console.log('submit 되지 않음');
        
        this.hideDetails = false;
        this.successMessage = '다시 확인해주세요';
      }
    }
  }
}
</script>

<style>

</style>