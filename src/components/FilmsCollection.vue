<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

let selected = ref("All");

const filmList = [
  {
    id: 1,
    category: "Oldies",
    name: "Goodfellas",
    year: "1990",
    director: "Martin Scorsese",
    duration: "146 min",
    image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 2,
    category: "Oldies",
    name: "Die Hard",
    year: "1988",
    director: "John McTiernan",
    duration: "132 min",
    image: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/08/mv5bzjrlnduxzjatogq4oc00otnlltgxnmqtytbmmdgwzmnmnjkxxkeyxkfqcgdeqxvynzkwmjq5nzm@._v1_.jpg",
  },
  {
    id: 3,
    category: "Oldies",
    name: "Shining",
    year: "1980",
    director: "Stanley Kubrick",
    duration: "119 min",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8tiCL4BpaCIZR5hHY3QVal3OUKOOR6X49g&usqp=CAU",
  },
  {
    id: 4,
    category: "Recent",
    name: "The Florida Project",
    year: "2017",
    director: "Sean Baker",
    duration: "115 min",
    image: "https://m.media-amazon.com/images/M/MV5BMjg4ZmY1MmItMjFjOS00ZTg2LWJjNDYtNDM2YmM2NzhiNmZhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
  },
  {
    id: 5,
    category: "Recent",
    name: "Parasite",
    year: "2019",
    director: "Bong Joon-ho",
    duration: "132 min",
    image: "https://img-4.linternaute.com/uVxdFzpRJ56EW2hYBCls8_5O9zE=/405x540/0156050d180a42b2a0cea23c262949e2/ccmcms-linternaute/175577.jpg",
  },
  {
    id: 6,
    category: "Recent",
    name: "Arrival ",
    year: "2016",
    director: "Denis Villeneuve",
    duration: "116 min",
    image: "http://www.emaginarock.fr/wp-content/uploads/2016/11/arrival_ver9.jpg",
  },
  {
    id: 7,
    category: "Recent",
    name: "Moonrise Kingdom ",
    year: "2004",
    director: "Wes Anderson",
    duration: "93 min",
    image: "https://kbimages1-a.akamaihd.net/bd458f36-72d6-4e47-89df-7b56021e3210/353/569/90/False/moonrise-kingdom.jpg",
  },
  {
    id: 8,
    category: "Oldies",
    name: "Back to the Future",
    year: "1985",
    director: "Robert Zemeckis",
    duration: "116 min",
    image: "https://www.levinyleclub.com/wp-content/uploads/2021/02/71TnSyLJRzL._SL1017_.jpg",
  },
];

const oldiesFilms = filmList.filter((obj) => {
  return obj.category === "Oldies";
});

const recentsFilms = filmList.filter((obj) => {
  return obj.category === "Recent";
});

const filteredFilms = computed(() => {
  if (selected.value === "All") {
    return filmList;
  } else if (selected.value === "Oldies") {
    return oldiesFilms;
  } else return recentsFilms;
});
</script>

<template>
  <div class="component-wrapper">
    <div class="title-container">
      <h2 class="title">Recommendations.</h2>
    </div>

    <ul class="filter-nav">
      <li :class="selected == 'All' ? 'selected' : ''" @click="selected = 'All'">All</li>
      <li :class="selected == 'Oldies' ? 'selected' : ''" @click="selected = 'Oldies'">Oldies</li>
      <li :class="selected == 'Recent' ? 'selected' : ''" @click="selected = 'Recent'">Recent</li>
    </ul>

    <div class="card-grid-container">
      <div class="card" v-for="car in filteredFilms" :key="car.id">
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
            <span class="car-director">Director: {{ car.director }}</span>
            <span class="car-hp">Duration: {{ car.duration }}</span>
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
