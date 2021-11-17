<template>
  <div id="all" class="m-2">
    <div class="container my-4 ">
      <p class="fs-1 fw-bolder text-start">{{ titleC }}</p>
      <div class="row">
        <div v-for="(course, index) in courses" :key="index" class="col-sm-4">
          <CardC :obj="course" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import apiCourses from "@/utils/fetchCourses";
import ButtonC from "@/components/buttons/ButtonC.vue";
import CardC from "@/components/cards/CardC.vue";
export default {
  components: {
    ButtonC,
    CardC,
  },
  data() {
    return {
      courses: [],
      owner: false,
      myCourses: false,
    };
  },
  methods: {
    fetchCourses() {
      apiCourses
        .allCourses()
        .then((res) => (this.courses = res))
        .finally();
    },
    fetchMyCourses() {
      apiCourses
        .allMadeCourses(this.usuarioAutenticadoObject.email, this.tokenObject)
        .then((res) => (this.courses = res))
        .finally();
    },
  },
  created() {
    if (this.$route.params.coursestyp === null) {
      this.fetchCourses();
    }
  },
  computed: {
    ...mapGetters([
      "usuarioAutenticado",
      "usuarioAutenticadoObject",
      "tokenObject",
    ]),

    titleC() {
      if (this.$route.params.coursestyp === "mycourses") {
        apiCourses
          .allCoursesToSee(
            this.usuarioAutenticadoObject.email,
            this.tokenObject,
            (this.myCourses = true)
          )
          .then((res) => (this.courses = res))
          .finally();
        return "Mis Cursos";
      } else if (this.$route.params.coursestyp === "createdCourses") {
        console.log("TITEL_C");
        this.fetchMyCourses();
        return "Cursos creados";
      } else {
        this.fetchCourses();
        return "Cursos";
      }
    },
  },
};
</script>

<style></style>
