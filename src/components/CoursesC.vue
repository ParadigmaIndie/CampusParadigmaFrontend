<template>
  <div class="container">
    HELLO
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["allCourses"]),
  },
  created() {
    this.allCourses();
  },
};
</script>

<style></style>
