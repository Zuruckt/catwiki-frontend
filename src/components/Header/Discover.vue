<template>
  <div class="discover">
    <div class="container">
      <div>
        <h3>Raças mais procuradas</h3>
        <span class="bar"></span>
      </div>
      <div class="space-around">
        <h2 class="title-lg">66+ raças para você explorar</h2>
        <a class="read-more" href="#">
          VEJA MAIS <span class="material-icons">arrow_right_alt</span>
        </a>
      </div>

      <div class="gallery">
        <div v-for="breed in breeds" :key="breed" class="image-card">
          <img :src="breed.photo" :alt="'Photo of ' + breed.name" />
          <h5>{{breed.name}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const api = axios.create({
  baseURL: process.env.API_BASEURL,
  headers: {
    'Accept': 'application/json'
  }
});

export default {
  data() {
    return {
      breeds: []
    }
  },
  created() {
    api
      .get('breeds/top')
      .then((response) => {
        response.data.slice(0, 4).forEach((element) => {
          let cat = {
            name: element.breed_name,
            photo: element.breed_photo_url,
          };

          this.breeds.push(cat);
        })
      });
  }
};
</script>

<style>
.discover {
  padding: 25px;
  margin-top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: auto;
  background-color: #e3e1dc;
  color: #291507 !important;
}

h3 {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 60px;
  margin: 0 auto;
}
.bar {
  position: absolute;
  width: 59.18px;
  height: 3.21px;
  background: #4d270c;
  border-radius: 77px;
}

.discover > .container {
  margin-left: 5%;
  margin-right: 5%;
}
.title-lg {
  max-width: 45%;
  font-weight: 700;
  font-size: 48px;
  margin: 0;
}
.space-around {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.image-card img {
  width: 220px;
  height: 220px;
  border-radius: 24px;
}

.gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

h5 {
  margin-top: 5px;
  font-weight: 600;
  font-size: 18px;
}

</style>
