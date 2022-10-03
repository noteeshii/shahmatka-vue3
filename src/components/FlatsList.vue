<template>
  <single-flat
    v-for="(flat, idx) in flats"
    :key="flat.id"
    :flat="flat"
    @mouseover="onMouseOver(idx)"
    @mouseleave="onMouseleave"
  />
</template>

<script>
import SingleFlat from "./SingleFlat.vue";
import { ref } from "vue";
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

<style scoped>
.col {
  display: flex;
}
.hover {
  background: gainsboro;
}
</style>
