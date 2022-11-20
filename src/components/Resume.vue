<script setup>
import CustomButton from "../components/CustomButton.vue";

const coreTechnologies = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Next" },
  { name: "Vue.js" },
  { name: "Nuxt" },
  { name: "Ruby" },
  { name: "Ruby on Rails" },
  { name: "SASS" },
  { name: "Tailwind" },
  { name: "Google Search" },
];

const languages = [{ name: "English" }, { name: "French" }];

const role = "Frontend Developer";
const aboutMe = [
  {
    headline1: `After my intensive studies at "The Hacking Project" school where I learnt both back and front. At the end I found myself more comfortable with the Frontend development, which I decided to specialize in.`,
    headline2:
      "Tech stack: HTML, CSS, Javascript, Next.JS, Vue.js, Sass, Tailwind, Ruby, Ruby on Rails, Git, Github",
    headline3:
      "I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques is important to me and the success of any organization.",
  },
];
const experienceDescription =
  "Below can be found my work experience and the skills that I gained along the way";
</script>

<template>
  <div class="wrapper" ref="document">
    <!-- Linkedin icon and download btn container -->
    <div class="navbar">
      <!-- Linkedin icon -->
      <a
        href="https://www.linkedin.com/in/hugo-claisse-b9a22a222/"
        target="_blank"
        class="linkedin-link"
        ><i class="fa-brands fa-linkedin fa-xl"></i
      ></a>

      <!-- Download btn -->
      <a href="../../public/files/CV_Hugo_Claisse.pdf" target="_blank"
        ><CustomButton text="Download"
      /></a>
    </div>
    <!-- Resume container -->
    <div class="resume-container">
      <!-- Side container -->
      <aside class="side-container">
        <div class="side-info-container">
          <router-link class="portfolio-link-container" to="/">
            <p class="portfolio-link">hugo-pf-vue.vercel.app</p>
            <span class="portfolio-link-underline"></span>
          </router-link>

          <p class="location">Lausanne, Switzerland</p>
          <p class="phone-number">+33 7 67 13 79 31</p>

          <router-link class="mail-link-container" to="/contact">
            <p class="mail-link">hugo.claisse@live.fr</p>
            <span class="mail-link-underline"></span>
          </router-link>
        </div>

        <div class="core-tech-container">
          <h2 class="core-tech-title">Core Technologies:</h2>
          <ul
            class="core-skills-list"
            v-for="technologies in coreTechnologies"
            :key="technologies.name"
          >
            <li>{{ technologies.name }}</li>
          </ul>
        </div>

        <div class="languages-container">
          <h2 class="langauges-title">Languages I Speak</h2>
          <ul
            class="langauges-list"
            v-for="language in languages"
            :key="language.name"
          >
            <li>{{ language.name }}</li>
          </ul>
        </div>
      </aside>
      <div class="main-container">
        <div class="name-container">
          <h2 class="first-name">Hugo</h2>
          <h2 class="last-name">Claisse</h2>
        </div>
        <div class="role-title-container">
          <p>{{ role }}</p>
        </div>

        <div class="description-container">
          <div class="about-me-container" v-for="about in aboutMe" :key="about">
            <p class="headline">{{ about.headline1 }}</p>
            <p class="headline">{{ about.headline2 }}</p>
            <p class="headline">{{ about.headline3 }}</p>
          </div>
        </div>

        <div class="divider"></div>
        <div class="work-experience-container">
          <div class="experience-title-container">
            <h2 class="experience-title">Experience</h2>
            <span class="experience-title-underline"></span>
            <p class="experience-title-description">
              {{ experienceDescription }}
            </p>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Freelance.</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Front-end Developer.</h2>
              </div>
              <p class="work-experience-date">since may 2022.</p>
            </div>
            <div class="work-experience-description">
              I am currently working as a freelance web developer. I am looking
              for new projects.
              <ul class="work-experience-tasks-list">
                <li>
                  Built the frontend of the app using Next.js and implemented
                  the backend using prisma, next-auth and the headless CMS of
                  WordPress.
                </li>
                <li>
                  Implemented an auth system so the admins can log in and manage
                  their contents, otherwise using the WordPress' CMS
                </li>
                <li>API calls.</li>
                <li>UX friendly design, responsive and mobile first.</li>
              </ul>
            </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">La Voyette.</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Front-end Developer.</h2>
              </div>
              <p class="work-experience-date">2022.</p>
            </div>
            <div class="work-experience-description">
              Volunteer team project to create a website for a theatre company.
              We worked asynchronously and used the agile method. Using Git and
              Github to manage the project. We also setted up a Trello board to
              manage the tasks. I was in charge of the frontend of the website.
            </div>
          </div>

          <div class="work-experience-block">
            <div class="work-experience-header-container">
              <div class="work-experience-title-container">
                <h2 class="work-company-title">Pas à pas.</h2>
                <span class="work-experience-divider"></span>
                <h2 class="work-experience-subtitle">Head of communication.</h2>
              </div>
              <p class="work-experience-date">2017 - 2022.</p>
            </div>
            <div class="work-experience-description">
              Management and training of the fundraising teams for an NGO.
            </div>
          </div>
          </div>

        
        <div class="projects-link-container">
          <div class="projects-link-title-container">
            <h2>Projects</h2>
            <span class="projects-link-title-underline"></span>
          </div>
          <div class="projects-link-description-container">
            <p class="projects-link-description">
              Links to some of my work can be found on:
            </p>

            <router-link class="projects-link-container" to="/projects">
              <p class="projects-link">hugo-pf-vue.vercel.app/resume</p>
              <span class="projects-link-underline"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

