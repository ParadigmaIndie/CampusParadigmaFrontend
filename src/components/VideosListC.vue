<template>
  <div class="container my-4">
    <h1>{{ titleC }}</h1>

    <div v-for="(video, index) in videos" :key="index" class="list-group">
      <router-link
        :to="{ name: 'Video', params: { videoid: video.id } }"
        class="list-group-item  list-group-item-action flex-column align-items-between"
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
    </div>
  </div>
</template>

<script>
import apiVideos from "@/utils/fetchVideos";
import { mapGetters } from "vuex";
export default {
  name: "VideosListC",
  data() {
    return {
      videos: [],
    };
  },
  computed: {
    titleC() {
      apiVideos
        .allVideosByCourse(this.$route.params.courseid, this.tokenObject)
        .then((res) => (this.videos = res))
        .finally();
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
