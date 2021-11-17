<template>
  <div
    class="container my-5 border rounded-3"
    style="background-color:#011F40;"
  >
    <h1 class="my-3 text-white">Escriba sus datos</h1>
    <form @submit.prevent="createCourse" class="mx-4 my-3">
      <input
        type="text"
        placeholder="Course Name"
        class="form-control my-2"
        v-model.trim="name"
      />
      <input
        type="text"
        placeholder="description"
        class="form-control my-2"
        v-model.trim="description"
      />
      <input
        type="text"
        placeholder="tag"
        class="form-control my-2"
        v-model.trim="tag"
      />
      <button type="submit" class="d-flex flex-row btn-lg btn-primary">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import apiCourses from "@/utils/fetchCourses";
export default {
  name: "CreateCourse",
  data() {
    return {
      name: "Course Name",
      tag: "tag description",
      description: "Test Description",
    };
  },
  methods: {
    createCourse() {
      apiCourses
        .createCourse(this.tokenObject, this.name, this.description, this.tag)
        .then((res) => (this.courses = res))
        .finally();
      this.name = "";
      this.url = "";
    },
  },
  computed: {
    ...mapGetters([
      "usuarioAutenticado",
      "usuarioAutenticadoObject",
      "tokenObject",
    ]),
  },
};
</script>
