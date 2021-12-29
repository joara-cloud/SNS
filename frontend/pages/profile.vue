<template>
  <div>
    <!-- 로그인한 사용자만 사용할수 있는 페이지 -->
    <v-container>
      <v-card class="mb-3">
        <v-container>
          <v-card-title>내 프로필</v-card-title>
          <v-form>
            <v-text-field
              label="닉네임"
              required
            ></v-text-field>
            <v-btn type="submit" color="green">수정</v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card class="mb-3">
        <v-container>
          <v-card-title>팔로잉</v-card-title>
          팔로잉 리스트
          <follow-list></follow-list>
        </v-container>
      </v-card>
      <v-card class="mb-3">
        <v-container>
          <v-card-title>팔로워</v-card-title>
          팔로워 리스트
          <follow-list></follow-list>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import FollowList from '../components/FollowList.vue'

export default {
  component: {
    FollowList
  }
}
</script>

<style>

</style>