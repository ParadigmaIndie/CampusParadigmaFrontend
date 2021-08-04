<template>
  <div class="container my-4">
    <h1>{{ titleC }}</h1>
    <div v-if="owner" class="d-flex justify-content-left py-4">
      <form @submit.prevent="deleteCourse()">
        <button type="submit" class="btn btn-danger m-2">Eliminar Curso</button>
      </form>
      <form @submit.prevent="">
        <button type="submit" class="btn btn-primary m-2">
          adjuntar video
        </button>
      </form>
    </div>
    <div v-if="!toSee">
      <form @submit.prevent="">
        <button type="submit" class="btn btn-primary m-2">
          Agregar curso a mis curso para estudiar
        </button>
      </form>
    </div>
    <div v-for="(video, index) in videos" :key="index" class="list-group">
      <div class="row col-12 align-items-center">
        <router-link
          :to="{ name: 'Video', params: { videoid: video.id } }"
          class="col list-group-item  list-group-item-action flex-column align-items-between"
        >
          <div class=" d-flex w-400 justify-content-between align-items-center">
            <h5 class="">{{ video.name }}</h5>
            <p class="">
              {{ video.description }}
            </p>
            <small>tag: <br />{{ video.tags }}</small>
          </div>

          <!---->
        </router-link>
        <div v-if="owner" class="col-2">
          <form @submit.prevent="deleteVideo(video.id)">
            <button type="submit" class="btn btn-danger">Eliminar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiVideos from "@/utils/fetchVideos";
import apiCourses from "@/utils/fetchCourses";
import { mapGetters } from "vuex";
export default {
  name: "VideosListC",
  data() {
    return {
      videos: [],
      owner: false,
      toSee: false,
    };
  },
  methods: {
    fetchToSeeCourses() {
      apiCourses
        .allCoursesToSee(this.usuarioAutenticadoObject.email, this.tokenObject)
        .then((res) => {
          var list = res.filter(
            (item) => item.id === this.$route.params.courseid
          );
          console.log("TOSEE ", list);
          this.toSee = list.length === 1 ? true : false;
        })
        .finally();
    },

    goToCourses() {
      this.$router.push({
        name: "Courses",
        params: { coursestyp: "createdCourses" },
      });
    },
    deleteVideo(id) {
      apiVideos
        .deleteVideoById(id, this.tokenObject)
        .then((res) => (this.videos = res))
        .finally();
    },
    deleteCourse() {
      apiCourses
        .deleteCourse(this.$route.params.courseid, this.tokenObject)
        .then((res) => {
          console.log("Delete:", res);
          this.goToCourses();
        })
        .finally();
    },
    fetchVideos() {
      apiVideos
        .allVideosByCourse(this.$route.params.courseid, this.tokenObject)
        .then((res) => (this.videos = res))
        .finally();
    },
    isOwner() {
      if (this.usuarioAutenticadoObject === null) {
        this.owner = false;
      } else {
        apiCourses
          .allMadeCourses(this.usuarioAutenticadoObject.email, this.tokenObject)
          .then((res) => {
            var list = res.filter(
              (item) => item.id === this.$route.params.courseid
            );
            this.owner = list.length === 1 ? true : false;
          })
          .finally();
      }
    },
  },
  created() {
    this.isOwner();
    this.fetchVideos();
    this.fetchToSeeCourses();
  },
  computed: {
    titleC() {
      return "Videos del curso";
    },

    ...mapGetters([
      "usuarioAutenticado",
      "usuarioAutenticadoObject",
      "tokenObject",
    ]),
  },
};
</script>

<style></style>
