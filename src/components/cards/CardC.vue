<template>
  <div
    class="card my-2"
    :style="
      `background-image: url(` +
        `https://picsum.photos/1024/480/?image=${index + 1}` +
        `)
              no-repeat center center fixed; 
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              height: 20rem;`
    "
  >
    <div style="height: 35rem;"></div>
    <BodyC :obj="obj" />
    <ButtonC
      :param="obj"
      buttonstyle="primary"
      where="Videos"
      messag="Ver Curso"
    />
  </div>
</template>

<script>
import ButtonC from "@/components/buttons/ButtonC.vue";
import BodyC from "@/components/cards/BodyC.vue";
export default {
  components: {
    ButtonC,
    BodyC,
  },
  name: "CardC",
  props: {
    obj: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style></style>
