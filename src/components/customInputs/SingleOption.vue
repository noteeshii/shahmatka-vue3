<template>
  <div
    class="option"
    :class="[option.selected ? 'selected' : '']"
    @click.self="selectHandle"
  >
    {{ option.title }}
  </div>
</template>

<script>
export default {
  name: "SingleOption",
  props: {
    option: {
      type: Object,
    },
  },
  emits: {
    select: (option) => true,
  },
  setup(props, { emit }) {
    const selectHandle = () => {
      if (props.option.selected) return;
      emit("select", props.option);
    };
    return {
      selectHandle,
    };
  },
};
</script>

<style scoped>
.option {
  display: flex;
  padding: 5px;
}
.option:hover {
  background: #feb108;
}
.selected {
  background: cadetblue;
}
</style>
