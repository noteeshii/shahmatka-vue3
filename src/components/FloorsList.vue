<template>
  <single-floor v-for="floor in floors" :key="floor.floor" :floor="floor">
  </single-floor>
</template>

<script>
import SingleFloor from "./SingleFloor.vue";

export default {
  name: "FloorsList",
  components: {
    SingleFloor,
  },
  props: {
    floors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
