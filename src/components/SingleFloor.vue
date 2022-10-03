<template>
  <div class="Floor">
    <span class="Floor__Number">{{ floor.floor }}</span>
    <div class="Floor__Flats-List">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleFloor",
  props: {
    floor: {
      type: Object,
      required: true,
    },
  },
  emits: ["startHover", "stopHover"],
  setup(props, { emit }) {
    const startHover = (idx) => {
      emit("startHover", idx);
    };

    const stopHover = () => {
      emit("stopHover");
    };

    return {
      startHover,
      stopHover,
    };
  },
};
</script>

<style scoped>
.Floor {
  display: flex;
  column-gap: 5px;
  /*padding: 2px;*/
  align-items: center;
}
.Floor:hover {
  background: lightblue;
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
  /*column-gap: 5px;*/
}
</style>
