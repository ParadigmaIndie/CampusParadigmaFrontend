<template>
  <router-link
    :to="{ name: where, params: { courseid: param.id } }"
    :class="`btn  btn-${buttonstyle}`"
    style=""
  >
    <strong>
      {{ messag }}
    </strong>
  </router-link>
</template>

<script>
export default {
  name: "ButtonC",
  props: {
    param: {
      type: Object,
    },
    buttonstyle: {
      type: String,
      default: "",
    },
    where: {
      type: String,
      default: "Videos",
    },
    messag: {
      type: String,
      default: "Ver",
    },
  },
};
</script>

<style></style>
