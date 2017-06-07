<template>
  <div class="container">
    <h1>Bikes</h1>
    <ul>
      <li v-for="bike in bikes">
        <nuxt-link :to="{ name: 'bikes-id', params: { id: bike.id } }">{{ bike.name }} - {{ bike.location.city }} ({{bike.location.country}})</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params, error }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://api.citybik.es/v2/networks')
    .then((res) => {
      console.log(res);
      //return { bikes: res.data.networks.slice(0, 10) 
        return { bikes: res.data.networks }
    })
    .catch((e) => {
      console.log(e);

      error({ statusCode: e.statusCode, message: e.message })
    })

  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>