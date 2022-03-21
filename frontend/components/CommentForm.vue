<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm" class="mt-3">
    <v-textarea 
      v-model="content"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
      outlined
    ></v-textarea>
    <div class="text-right mt-3">
      <v-btn type="submit" outlined>등록</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      content: '',
      success: false,
      successMessages: '',
      hideDetails: true
    }
  },
  props: {
    postId: Number,
    required: true
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    }
  },
  methods: {
    onChangeTextarea(value) {
      if(value.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = '';
      }
    },
    onSubmitForm() {
      this.$store.dispatch('posts/ADD_COMMENT', {
        id: Date.now(),
        postId: this.postId,
        content: this.valid,
        user: {
          nickname: this.me.nickname
        }
      })
      .then(() => {
        this.content = '';
        this.success = true;
        this.successMessages = '';
        this.hideDetails = false;
      })
      .catch(() => {

      })
    },
  }
}
</script>

<style>

</style>