<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img
          class="animate__animated animate__fadeIn animate__slow"
          src="@/assets/logo.png"
        >
        </v-img>
        <v-row align="end" class="fill-height text-center">
          <v-col cols="12">
            <span class="subtitle-1 font-weight-bold">Hello world!</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-footer absolute color="white">
      <v-row no-gutters justify="end">
        <a @click="$router.push({ name: 'Blog' })">blog</a>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
/**
 * SM 600px
 * MD 960px
 * LG 1264px
 * XL 1904px
 */
export default {
  name: "Home",
  components: {},
  data: () => ({
    loading: false,
    failed: false,
    timer: false,
  }),
  methods: {
    setTimer(ms) {
      this.timer = true;
      setTimeout(() => {
        this.timer = false;
        return true;
      }, ms);
    },
    async axiosCall() {
      try {
        this.loading = true;
        this.failed = false;
        setTimeout(() => {
          this.loading = false;
          if (Math.floor(Math.random())) {
            this.failed = true;
            this.setTimer(300);
          }
          return true;
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    },
    addRow() {
      console.log("Add Row");
    },
  },
};
</script>

<style></style>
