<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

let selected = ref("All");

const carsList = [
  {
    id: 1,
    category: "Drift",
    name: "Nissan 350Z AEM’s Drift",
    year: "2007",
    engine: "3.5L V6",
    power: "450 hp",
    image: "https://www.pasmag.com/images/9.02/Tanner_Foust_2006_Nissan_350Z_AEM/00_AEM_Tanner_Foust_2006_Nissan_350Z-pasmag.jpg",
  },
  {
    id: 2,
    category: "Race",
    name: "Toyota GR Supra",
    year: "2021",
    engine: "3.0L V6",
    power: "382 hp",
    image: "https://www.autopediame.com/storage/images/Toyota/Supra/Toyota-Supra_US-Version-2021-1024-11.jpg",
  },
  {
    id: 3,
    category: "Drift",
    name: "Toyota Corolla AE86",
    year: "1987",
    engine: "1.6L",
    power: "123 hp",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Toyota_Corolla_GT_AE86_Trueno_hatchback.jpg/660px-Toyota_Corolla_GT_AE86_Trueno_hatchback.jpg",
  },
  {
    id: 4,
    category: "Race",
    name: "Nissan 240 SX",
    year: "1998",
    engine: "2.4L",
    power: "155 hp",
    image: "https://i.pinimg.com/originals/19/4a/c3/194ac3082a4cc4c5cff71657a729d5e2.jpg",
  },
  {
    id: 5,
    category: "Race",
    name: "Toyota 2000 GT",
    year: "1967",
    engine: "2.0L",
    power: "148 hp",
    image: "https://www.topgear.com/sites/default/files/images/news-article/2020/10/acfb6480f25fdaa5f7ba13dc1e0c141d/1967-toyota-2000gt-_0.jpg",
  },
  {
    id: 6,
    category: "Drift",
    name: "Toyota Soarer JZZ30 ",
    year: "1991",
    engine: "2.5L",
    power: "276 hp",
    image: "https://i.ytimg.com/vi/jFmK99GuMHM/maxresdefault.jpg",
  },
  {
    id: 7,
    category: "Drift",
    name: "Mazda rx8 ",
    year: "2004",
    engine: "1.3L Rotary",
    power: "250 hp",
    image: "https://i.pinimg.com/originals/dd/22/68/dd226837ff87471a8941970a84005f69.jpg",
  },
  {
    id: 8,
    category: "Race",
    name: "Nissan Skyline GTR (R-34)",
    year: "2002",
    engine: "2.6L V6",
    power: "276 hp",
    image: "https://preview.redd.it/olii2pm48ag41.jpg?auto=webp&s=08e8fbd10ab0c2d967eca33edc250e68ae3a7054",
  },
];

const driftCars = carsList.filter((obj) => {
  return obj.category === "Drift";
});

const raceCars = carsList.filter((obj) => {
  return obj.category === "Race";
});

const filteredCars = computed(() => {
  if (selected.value === "All") {
    return carsList;
  } else if (selected.value === "Drift") {
    return driftCars;
  } else return raceCars;
});
</script>

<template>
  <div class="component-wrapper">
    <div class="title-container">
      <h2 class="title">Japanese Cars.</h2>
    </div>

    <ul class="filter-nav">
      <li :class="selected == 'All' ? 'selected' : ''" @click="selected = 'All'">All</li>
      <li :class="selected == 'Drift' ? 'selected' : ''" @click="selected = 'Drift'">Drift</li>
      <li :class="selected == 'Race' ? 'selected' : ''" @click="selected = 'Race'">Race</li>
    </ul>

    <div class="card-grid-container">
      <div class="card" v-for="car in filteredCars" :key="car.id">
        <div class="imgBox">
          <img :src="car.image" />
        </div>
        <div class="content">
          <div class="contentBox">
            <h3>
              {{ car.name }}<br /><span>Year: {{ car.year }}</span>
            </h3>
          </div>
          <div class="car-info">
            <span class="car-engine">Engine: {{ car.engine }}</span>
            <span class="car-hp">Power: {{ car.power }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .title-container {
    width: 100%;
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #000;
    }
  }

  .filter-nav {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    list-style-type: none;

    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: center;
      justify-content: space-around;
    }

    li {
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 5px;
      width: 100px;
      height: 40px;
      text-align: center;
      font-size: 1.1rem;
      border: 1px solid #ccc;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #ccc;
      }

      &.selected {
        background-color: #ccc;
        color: #000;
      }

      @media screen and (max-width: 768px) {
        padding: 0.2rem;
        width: 80px;
        height: 30px;
        font-size: 1rem;
      }
    }
  }

  .card-grid-container {
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2rem;
    margin-bottom: 18rem;

    .card {
      position: relative;
      width: 300px;
      height: 400px;
      margin: 0 auto;
      margin-bottom: 2rem;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    .card .imgBox {
      width: 100%;
      height: 100%;
    }
    .card .imgBox img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      object-fit: cover;
      transition: 0.3s ease-in-out;
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
    }
    .card:hover .imgBox img {
      transform: translateY(-20px);
      filter: none;
      -webkit-filter: grayscale(0);
    }
    .card .content {
      position: absolute;
      bottom: -160px;
      width: 100%;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      flex-direction: column;
      backdrop-filter: blur(15px);
      box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      transition: bottom 0.4s ease-in-out;
    }

    .card:hover .content {
      bottom: 0px;
    }
    .card .content .contentBox h3 {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      line-height: 1.1em;
      transition: 0.5s;
      margin: 20px 0 15px;
      opacity: 0;
      transform: translateY(-20px);
    }
    .card:hover .content .contentBox h3 {
      opacity: 1;
      transform: translateY(0);
    }
    .card .content .contentBox h3 > span {
      font-size: 12px;
      font-weight: 300;
      text-transform: initial;
      margin-top: 15px;
    }

    .card .content .car-info {
      position: relative;
      bottom: 10px;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
