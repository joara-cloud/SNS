<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
    <v-textarea 
      v-model="content"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    ></v-textarea>
    <v-btn type="submit">등록</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false
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