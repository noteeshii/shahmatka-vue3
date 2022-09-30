<template>
  <single-entrance
    v-for="entrance in entrances"
    :key="entrance.id"
    :entrance="entrance"
  />
</template>

<script>
import SingleEntrance from "./SingleEntrance.vue";
export default {
  name: "EntrancesList",
  components: { SingleEntrance },
  props: {
    entrances: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
