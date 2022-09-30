<template>
  <label class="BaseCheckBox" :class="{ checked: isChecked }">
    <span class="BaseCheckBox__label"> {{ label }} </span>
    <input
      class="BaseCheckBox__field"
      type="checkbox"
      value="true"
      v-model="modelValue"
      @change="inputHandle"
    />
  </label>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BaseCheckBox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    },
    label: String,
  },
  emits: {
    "update:modelValue": (modelValue) => true,
  },
  setup(props, { emit }) {
    const isChecked = ref(false);

    const inputHandle = (event) => {
      isChecked.value = event.target.checked;
      emit("update:modelValue", event.target.checked);
    };

    return {
      inputHandle,
      isChecked,
    };
  },
};
</script>

<style scoped>
.BaseCheckBox {
  border: 1px solid #feb108;
  display: flex;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  background: white;
  justify-content: center;
}
.checked {
  background: #feb108;
}
.BaseCheckBox__label {
}
.BaseCheckBox__field {
  display: none;
}
</style>
