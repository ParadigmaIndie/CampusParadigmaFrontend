<template>
  <div class="home">
    <CoursesC />
  </div>
</template>

<script>
// @ is an alias to /src
import CoursesC from "@/components/CoursesC.vue";

export default {
  name: "Courses",
  components: {
    CoursesC,
  },
};
</script>
