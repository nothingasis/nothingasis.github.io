<template>
  <BlogPost v-if="id" />
  <BlogList v-else />
</template>

<script>
import BlogPost from "@/components/Blog/BlogPost.vue";
import BlogList from "@/components/Blog/BlogList.vue";
export default {
  name: "",
  components: {
    BlogPost,
    BlogList
  },
  props: {
    id: { type: String, default: "" }
  },
  data: () => ({
    isIntersecting: false
  }),
  methods: {
    // eslint-disable-next-line
    onIntersect(entries, observer) {
      const node = entries.pop();
      const nodeTarget = node.target;
      const animationName = "animate__flipInX";

      console.log("node.intersectionRatio: ", node.intersectionRatio);
      if (node.intersectionRatio >= 0.5) {
        console.log("flip");
        nodeTarget.classList.add(`animate__animated`, animationName);
      } else {
        console.log("Stop flipping");
        handleAnimationEnd;
      }

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        nodeTarget.classList.remove(`animate__animated`, animationName);
        nodeTarget.removeEventListener("animationend", handleAnimationEnd);

        console.log("Animation ended");
      }

      nodeTarget.addEventListener("animationend", handleAnimationEnd);
    }
  }
};
</script>

<style></style>
