<template>
  <div class="social-container">
    <ul class="social-icons">
      <li>
        <a href="https://github.com/Iulian-U" target="_blank"><i class="fa-brands fa-github"></i></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/iulian-ursu-24878921b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </li>
      <li>
        <a href="https://www.instagram.com/__juliann_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="https://codepen.io/IulianUrsu" target="_blank"><i class="fa-brands fa-codepen"></i></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);

.social-icons {
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: 0.5em;

    font-size: 1.2em;
  }

  i {
    color: black;

    top: 10px;
    left: 10px;
    transition: transform 100ms ease-in-out;

    &:hover {
      transform: scale(2);
    }
  }

  a {
    display: inline-block;
    margin: 0 1rem;
  }
}
</style>
