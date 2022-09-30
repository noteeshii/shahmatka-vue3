<template>
  <div
    @click="clickHandle"
    @mouseleave="mouseLeaveHandle"
    class="Flat"
    :class="[[flat.plan_type ? 'Filled' : 'Empty']]"
    :style="flatSortedColor"
  >
    {{ flat?.plan_type }}
    <div v-if="isInfoOpen && flatLength > 0" class="Flat__Info">
      <h2>{{ flat?.type }}</h2>
      <span> Цена - {{ flat?.cost }}р </span>
      <span> Площадь - {{ flat?.square }}м^2 </span>
      <span> Тип плавнировки - {{ flat?.plan_type }} </span>
      <span> Номер - {{ flat?.number }} </span>
      <span> Этаж - {{ flat?.floor }} </span>
      <span> Статус - {{ flat?.status }} </span>
      <span> Маржинальная - {{ booleanToYesOrNo(flat?.marginal) }} </span>
      <span> Субсидированная - {{ booleanToYesOrNo(flat?.subsidy) }} </span>
      <span> С ремонтом - {{ booleanToYesOrNo(flat?.renovation) }} </span>
      <span> С рассрочкой - {{ booleanToYesOrNo(flat?.installment) }} </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "SingleFlat",
  props: {
    flat: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isInfoOpen = ref(false);
    const clickHandle = () => {
      isInfoOpen.value = true;
    };
    const mouseLeaveHandle = () => {
      isInfoOpen.value = false;
    };

    const booleanToYesOrNo = (bool) => {
      return bool ? "Да" : "Нет";
    };

    const flatLength = computed(() => Object.keys(props.flat).length);
    const flatSortedColor = computed(() => {
      if (!props?.flat?.bgColor) return "";
      return `background: ${props?.flat?.bgColor}`;
    });

    return {
      isInfoOpen,
      flatLength,
      flatSortedColor,
      booleanToYesOrNo,
      clickHandle,
      mouseLeaveHandle,
    };
  },
};
</script>

<style scoped>
.Flat {
  color: white;
  padding: 2px;
  width: 18px;
  height: 18px;
  text-align: center;
  align-content: center;
  cursor: pointer;
  font-size: 12px;
  position: relative;
}
.Flat__Info {
  min-width: 150px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  background: white;
  color: black;
  padding: 5px;
  border: 1px solid #feb108;
  border-radius: 5px;
}

.Filled {
  background: #a6a6a6;
}

.Empty {
  background: #d3d3d3;
}

.Flat:hover {
  background: gray;
}
</style>
