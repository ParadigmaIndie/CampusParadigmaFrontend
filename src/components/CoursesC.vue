<template>
  <div id="all" class="m-2">
    <div class="container my-4 ">
      <p class="fs-1 fw-bolder text-start">Cursos</p>
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
            <div class="card-body  m-0 p-2" style="">
              <div class="d-flex justify-content-center">
                <p class="align-self-center">
                  <strong><span> Tags:</span></strong>
                  {{ course.tags }}
                </p>
                <a
                  href="#"
                  class="btn  btn-primary m-4  d-flex justify-content-center"
                  style="width: 10rem;"
                  >Ver el curso</a
                >
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
import apiCourses from "@/utils/fetchCourses";
export default {
  data() {
    return {
      courses: [],
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
    this.fetchCourses();
  },
};
</script>

<style></style>
