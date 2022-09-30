<template>
  <div class="cost-range-form">
    <span> Ценовой диапазон </span>
    <base-input type="number" label="От" v-model="from" @input="fromHandle" />
    <base-input type="number" label="До" v-model="to" @input="toHandle" />
  </div>
</template>

<script>
import BaseInput from "../customInputs/BaseInput.vue";
export default {
  name: "CostRangeForm",
  components: { BaseInput },
  props: {
    from: {
      type: String,
      required: true,
      default: "0",
    },
    to: {
      type: String,
      required: true,
      default: "0",
    },
  },
  emits: { "update:from": (from) => true, "update:to": (to) => true },
  setup(props, { emit }) {
    const fromHandle = (event) => {
      emit(`update:from`, event.target.value);
    };
    const toHandle = (event) => {
      emit(`update:to`, event.target.value);
    };
    return {
      fromHandle,
      toHandle,
    };
  },
};
</script>

<style scoped>
.cost-range-form {
  display: flex;
  flex-direction: column;
}
.cost-range-form__label {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
</style>
