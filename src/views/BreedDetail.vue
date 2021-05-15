<template>
  <div class="container">
      <span>
          <img :src="breed.image_url" :alt="'Image of ' + breed.name">
      </span>
      <div class="info">
          <h1>{{breed.name}}</h1>
          <p>{{breed.description}}</p>
          <hr>
          <div class="attributes">
                <span><span class="bold">Temperament: </span>{{breed.temperament}}</span>
                <span><span class="bold">Origin: </span>{{breed.origin}}</span>
                <span><span class="bold">Lifespan: </span>{{breed.life_span}} years</span>
                <BreedAttributeLabel name="Adaptability" :level="breed.adaptability"></BreedAttributeLabel>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

import BreedAttributeLabel from '/src/components/BreedAttributeLabel';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASEURL
})

export default {
    props: {
        breed_name: String
    },
    data() {
        return {
            breed: []
        }
    },
    components: {
        BreedAttributeLabel
    },
    beforeCreate() {
        api
            .get('/breed/' + this.breed_name)
            .then((response) => {
                this.breed = response.data
            });
    }
}
</script>

<style scoped>
    .container {
        margin: 2% 7.5% 0 7.5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    
    .container span img {
        width: 372px;
        height: 372px;
        border-radius: 24px;
    }

    .info {
        width: 100%;
        margin-right: 3%;
        margin-left: 3%;
    }

    .attributes {
        display: flex;
        flex-direction: column;
    }

    .bold {
        font-weight: bold;
    }

    @media (min-width: 1200px) {
        .container {
            flex-direction: row;
        }        
    }

</style>