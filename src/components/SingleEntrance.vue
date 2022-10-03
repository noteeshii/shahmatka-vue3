<template>
  <div class="Entrance">
    <div class="Entrance__Floors">
      <single-floor
        v-for="floor in entrance?.floors"
        :key="floor.floor"
        :floor="floor"
      >
        <div
          class="col"
          v-for="(flat, idx) in floor.flats"
          :key="flat.id"
          :class="isColumnHover(idx)"
          @mouseover="onMouseOver(idx)"
          @mouseleave="onMouseleave"
        >
          <single-flat :flat="flat" />
        </div>
      </single-floor>
    </div>
    <span class="Entrance__Title">
      {{ entrance.title }}
    </span>
  </div>
</template>

<script>
import SingleFloor from "./SingleFloor.vue";
import SingleFlat from "./SingleFlat.vue";
import { ref } from "vue";
export default {
  name: "SingleEntrance",
  components: { SingleFloor, SingleFlat },
  props: {
    entrance: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isColumnHover = (idx) => {
      return idx === idxOfColumnHover.value ? "hover" : "";
    };
    const idxOfColumnHover = ref();
    const onMouseOver = (idx) => {
      idxOfColumnHover.value = idx;
    };
    const onMouseleave = () => {
      idxOfColumnHover.value = null;
    };

    return {
      onMouseOver,
      onMouseleave,
      isColumnHover,
    };
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
.col {
  padding: 2px;
}
.hover {
  background: lightblue;
}
</style>
