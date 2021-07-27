<template>
  <div class="container">
    <div>{{ video.name }}</div>
    <div class="embed-responsive embed-responsive-16by9 ">
      <iframe
        class="embed-responsive-item"
        :src="video.url"
        width="70%"
        height="380px"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import apiVideos from "@/utils/fetchVideos";
export default {
  name: "VideoC",
  data() {
    return {
      video: [],
      titel: "",
    };
  },
  methods: {
    titleC() {
      apiVideos
        .getVideoById(this.$route.params.videoid)
        .then((res) => (this.video = res))
        .finally((this.titel = "peticion"));
    },
  },
  computed: {},
  created() {
    this.titleC();
  },
};
</script>

<style></style>
