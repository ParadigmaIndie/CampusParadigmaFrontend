<template>
  <div id="all" class="m-2">
    <div class="container my-4 ">
      <p class="fs-1 fw-bolder text-start">{{ titleC }}</p>
      <div class=" row ">
        <div v-for="(course, index) in courses" :key="index" class="col-sm-4">
          <div class="card my-2" style="">
            <div class="m-2">
              <img
                :src="`https://picsum.photos/1024/480/?image=${index + 1}`"
                class="card-img-top"
                style=" height: 15rem; object-fit: cover;"
                alt="..."
              />
            </div>
            <div class="card-body  m-0 p-2" style="height: 7rem;">
              <h5 class="card-title text-start ">
                <span>{{ course.name }} </span>
              </h5>
              <p class="card-text text-start">
                {{ course.description }}
              </p>
            </div>
            <div class="card-body  m-0 p-1" style="">
              <div class="d-flex justify-content-center">
                <p class="align-self-center">
                  <strong><span> Tags:</span></strong>
                  {{ course.tags }}
                </p>
                <div class="d-flex">
                  <router-link
                    :to="{ name: 'Videos', params: { courseid: course.id } }"
                    class="btn  btn-primary m-1 d-flex justify-content-center"
                    style="width: 5rem;"
                    >Ver el curso
                  </router-link>
                  <router-link
                    :to="{ name: 'Videos', params: { courseid: course.id } }"
                    class="btn  btn-primary m-1 d-flex justify-content-center"
                    style="width: 5rem;"
                    >Agregar
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import apiCourses from "@/utils/fetchCourses";
export default {
  data() {
    return {
      courses: [],
      owner: false,
    };
  },
  methods: {
    fetchCourses() {
      apiCourses
        .allCourses()
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
            this.tokenObject
          )
          .then((res) => (this.courses = res))
          .finally();
        return "Mis Cursos";
      } else if (this.$route.params.coursestyp === "createdCourses") {
        apiCourses
          .allMadeCourses(this.usuarioAutenticadoObject.email, this.tokenObject)
          .then((res) => (this.courses = res))
          .finally();
      } else {
        this.fetchCourses();
        return "Cursos";
      }
    },
  },
};
</script>

<style></style>
