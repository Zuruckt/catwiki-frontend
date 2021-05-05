<template>
  <div>
    <div class="header">
      <div class="content">
        <Logo width="128" height="43" color="#fff"></Logo>
        <div>
          <h1>Saiba mais sobre a raça do seu gato</h1>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
    <Discover></Discover>
  </div>
</template>

<script>
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import Discover from "./Discover";

export default {
  components: {
    Logo,
    SearchBar,
    Discover,
  },
};
</script>

<style scoped>
.header {
  height: 300px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  margin-bottom: 0;
  background-color: #050709;
  background-image: url("../../assets/img/HeroImagesm.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  max-width: 25%;
  padding: 5em;
}

h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29.26px;
}

@media (min-width: 480px) and (max-width: 1999px) {
  .header {
    height: 350px;
    background-size: cover;
    background-image: url("../../assets/img/HeroImagemd.png");
  }
}

@media (min-width: 1200px) {
  .header {
    height: 404px;
    background-image: url("../../assets/img/HeroImagelg.png");
    background-position: right;
    background-size: contain;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
}
</style>