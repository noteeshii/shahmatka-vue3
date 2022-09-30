<template>
  <div v-if="isLoading" class="loader">
    <base-loader />
  </div>
  <div class="container">
    <sort-form
      :houses-list="housesList"
      :plan-types="planTypes"
      :statuses-list="statusesList"
      @sort="fetchSorted"
    />
    <div v-if="!isLoading" class="Houses-List">
      <houses-list :houses="sortedHouses" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  fetchData,
  fetchSortedData,
  fetchHomes,
  fetchPlanTypes,
  fetchStatuses,
  loadData,
} from "../api";
import HousesList from "../components/HousesList.vue";
import BaseLoader from "../components/ui/BaseLoader.vue";
import SortForm from "../components/forms/SortForm.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: { SortForm, BaseLoader, HousesList },
  setup() {
    (async function () {
      await loadData().then(async () => {
        await fetchStatuses((res) => {
          statusesList.value = res;
        });
        await fetchHomes((res) => {
          housesList.value = res;
        });
        await fetchPlanTypes((res) => {
          planTypes.value = res;
        });
        await fetchData((res) => {
          sortedHouses.value = res;
        });
        isLoading.value = false;
      });
    })();

    const isLoading = ref(true);
    const sortedHouses = ref([]);
    const housesList = ref([]);
    const planTypes = ref([]);
    const statusesList = ref([]);

    async function fetchSorted(attributes) {
      isLoading.value = true;
      await fetchSortedData((res) => {
        sortedHouses.value = res;
        isLoading.value = false;
      }, attributes);
    }

    const sortHandle = async () => {
      isLoading.value = true;
      await fetchSorted();
      isLoading.value = false;
    };

    return {
      isLoading,
      housesList,
      sortedHouses,
      sortHandle,
      planTypes,
      statusesList,
      fetchSorted,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
  /*min-height: 100vh;*/
  margin: 10px auto;
  display: flex;
}
.Houses-List {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  column-gap: 50px;
  row-gap: 50px;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
