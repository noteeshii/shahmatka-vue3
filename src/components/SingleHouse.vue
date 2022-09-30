<template>
  <div class="Single-House">
    <div class="Single-House__Entrances">
      <entrances-list :entrances="house?.entrances" />
    </div>
    <span class="Single-House__Title">{{ house.title }}</span>
  </div>
</template>

<script>
import EntrancesList from "./EntrancesList.vue";
export default {
  name: "SingleHouse",
  components: { EntrancesList },
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.Single-House {
}
.Single-House__Entrances {
  display: flex;
  align-items: end;
  margin-bottom: 10px;
}
.Single-House__Title {
  margin-left: 20px;
  font-weight: bold;
  font-size: 18px;
}
</style>
