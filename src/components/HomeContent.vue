<template>
  <div class="about">
    <div class="container">
      <div class="text">
        <span class="bar"></span>
        <h2 class="title-lg">Por que você deveria ter um gato?</h2>
        <p>
          Ter um gato por perto pode na verdade pode ativar a liberação de
          compostos químicos calmantes no seu corpo, o que abaixa seus niveís de
          estresse e ansiedade.
        </p>
        <a class="read-more" href="#"
          >LEIA MAIS<span class="material-icons"> arrow_right_alt </span></a
        >
      </div>
      <div class="images">
        <div>
          <img class="image-1" src="@/assets/img/image_2.png" alt="" />
          <img class="image-2" src="@/assets/img/image_1.png" alt="" />
        </div>
        <img class="image-3" src="@/assets/img/image_3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  margin-top: 60px;
}

.about > .container {
  display: flex;
  flex-direction: column;
  margin: auto 5%;
}

.text {
  align-self: center;
}

h2 {
  max-width: 100%;
}

p {
  max-width: 100%;
  font-weight: 500;
  font-size: 18px;
}

.images {
  display: flex;
}

.images div {
  display: flex;
  flex-direction: column;
}

img {
  padding: 15px;
}

.image-1 {
  width: 290px;
  height: 168px;
}

.image-2 {
  align-self: flex-end;
  width: 196px;
  height: 294px;
}

.image-3 {
  width: 239px;
  height: 385px;
}
@media (min-width: 1200px) {
  .gallery {
    flex-wrap: nowrap;
  }

  .about > .container {
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>