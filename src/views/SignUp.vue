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
        type="username"
        placeholder="username"
        class="form-control my-2"
        v-model.trim="username"
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
        Sing Up
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signup",
  data() {
    return {
      email: "ksreyr@gmail.com",
      username: "kevin",
      password: "123",
      password2: "123",
    };
  },
  methods: {
    ...mapActions(["userSingUp"]),
    LogUser() {
      this.userSingUp({
        email: this.email,
        username: this.username,
        password: this.password,
      });
      this.email = "";
      this.password = "";
      this.password2 = "";
    },
  },
};
</script>

<style></style>
