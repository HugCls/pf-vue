<script>
export default {
  name: "FooterSection",
};
</script>

<template>
    <footer class="footer">
        <div class="content has-text-centerd">
            <p>
                <ul class="social-icons">
      <li>
        <a href="https://github.com/HugCls" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/hugo-claisse-b9a22a222/"
          target="_blank"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/super_hugh" target="_blank"
          ><i class="fa-brands fa-twitter"></i
        ></a>
      </li>
    </ul>
            </p>
            <p>
                <strong>
                Made with ❤️ in 2022
        </strong>
            </p>
        </div>
    </footer>
</template>



<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);


.footer {
    padding: 2rem 0;

    @media screen and (max-width: 768px) {

      margin-left: 40px
      
    }
}
.social-icons {
  padding: 0;
  list-style: none;
  margin-left: 8px;


 
  

  li {
    display: inline-block;
    
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