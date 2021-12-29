<template>
  <v-container>
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field
            label="이메일"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="비밀번호"
            type="password"
            v-model="password"
            :rules="passwordRules"
            required
          ></v-text-field>
          <v-btn color="green" type="submit">로그인</v-btn>
          <v-btn nuxt to="/signup">회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false, // 전체 회원가입이 유효한지, vuetify에서 제공하는 기능을 사용하는 것임
      email: '',
      password: '',
      emailRules: [
        v => !!v || '이메일은 필수입니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.'
      ]
    }
  },
  methods: {
    onSubmitForm() {
      this.$refs.form.validate(); // :rules에 정의해놓은 조건들이 모두 맞아야 this.valid의 값이 true로 떨어짐!!! (vuetify)

      console.log(this.valid);
    }
  }
}
</script>

<style>

</style>