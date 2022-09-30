<template>
  <label class="BaseInput">
    <span class="BaseInput__label"> {{ label }} </span>
    <input
      class="BaseInput__field"
      :type="type"
      v-model="modelValue"
      @change="inputHandle"
    />
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    label: String,
    min: {
      type: String,
      required: false,
      default: "0",
    },
    max: {
      type: String,
      required: false,
      default: "0",
    },
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: {
    "update:modelValue": (modelValue) => true,
  },
  setup(props, { emit }) {
    const inputHandle = (event) => {
      emit("update:modelValue", event.target.value);
    };
    return {
      inputHandle,
    };
  },
};
</script>

<style scoped>
.BaseInput {
  display: flex;
  flex-direction: column;
}
.BaseInput__label {
  margin-bottom: 5px;
}
.BaseInput__field {
  padding: 5px 5px;
  border: 1px solid #feb108;
  border-radius: 10px;
}
.BaseInput__field:focus {
  outline: cadetblue;
}
</style>
