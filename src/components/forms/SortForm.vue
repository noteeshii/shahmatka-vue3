<template>
  <div class="filtered-form">
    <div class="filtered-form__item">
      <multi-select
        :options="housesList"
        :selected="selectedHouses"
        @selectItem="selectItem"
        @cleanField="cleanSelectedHouses"
        label="Список домов"
        placeholder="Выберите дома"
      />
    </div>
    <div class="filtered-form__item">
      <cost-range-form v-model:from="costRangeFrom" v-model:to="costRangeTo" />
    </div>
    <div class="filtered-form__item">
      <base-select
        v-model="selectedPlan"
        :options="planTypes"
        label="Тип помещения"
      />
      <base-input
        type="number"
        v-model="square"
        label="Площадь помещения (м^2)"
      />
      <base-select
        v-model="selectedStatus"
        :options="statusesList"
        label="Статус помещения"
      />
    </div>
    <div class="filtered-form__item">
      <span>Прочее</span>
      <base-check-box
        type="checkbox"
        v-model="subsidy"
        label="Субсидированная"
      />
      <base-check-box type="checkbox" v-model="marginal" label="Маржинальная" />
      <base-check-box type="checkbox" v-model="renovation" label="С ремонтом" />
      <base-check-box
        type="checkbox"
        v-model="installment"
        label="С рассрочкой "
      />
    </div>
    <base-button @click="sortHandle">Показать </base-button>
  </div>
</template>

<script>
import { ref } from "vue";
import MultiSelect from "../customInputs/MultiSelect.vue";
import CostRangeForm from "./CostRangeForm.vue";
import BaseSelect from "../customInputs/BaseSelect.vue";
import BaseInput from "../customInputs/BaseInput.vue";
import BaseCheckBox from "../customInputs/BaseCheckBox.vue";
import BaseButton from "../customInputs/BaseButton.vue";

export default {
  name: "SortForm",
  components: {
    BaseButton,
    BaseCheckBox,
    BaseInput,
    BaseSelect,
    CostRangeForm,
    MultiSelect,
  },
  props: {
    housesList: {
      type: Array,
      required: true,
      default: () => [],
    },
    planTypes: {
      type: Array,
      required: true,
      default: () => [],
    },
    statusesList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: {
    sort: (attributes) => true,
  },
  setup(props, { emit }) {
    const selectedHouses = ref([]);
    const costRangeFrom = ref("0");
    const costRangeTo = ref("0");
    const selectedPlan = ref();
    const selectedStatus = ref();
    const square = ref();
    const subsidy = ref();
    const marginal = ref();
    const renovation = ref();
    const installment = ref();

    const selectItem = (item) => {
      selectedHouses.value.push(item);
      props.housesList.map((house) => {
        if (house.id === item.id) house.selected = true;
        return house;
      });
    };

    const cleanSelectedHouses = () => {
      selectedHouses.value = [];
      props.housesList.map((house) => {
        house.selected = false;
        return house;
      });
    };

    const sortHandle = () => {
      const attributes = {
        from: parseInt(costRangeFrom.value),
        to: parseInt(costRangeTo.value),
        square: parseFloat(square.value),
        selectedPlan: selectedPlan.value,
        selectedHouses: selectedHouses.value,
        selectedStatus: selectedStatus.value,
        subsidy: !!subsidy.value || false,
        marginal: !!marginal.value || false,
        renovation: !!renovation.value || false,
        installment: !!installment.value || false,
      };
      emit("sort", attributes);
    };

    return {
      selectedHouses,
      selectItem,
      cleanSelectedHouses,
      costRangeFrom,
      costRangeTo,
      selectedPlan,
      selectedStatus,
      square,
      sortHandle,
      subsidy,
      marginal,
      renovation,
      installment,
    };
  },
};
</script>

<style scoped>
.filtered-form {
  column-gap: 5px;
  padding: 5px;
  align-items: center;
}
.filtered-form__item {
  background: #f1f1f1;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
