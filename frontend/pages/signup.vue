<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>회원가입</v-card-title>
        <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm"> <!-- ref="form" v-model="valid" 두가지는 vuetify에서 제공하는 속성이므로 넣어야해서 넣은거임 -->
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
            <v-text-field
              label="비밀번호 확인"
              type="password"
              v-model="passwordCheck"
              :rules="passwordCheckRules"
              required
            ></v-text-field>
            <v-text-field
              label="닉네임"
              type="nickname"
              v-model="nickname"
              :rules="nicknameRules"
              required
            ></v-text-field>
            <v-checkbox
              v-model="terms"
              label="회원가입에 동의합니다."
              :rules="termsRules"
              required
            ></v-checkbox>
            <v-btn type="submit" color="green" :disabled="!valid">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false, // 전체 회원가입이 유효한지, vuetify에서 제공하는 기능을 사용하는 것임
      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || '이메일은 필수입니다.'
      ],
      passwordRules: [
        v => !!v || '비밀번호는 필수입니다.'
      ],
      passwordCheckRules: [ // 조건을 나열해주면 되는 듯
        v => !!v || '비밀번호확인은 필수입니다.',
        v => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
      nicknameRules: [
        v => !!v || '닉네임은 필수입니다.'
      ],
      termsRules: [
        v => !!v || '약관은 필수입니다.',
      ]
    }
  },
  methods: {
    onSubmitForm() {
      // this.$refs.form.validate(); // :rules에 정의해놓은 조건들이 모두 맞아야 this.valid의 값이 true로 떨어짐!!! (vuetify)

      if(this.$refs.form.validate()) {
        this.$store.dispatch('users/signUp', {
          nickname: this.nickname,
          email: this.email,
        })
      }

      console.log(this.valid);
    }
  }
}
</script>

<style>

</style>