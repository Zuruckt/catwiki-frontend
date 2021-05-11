<template>
  <div class="search autocomplete">
    <span class="material-icons">search</span>
    <input type="text" v-model="breed_name" placeholder="Digite sua raça aqui"/>
    <ul v-show="breeds.length > 0" class="autocomplete-results">
      <li v-for="breed in breeds" :key="breed" class="autocomplete-result">
        {{breed}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  headers: {
    'Accept': 'application/json'
  }
});

export default {
  data() {
    return {
      breed_name: '',
      awaitingSearch: false,
      breeds: []
    };
  },
  watch: {
    breed_name: function() {
      if(this.breed_name == '') {
        this.breeds.splice(0, this.breeds.length)
        return;
      }
      if (!this.awaitingSearch) {
        setTimeout(() => {
          this.fetchResults(this.breed_name);
          this.awaitingSearch = false;
        }, 1000); // 1 sec delay
      }
      this.awaitingSearch = true;
    },
  },
  methods: {
    fetchResults(query) {
      api
        .get('breeds/' + query)
        .then((response) => {
          console.log(response);
          response.data.forEach(element => {
            console.log(element)
            if(this.breeds.indexOf(element) === -1) this.breeds.push(element);
          });
        });
    }
  },
  mounted() {
    console.log(this.breeds.length)
  }
};
</script>

<style scoped>
div {
  width: 100%;
  margin-bottom: 10px;
}

input {
  padding: 0 35px 0;
  max-width: 100%;
  width: 75%;
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


  .autocomplete-results {
    z-index: 2;
    padding: 0;
    margin: 5px 12px;
    border-radius: 12px;
    border: 1px solid #eeeeee;
    background-color: #fff;
    height: 120px;
    width: 85%;
    min-height: 1em;
    max-height: 6em;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
    color: #000;
  }

  .autocomplete-result:hover {
    background-color: #313534;
    color: #fff
  }
</style>
