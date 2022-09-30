<template>
  <single-house v-for="house in houses" :key="house.id" :house="house" />
</template>

<script>
import SingleHouse from "./SingleHouse.vue";
export default {
  name: "HousesList",
  components: { SingleHouse },
  props: {
    houses: {
      type: Array,
      required: true,
    },
  },
};
</script>
