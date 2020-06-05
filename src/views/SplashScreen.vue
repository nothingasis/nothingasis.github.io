<template>
  <transition
    mode="out-in"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
  >
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-img src="@/assets/logo.png" />
        </v-col>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
export default {
  name: "SplashScreen",
};
</script>

<style></style>
