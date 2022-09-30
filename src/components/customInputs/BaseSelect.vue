<template>
  <label class="BaseSelect">
    <span class="BaseSelect__label"> {{ label }} </span>
    <select class="BaseInput__field" @change="selectHandle">
      <option selected></option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
    },
    label: String,
  },
  emits: {
    "update:modelValue": (modelValue) => true,
  },
  setup(props, { emit }) {
    const selectHandle = (event) => {
      emit("update:modelValue", event.target.value);
    };
    return {
      selectHandle,
    };
  },
};
</script>

<style scoped>
.BaseSelect {
  display: flex;
  flex-direction: column;
}
.BaseSelect__label {
  margin-bottom: 5px;
}
.BaseInput__field {
  padding: 4px 5px;
  border: 1px solid #feb108;
  border-radius: 10px;
}
.BaseInput__field:focus-visible {
  outline: cadetblue;
}
</style>
