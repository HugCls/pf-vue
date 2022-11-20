<script setup></script>

<template>
  <div class="container">
    <div class="title-container">
      <h2 class="title">My Rap Playlist.</h2>
    </div>
    <iframe
      class="spotify-player"
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/playlist/3ZBaXtA5hipyUH4afij4e7?si=jVDoyBG7ST-xxezhnwh5jQ&nd=1"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .spotify-player {
    border-radius: 12px;
    width: 70vw;
    height: 70vh;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .title-container {
    width: 100%;
    height: auto;
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
}
</style>
