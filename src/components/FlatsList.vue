<template>
  <single-flat v-for="flat in flats" :key="flat.id" :flat="flat" />
</template>

<script>
import SingleFlat from "./SingleFlat.vue";
export default {
  name: "FlatsList",
  components: { SingleFlat },
  props: {
    flats: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
