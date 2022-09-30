let houses;
let filteredData;
let prevDefault;
let sortedData;

export async function loadData() {
  const data = await import("../api/data.json");
  prevDefault = data;
}

export async function fetchData(cb) {
  cb(await formatResponse(prevDefault));
}

export async function fetchSortedData(cb, attributes) {
  cb(await sortResponse(prevDefault, attributes));
}

export async function fetchHomes(cb) {
  await formatHouses(prevDefault.houses);
  cb(houses);
}

export async function fetchPlanTypes(cb) {
  cb(await formatPlanTypes(prevDefault.flats));
}

export async function fetchStatuses(cb) {
  cb(await formatStatuses(prevDefault.flats));
}

function formatStatuses(data) {
  const allStatuses = Object.values(data).map((flat) => {
    return flat.status;
  });
  return Array.from(new Set(allStatuses));
}

function formatPlanTypes(data) {
  const allTypes = Object.values(data).map((flat) => {
    return flat.type;
  });
  return Array.from(new Set(allTypes));
}

function formatHouses(data) {
  houses = data.map((house, idx) => ({
    id: house,
    title: `ГП-${idx + 1}`,
    selected: false,
  }));
}

function formatResponse(data) {
  filteredData = houses.map((house) => {
    house.entrances = data.entrances.filter((entrance) => {
      return entrance.house_id === house.id;
    });
    house.entrances = house.entrances.map((entrance) => {
      entrance.floors.map((floor) => {
        floor.flats = floor.flats.map((flat) => {
          return data.flats[flat.id];
        });
        return floor;
      });
      return entrance;
    });
    return house;
  });
  return filteredData;
}

async function sortResponse(data, attributes) {
  const {
    from,
    to,
    square,
    selectedPlan,
    selectedHouses,
    selectedStatus,
    subsidy,
    marginal,
    renovation,
    installment,
  } = attributes;

  sortedData = await filteredData
    .filter((house) => {
      if (!selectedHouses || selectedHouses.length === 0) return true;
      let res = false;
      selectedHouses.forEach((selected) => {
        if (house.id === selected.id) res = true;
      });
      return res;
    })
    .map((house) => {
      house.entrances = house.entrances.map((entrance) => {
        entrance.floors = entrance.floors.map((floor) => {
          floor.flats = floor.flats.map((flat) => {
            if (
              equal(flat.status, selectedStatus) &&
              checkCostRange(flat.cost, from, to) &&
              equal(flat.square, square) &&
              equal(flat.type, selectedPlan) &&
              equal(flat.subsidy, subsidy) &&
              equal(flat.marginal, marginal) &&
              equal(flat.renovation, renovation) &&
              equal(flat.installment, installment)
            ) {
              flat.bgColor = "#feb108";
              return flat;
            }
            flat.bgColor = null;
            return flat;
          });
          return floor;
        });
        return entrance;
      });
      return house;
    });
  return sortedData;
}

function checkCostRange(cost, from = 0, to) {
  if (!to || to === 0) return true;
  return cost >= from && cost <= to;
}

function equal(a, b) {
  if (!b || b === 0 || b === undefined) return true;
  return a === b;
}