/* Colors */
$orange: #f97316;
$black: #000;
$white: #fff;
$light-grey: #808288;
$dark-grey: #474747;
$slate: #cbd5e134;
$light-blue: #0077b5;

/* Download btn transition */
@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

/* Underline mixin */
@mixin underline($color: $orange) {
  height: 28px;
  position: absolute;
  border-bottom: 7px solid $color;
  margin-top: -4px;
  opacity: 0.4;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    margin-top: 4px;
    cursor: pointer;
  }
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $slate;
  overflow: auto;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 4rem;

    /*icon styling */
    i {
      font-size: 2rem;
      transition: all 0.3s ease;
      color: $black;

      &:hover {
        color: $orange;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 2rem;
      padding-right: 1rem;
      padding-top: 2rem;
    }
  }

  .resume-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 3rem;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
    .side-container {
      padding: 2rem;
      height: 100vh;
      width: 390px;
      position: relative;

      @media screen and (max-width: 768px) {
        display: none;
      }

      .side-info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .location,
        .phone-number {
          font-size: 1.1rem;
          color: $black;
          margin-bottom: 0.3rem;
          margin-top: 0.3rem;
          font-style: italic;
        }

        .portfolio-link-container,
        .mail-link-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;

          .portfolio-link,
          .mail-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .portfolio-link-underline {
            width: 150px;
            @include underline;
          }

          .mail-link-underline {
            width: 210px;
            @include underline;
          }
        }
      }
    }

    .core-tech-container,
    .other-tech-container,
    .languages-container {
      margin-top: 2rem;
      height: auto;
    }
  }

  .main-container {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    .name-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      margin-top: 1rem;
      color: $black;

      .last-name {
        margin-left: 1rem;
      }

      h2 {
        font-size: 5rem;
        font-weight: bold;
        color: $black;

        @media screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }
    }

    .role-title-container {
      margin-top: -2rem;
      width: 100%;

      p {
        font-size: 2rem;
        font-weight: 500;
        color: $dark-grey;
      }
    }

    .description-container {
      margin-top: 1rem;
      width: 100%;

      .about-me-container {
        .headline {
          font-size: 1.2rem;
          font-weight: 400;
          color: $light-grey;
          margin-bottom: 1rem;
        }
      }
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: $light-grey;
      margin-top: 2rem;
      margin-bottom: 2rem;
      opacity: 0.4;
    }

    .work-experience-container {
      width: 100%;
      padding-bottom: 1rem;

      .experience-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .experience-title-underline {
          width: 173px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }

        .experience-title-description {
          font-size: 1.2rem;
          color: $light-grey;
        }
      }

      .work-experience-block {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;

        .work-experience-header-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          margin-top: 1rem;
          color: $black;

          @media screen and (max-width: 768px) {
            flex-direction: column;
          }

          .work-experience-title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            margin-top: 1rem;
            color: $black;
            text-align: center;

            @media screen and (max-width: 768px) {
              flex-direction: column;
            }

            .work-experience-divider {
              width: 20px;
              height: 4px;
              background-color: $light-grey;
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
              border-radius: 5px;
              opacity: 0.4;
            }

            .work-experience-subtitle {
              color: $dark-grey;
              font-weight: 400;
            }
          }

          .work-experience-date {
            color: $dark-grey;
            font-weight: 400;

            @media screen and (max-width: 768px) {
              margin-bottom: 1rem;
            }
          }
        }

        .work-experience-description {
          font-size: 1.2rem;
          color: $light-grey;
          margin-top: -1rem;

          .work-experience-tasks-list {
            margin-top: 1rem;
            font-size: 1.1rem;
          }
        }
      }
    }

    .projects-link-container {
      padding-bottom: 2rem;

      .projects-link-title-container {
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          font-size: 2rem;
          font-weight: bold;
          color: $black;
        }

        .projects-link-title-underline {
          width: 129px;
          height: 28px;
          position: absolute;
          border-bottom: 10px solid $orange;
          margin-top: 10px;
          opacity: 0.4;
          z-index: 2;
        }
      }

      .projects-link-description-container {
        font-size: 1.2rem;
        color: $light-grey;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        .projects-link-container {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 0.5rem;

          @media screen and (max-width: 768px) {
            margin-left: 0;
          }

          .projects-link {
            color: $black;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none;
          }

          .projects-link-underline {
            width: 230px;
            @include underline;
          }
        }
      }
    }
  }

  ul {
    list-style-type: square;
  }
}
</style>
