<template>
  <div
    class="container my-5 border rounded-3"
    style="background-color:#011F40;"
  >
    <h1 class="my-3 text-white">Escriba sus datos</h1>
    <form @submit.prevent="LogUser" class="mx-4 my-3">
      <input
        type="email"
        placeholder="email"
        class="form-control my-2"
        v-model.trim="email"
      />
      <input
        type="password"
        placeholder="password"
        class="form-control my-2"
        v-model.trim="password"
      />
      <input
        type="password"
        placeholder="repeat password"
        class="form-control my-2"
        v-model.trim="password2"
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
  data() {
    return {
      email: "t@t.com",
      password: "123",
      password2: "123",
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

<style></style>
