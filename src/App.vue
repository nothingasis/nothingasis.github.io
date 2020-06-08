<template>
  <v-app>
    <v-app-bar dense app flat color="primary" v-if="!$route.meta.hideAppBar">
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-icon color="white">fa-arrow-left</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data: () => ({}),
  mounted() {
    console.log("$route", this.$route);
    this.initialAppData();
  },
  methods: {
    ...mapActions("Blog", ["getBlogPosts"]),
    async initialAppData() {
      await this.getBlogPosts();
    },
  },
};
</script>
