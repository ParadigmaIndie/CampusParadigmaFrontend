<template>
  <div class="card-body bg-dark p-2 text-white bg-opacity-75">
    <h5 class="card-title text-start">
      <span class="">{{ obj.name }} </span>
      <hr class="m-0 p-0" />
    </h5>
    <p class="card-text text-start" style="height: 4rem;">
      {{ obj.description }}
      <br />
    </p>
    <p class="card-text text-start">
      <strong> Tags:</strong>
      {{ obj.tags }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BodyC",
  props: {
    obj: {
      type: Object,
    },
  },
};
</script>

<style></style>
