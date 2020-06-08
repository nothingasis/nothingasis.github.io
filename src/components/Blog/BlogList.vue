<template>
  <v-container key="Blog">
    <v-card flat v-for="post in posts" :key="post.id">
      <v-card-title>Blog Title</v-card-title>

      <v-card-text
        >{{
          post.text.length > 60 ? post.text.substring(0, 60) + "..." : post.text
        }}
        <router-link :to="`blog/${post.id}`"
          >Read more...</router-link
        ></v-card-text
      >
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogList",
  computed: {
    ...mapState("Blog", ["posts"])
  }
};
</script>

<style></style>
