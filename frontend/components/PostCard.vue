<template>
  <div>
    <v-card v-for="p in mainPosts" :key="p.id" class="mb-3">
      
      <v-card-title>
        <!-- <v-avatar color="grey darken-3">
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            alt="John"
          >
        </v-avatar> -->
        <span class="text-subtitle-1">{{p.user.nickname}}</span>
      </v-card-title>

      <v-card-text class="text-h7">
        {{p.contents}}
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text small color="green">
          <v-icon>mdi-repeat-variant</v-icon>
        </v-btn>
        <v-btn text small color="green">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn text small color="green">
          <v-icon>mdi-comment</v-icon>
        </v-btn>
        <v-btn text small color="green">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-card-actions>

    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  created() {

  },
  computed: {
    ...mapState('users', ['me']),
    ...mapState('posts', ['mainPosts'])
  }
}
</script>

<style>

</style>