<template>
  <div class="container my-4">
    <p class=" display-4">
      <strong>{{ titleC }}</strong>
    </p>
    <div v-if="owner" class="row">
      <p class="text-start display-6">
        Parece que eres el autor de este curso.
      </p>
      <p class="text-start">
        Por ese motivo puedes modificarlo. Ten cuidado con la acciones ya que no
        se pueden deshacer.
      </p>

      <form @submit.prevent="deleteCourse()">
        <button type="submit" class="btn btn-danger mb-2 d-block">
          Eliminar Curso
        </button>
      </form>
      <form @submit.prevent="">
        <button type="submit" class="btn btn-primary mb-2 d-block">
          adjuntar video
        </button>
      </form>
    </div>

    <div v-if="!toSee" class="d-flex mb-2 position-sticky">
      <form @submit.prevent="">
        <button type="submit" class="btn btn-primary">
          Agregar curso a mis curso para estudiar
        </button>
      </form>
    </div>
    <div v-for="(video, index) in videos" :key="index" class="list-group">
      <div class="row col-12 mb-2 m-0">
        <router-link
          :to="{ name: 'Video', params: { videoid: video.id } }"
          class="col list-group-item  list-group-item-action"
        >
          <div class="d-flex align-items-center">
            <img
              :src="`https://picsum.photos/1024/480/?image=${index + 1}`"
              alt="..."
              style="height: 10rem; object-fit: cover;"
              class="me-2"
            />
            <div class="text-start">
              <h5 class="">
                <strong>{{ video.name }}</strong>
              </h5>
              <p class="">
                {{ video.description }}
              </p>
              <small>tag: <br />{{ video.tags }}</small>
            </div>
          </div>
        </router-link>
        <div v-if="owner" class="col-2 m-0 d-flex">
          <form @submit.prevent="deleteVideo(video.id)">
            <button type="submit" class="btn btn-danger">Eliminar video</button>
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
