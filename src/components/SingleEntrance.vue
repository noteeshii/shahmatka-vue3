<template>
  <div class="Entrance">
    <div class="Entrance__Floors">
      <floors-list :floors="entrance?.floors" />
    </div>
    <span class="Entrance__Title">
      {{ entrance.title }}
    </span>
  </div>
</template>

<script>
import FloorsList from "./FloorsList.vue";
export default {
  name: "SingleEntrance",
  components: { FloorsList },
  props: {
    entrance: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.Entrance {
  display: flex;
  flex-direction: column;
}
.Entrance__Floors {
  margin-bottom: 10px;
}
.Entrance__Title {
  margin-left: 20px;
  max-width: 100px;
  word-wrap: break-word;
}
</style>
