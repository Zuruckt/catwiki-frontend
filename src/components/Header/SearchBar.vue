<template>
  <div class="search">
    <span class="material-icons">search</span>
    <input type="text" placeholder="Digite sua raça aqui" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
    width: 100%;
    margin-bottom: 10px;
}

input {
    padding: 0 35px 0;
    width: 100%;
    height: 35px;
    border-radius: 60px;
    border: none;
}

input:focus {
    outline: none;
    box-shadow: 0px 0px 2px #0066ff;
}

span {
    position: absolute;
    right: auto;
    padding: 7px;
    color: #000;
}
</style>