<template>
  <button class="BaseButton">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style scoped>
.BaseButton {
  background: white;
  padding: 6px 8px;
  border: 1px solid #feb108;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
}
</style>
