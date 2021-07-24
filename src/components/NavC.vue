<template>
  <nav class="navbar  " style="background-color:#011F48;">
    <div class=" container-fluid">
      <router-link to="/" class="navbar-brand m-2">
        <img alt="Vue logo" src="../assets/logo.svg" />
      </router-link>
      <div class="" id="navbarToggleExternalContent">
        <router-link
          v-if="!usuarioAutenticado"
          to="/login"
          class="navbar-brand m-2 text-white "
        >
          Log In
        </router-link>
        <router-link
          v-if="!usuarioAutenticado"
          to="/signup"
          class="navbar-brand m-2 text-white"
        >
          Sign Up
        </router-link>
        <router-link
          v-if="usuarioAutenticado"
          to="/"
          class="navbar-brand m-2 text-white"
        >
          <div class="me-5">
            <p class="my-0 py-0">
              Bienvenido {{ usuarioAutenticadoObject.username }}
            </p>
            <p class="my-0 py-0 fw-lighter">
              email {{ usuarioAutenticadoObject.email }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavC",
  computed: {
    ...mapGetters(["usuarioAutenticado", "usuarioAutenticadoObject"]),
  },
};
</script>

<style></style>
