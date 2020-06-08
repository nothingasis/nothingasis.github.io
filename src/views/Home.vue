<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img src="@/assets/logo.png"> </v-img>
        <v-row class="fill-height text-center">
          <v-col cols="12">
            <span class="subtitle-1 font-weight-bold">Hello world!</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-footer absolute color="white">
      <v-row no-gutters justify="end" class="pb-4">
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
  data: () => ({}),
  methods: {}
};
</script>

<style></style>
