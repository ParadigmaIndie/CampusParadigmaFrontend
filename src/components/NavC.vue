<template>
  <nav class="navbar  " style="background-color:#011F48;">
    <div class=" container-fluid">
      <router-link to="/" class="navbar-brand m-2">
        <img alt="Vue logo" src="../assets/logo.svg" />
      </router-link>
      <div class="ms-auto">
        <router-link
          v-if="!usuarioAutenticado"
          to="/login"
          class="btn text-white"
        >
          Log In
        </router-link>
        <router-link
          v-if="!usuarioAutenticado"
          to="/signup"
          class="btn text-white "
        >
          Sign Up
        </router-link>
        <router-link
          v-if="usuarioAutenticado"
          class="btn text-white"
          :to="{ name: 'Home' }"
        >
          Descubre
        </router-link>
        <router-link
          v-if="usuarioAutenticado"
          class="btn text-white"
          :to="{ name: 'Courses', params: { coursestyp: 'mycourses' } }"
        >
          Mis cursos
        </router-link>
        <router-link
          v-if="usuarioAutenticado"
          to="/perfil"
          class="btn text-white"
        >
          Hola
          <strong> {{ usuarioAutenticadoObject.username }} </strong>
        </router-link>
        <button
          v-if="usuarioAutenticado"
          @click="cerrarSesion"
          class="btn text-white"
        >
          Cerrar Sesion
        </button>
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
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>

<style></style>
