<template>
  <div>
    <span> {{ label }} </span>
    <div class="Multi-Select" @click="openHandle" @mouseleave="closeHandle">
      <div class="Multi-Select__Field">
        <div class="Multi-Select__List">
          <span class="Multi-Select__placeholder" v-show="!selected.length">
            {{ placeholder }}
          </span>
          <selected-item
            class="Multi-Select__Item"
            v-for="item in selected"
            :key="item.id"
            :item="item"
          />
        </div>
        <button class="Multi-Select__clean" @click.self="cleanField">X</button>
      </div>
      <div class="Multi-Select__Options" v-if="isListOpen">
        <single-option
          v-for="option in options"
          :key="option.id"
          :option="option"
          @select="selectHandle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SingleOption from "./SingleOption.vue";
import SelectedItem from "./SelectedItem.vue";

export default {
  name: "MultiSelect",
  components: { SelectedItem, SingleOption },
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
    },
    label: String,
    placeholder: String,
  },
  emits: {
    selectItem: (option) => true,
    cleanField: () => true,
  },
  setup(props, { emit }) {
    const isListOpen = ref(false);

    const openHandle = () => {
      isListOpen.value = true;
    };
    const closeHandle = () => {
      isListOpen.value = false;
    };

    const selectHandle = (option) => {
      emit("selectItem", option);
      closeHandle();
    };

    const cleanField = () => emit("cleanField");

    return {
      isListOpen,
      openHandle,
      closeHandle,
      selectHandle,
      cleanField,
    };
  },
};
</script>

<style scoped>
.Multi-Select {
  position: relative;
  width: 260px;
  min-width: 150px;
  border: 1px solid #feb108;
  border-radius: 10px;
  cursor: pointer;
  background: white;
}
.Multi-Select__Field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  min-height: 35px;
}
.Multi-Select__List {
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 2px;
}
.Multi-Select__Item {
}
.Multi-Select__Options {
  position: absolute;
  background: white;
  border: 1px solid blanchedalmond;
  z-index: 999;
  width: 100%;
}

.Multi-Select__clean {
  background: none;
  border: none;
  padding: 0;
  font-size: 15px;
}
.Multi-Select__clean:hover,
.Multi-Select__clean:focus {
  font-weight: bolder;
}
.Multi-Select__placeholder {
  color: #a6a6a6;
}
</style>
