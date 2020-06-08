<template>
  <v-container key="Blog">
    <v-card flat>
      <v-card-title>{{ post.title }}</v-card-title>

      <v-card-text>{{ post.text }} </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BlogPost",
  props: {
    id: { type: String, required: true },
  },
  computed: {
    ...mapGetters("Blog", ["getPostById"]),
    post() {
      // const text1 =
      //   "Hello world!↵↵![TsDYW](/uploads/Ts_DYW_7ba30fa422.png)asdfasdfasdfasdfasdf[TsDYW](/uploads/123456798.png)";
      // const text2 = "Hello world[TsDYW](/uploads/Ts_DYW_7ba30fa422.png)";

      // // This checks if an image was embedded into the text
      // // This image tag is split into two parts
      // // The base URL and the end point
      // const imageTagRegEx = new RegExp(/(\[TsDYW])([a-z\.\/\w-(]*)\)/gm);

      // // This grabs all the groups otherwise returns null
      // const test = text2.match(imageTagRegEx);

      // console.log(test);

      return this.getPostById(this.id);
    },
  },
};
</script>

<style></style>
