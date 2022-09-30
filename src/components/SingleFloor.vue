<template>
  <div class="Floor">
    <span class="Floor__Number">{{ floor.floor }}</span>
    <div class="Floor__Flats-List">
      <flats-list :flats="floor.flats" />
    </div>
  </div>
</template>

<script>
import FlatsList from "./FlatsList.vue";

export default {
  name: "SingleFloor",
  components: {
    FlatsList,
  },
  props: {
    floor: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.Floor {
  display: flex;
  column-gap: 5px;
  padding: 2px;
  align-items: center;
}
.Floor:hover {
  background: gainsboro;
}

.Floor:hover > .Floor__Number {
  color: white;
}
.Floor__Number {
  min-width: 16px;
  min-height: 10px;
  color: #a6a6a6;
  text-align: end;
}
.Floor__Flats-List {
  display: flex;
  column-gap: 5px;
}
</style>
