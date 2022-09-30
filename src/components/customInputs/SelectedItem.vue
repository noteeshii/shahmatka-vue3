<template>
  <div class="item">
    {{ item?.title }}
  </div>
</template>

<script>
export default {
  name: "SelectedItem",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.item {
  max-width: fit-content;
  padding: 2px;
  border: 1px solid cadetblue;
  color: cadetblue;
  border-radius: 5px;
}
</style>
