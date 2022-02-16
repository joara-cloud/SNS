<template>
  <div>
    <v-container class="mb-7">
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
        <!-- 
          auto-grow 줄이 길어지면 자동으로 길어짐
          @input 입력될떄마다
        -->
        <v-textarea
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-message="successMessage"
          :success="success"
          :rules="[v => !!v || '내용을 입력하세요.']"
          @input="onChangeTextarea" 
        />
        <div class="text-right">
          <v-btn type="submit">이미지첨부</v-btn>
          <v-btn type="submit" color="green" class="ml-2">제출</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideDetails: false,
      successMessage: '',
      success: false,
      valid: false
    }
  },
  computed: {
    me() {
      return this.$store.state.posts.post;
    }
  },
  methods: {
    onChangeTextarea(txt) {
      
    },
    onSubmit() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('posts/ADD_POST', 'sdf')
      }
    }
  }
}
</script>

<style>

</style>