<script setup>
const projects = [
  {
    title: "Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Vue", "Vuex", "Vue-router", "Vue-cli"],
    img: "https://via.placeholder.com/300x200",
  },
  {
    title: "Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Vue", "Vuex", "Vue-router", "Vue-cli"],
  },
  {
    title: "Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Vue", "Vuex", "Vue-router", "Vue-cli"],
  },
  {
    title: "Placeholder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Vue", "Vuex", "Vue-router", "Vue-cli"],
  },
];
</script>

<template>
  <div class="container">
    <div class="title-container">
      <h2 class="title">Projects.</h2>
    </div>
    <div class="cards-wrapper">
      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://hugo-resume-next-ts.vercel.app/"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__left"
            src="https://hugo-resume-next-ts.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fmmw.png&w=384&q=100"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">Michael 'Mudcat' <br> Ward's website.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>Next.js</p>
            <p>Node.js</p>
            <p>Wordpress CMS</p>
            <p>TailwindCSS</p>
            <p>Chakra UI</p>
            <p>Cpanel</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            A website for an American bluesman : 'Mudcat Ward'. So far my most
            challenging project. I had to implement a headless CMS to allow the
            client to update the website himself. I also had to implement a
            mailer, I did a custom hook to fetch data and many other things
            beside the front-end.
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/HugCls/MWprojet" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://hugo-resume-next-ts.vercel.app/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo</a
              >
            </li>
          </ul>
        </div>
      </article>
      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://hugo-pf-vue.vercel.app/"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__right"
            src="/vue_pf.png"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">Personal Portfolio Website.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>Vue 3</p>
            <p>Vue-Router</p>
            <p>Vite</p>
            <p>SASS</p>
            <p>GreenSock</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            This very much portfolio website made with Vue.js and SASS.
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/HugCls/Hugo_Resume" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://hugo-resume-next-ts.vercel.app/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo</a
              >
            </li>
          </ul>
        </div>
      </article>
      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://hugo-resume-next-ts.vercel.app/"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__left"
            src="/hug_pf_next.png"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">Personal Portfolio Website.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>Next.JS</p>
            <p>TypeScript</p>
            <p>TailwindCSS</p>
            <p>Chakra UI</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            A personal portfolio website made with Next.JS, Typescript,
            TailwindCSS and Chakra UI.
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/HugCls/Hugo_Resume" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://hugo-resume-next-ts.vercel.app/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo</a
              >
            </li>
          </ul>
        </div>
      </article>
      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://hugcls.github.io/pf-sass/"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__right"
            src="https://hugo-resume-next-ts.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fpf.png&w=384&q=100"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">Portfolio Website.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>React</p>
            <p>JavaScript</p>
            <p>SASS</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            This is a portfolio website. It was originally for a client but the
            projects in it are secrets for now. So I decided to change it and
            left it as a template.
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/HugCls/pf-sass" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://hugcls.github.io/pf-sass/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo</a
              >
            </li>
          </ul>
        </div>
      </article>

      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://github.com/FabCom/LaVoyette"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__left"
            src="https://hugo-resume-next-ts.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Flavoyette.png&w=384&q=100"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">La Voyette.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>Next.js</p>
            <p>Typescript</p>
            <p>Prisma</p>
            <p>Material UI</p>
            <p>CMS</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            Originally a volunteer team project for a theatre company. In the
            first version, we implemented a homemade CMS with Prisma and
            Next.js. I took mostly care of the front-end part. The second
            version is a complete remake of the website with a new design and
            WordPress headless CMS. Unfortunatelly, due to lack of time, this
            project is still suspended. None of those version are maintained
            anymore, still you can check the code, and take a look at the live
            demo.
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/FabCom/LaVoyette" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository V1</a
              >
            </li>
            <li class="tag__item play">
              <a
                href="https://github.com/FabCom/LaVoyette-Front"
                target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository V2</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://la-voyette.vercel.app/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo V1</a
              >
            </li>
            <li class="tag__item play">
              <a href="https://lavoyette.fr/" target="_blank"
                ><i class="fa-solid fa-eye mr-2"></i>Live Demo V2</a
              >
            </li>
          </ul>
        </div>
      </article>

      <article class="postcard light">
        <a
          class="postcard__img_link"
          href="https://github.com/HugCls"
          target="_blank"
        >
          <img
            class="postcard__img postcard__img__right"
            src="https://hugo-resume-next-ts.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fthp.png&w=384&q=100"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text t-dark">
          <h1 class="postcard__title">
            <a href="#">Other projects.</a>
          </h1>
          <div class="postcard__subtitle small">
            <p>Next.JS</p>
            <p>TypeScript</p>
            <p>TailwindCSS</p>
            <p>Chakra UI</p>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            Feel free to check my github for more projects, these are mainly
            school projects
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play">
              <a href="https://github.com/HugCls" target="_blank"
                ><i class="fa-brands fa-github mr-2"></i>Repository</a
              >
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1rem;

  .title-container {
    width: 100%;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #000;
    }
  }
  .cards-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  /* Cards */
  .postcard {
    flex-wrap: wrap;
    display: flex;
    background-color: #cbd5e134;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 10px;
    margin: 0 0 2rem 0;
    overflow: hidden;
    position: relative;
    color: #ffffff;

    .t-dark {
      color: #18151f;
    }

    a {
      color: inherit;
    }

    h1,
    .h1 {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .small {
      font-size: 80%;
    }

    .postcard__title {
      font-size: 1.75rem;
    }

    .postcard__subtitle {
      display: flex;

      p {
        margin-right: 0.5rem;
      }
    }

    .postcard__img {
      max-height: 180px;
      width: 100%;
      object-fit: cover;
      position: relative;
    }

    .postcard__img_link {
      display: contents;
    }

    .postcard__bar {
      width: 50px;
      height: 10px;
      margin: 10px 0;
      border-radius: 5px;
      background-color: #f97316;
      transition: width 0.2s ease;
    }

    .postcard__text {
      padding: 1.5rem;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .postcard__preview-txt {
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: justify;
      height: 100%;
    }

    .postcard__tagbox {
      display: flex;
      flex-flow: row wrap;
      font-size: 14px;
      margin: 20px 0 0 0;
      padding: 0;
      justify-content: center;

      i {
        margin-right: 5px;
      }

      .tag__item {
        display: inline-block;
        background: #f9741600;
        border: 1px solid black;
        color: black;
        border-radius: 3px;
        padding: 0.5rem;
        margin: 0 5px 5px 0;
        cursor: default;
        user-select: none;
        transition: background-color 0.3s;

        &:hover {
          background: black;
          color: white;
          cursor: pointer;
        }
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      opacity: 1;
      border-radius: 10px;
    }

    &:hover .postcard__bar {
      width: 100px;
    }
  }

  @media screen and (min-width: 769px) {
    .postcard {
      flex-wrap: inherit;

      .postcard__title {
        font-size: 2rem;
      }

      .postcard__tagbox {
        justify-content: start;
      }

      .postcard__img {
        max-width: 300px;
        max-height: 100%;
        transition: transform 0.3s ease;
      }

      .postcard__img__right {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 14% 100%);
      }

      .postcard__img__left {
        clip-path: polygon(0 0, 100% 0, 86% 100%, 0 100%);
      }

      .postcard__text {
        padding: 3rem;
        width: 100%;
      }

      .media.postcard__text:before {
        content: "";
        position: absolute;
        display: block;
        background: #18151f;
        top: -20%;
        height: 130%;
        width: 55px;
      }

      &:hover .postcard__img {
        transform: scale(1.1);
      }

      &:nth-child(2n + 1) {
        flex-direction: row;
      }

      &:nth-child(2n + 0) {
        flex-direction: row-reverse;
      }

      &:nth-child(2n + 1) .postcard__text::before {
        left: -12px !important;
        transform: rotate(4deg);
      }

      &:nth-child(2n + 0) .postcard__text::before {
        right: -12px !important;
        transform: rotate(-4deg);
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .postcard__text {
      padding: 2rem 3.5rem;
    }

    .postcard__text:before {
      content: "";
      position: absolute;
      display: block;

      top: -20%;
      height: 130%;
      width: 55px;
    }
  }
}
</style>
