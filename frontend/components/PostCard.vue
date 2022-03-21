<template>
  <div class="post-card">
    <v-card>
      <v-card-title>
        <span class="text-subtitle-1">{{ post.user.nickname }}</span>
      </v-card-title>

      <v-card-text class="text-h7">
        {{ post.contents }}
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text small color="green">
          <v-icon>mdi-repeat-variant</v-icon>
        </v-btn>
        <v-btn text small color="green">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn text small color="green" @click="onToggleComment">
          <v-icon>mdi-comment</v-icon>
        </v-btn>

        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn text small color="green" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" >
              <v-list-item-title @click="clickMoreMenu(item.event)">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-card-actions>
    </v-card>
    <template v-if="commentOpend">
      <commentForm :postId="post.id"></commentForm>
      <v-list>
        <v-list-item>
          <v-list-item-avatar color="teal">sdf</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>title</v-list-item-title>
            <v-list-item-subtitle>subtitle</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import commentForm from './CommentForm.vue';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    commentForm
  },
  created() {},
  computed: {
    ...mapState("users", ["me"]),
    ...mapState("posts", ["mainPosts"]),
  },
  data() {
    return {
      items: [
        { 
          title: '수정',
          event: 'onEditPost'
        },
        {
          title: '삭제',
          event: 'onRemovePost'
        },
      ],
      commentOpend: false
    };
  },
  methods: {
    clickMoreMenu(event) {
      if(event === 'onRemovePost') {
        this.onRemovePost();
      }else if(event === 'onEditPost') {
        this.onEditPost();
      }
    },
    onRemovePost() {
      this.$store.dispatch('posts/REMOVE_POST', {
        id: this.post.id
      });
    },
    onEditPost() {
      console.log("수정");
    },
    onToggleComment() {
      this.commentOpend = !this.commentOpend;
    }
  },
};
</script>

<style>
</style>