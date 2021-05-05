<template>
  <div>
    <Header></Header>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import Header from "/src/components/Header/Header";
import HomeContent from "/src/components/HomeContent";

export default {
  components: {
    Header,
    HomeContent
  },
  name: "Home",
};
</script>

<style>
.read-more,
.read-more .material-icons {
  font-weight: 700;
  align-self: flex-end;
  text-decoration: none;
  font-size: 18px;
  color: #291507;
}
</style>

