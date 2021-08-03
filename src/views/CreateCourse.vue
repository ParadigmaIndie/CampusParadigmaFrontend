<template>
  <div
    class="container my-5 border rounded-3"
    style="background-color:#011F40;"
  >
    <h1 class="my-3 text-white">Escriba sus datos</h1>
    <form @submit.prevent="LogUser" class="mx-4 my-3">
      <input
        type="name"
        placeholder="Course Name"
        class="form-control my-2"
        v-model.trim="name"
      />
      <input
        type="url"
        placeholder="url"
        class="form-control my-2"
        v-model.trim="url"
      />
      <button type="submit" class="d-flex flex-row btn-lg btn-primary">
        Log In
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateCourse",
  data() {
    return {
      name: "Course Name",
      url: "www.xxxxxxxxxx.com",
    };
  },
  methods: {
    ...mapActions(["userLoggin"]),
    LogUser() {
      this.userLoggin({ email: this.email, password: this.password });
      this.email = "";
      this.password = "";
      this.password2 = "";
    },
  },
};
</script>
