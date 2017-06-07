<template>
  <div class="container">
    <h1>BICI :{{ bike.name }}</h1>
    <pre>{{ bike.id }}</pre>
    <div>{{ bike.location.city }}</div>
    <div>{{ bike.location.country }}</div>
    <img :src="gmapurl">
    <p><nuxt-link to="/bikes">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    console.log("aaa");
    console.log(params);
    if (params.id) {
    let { data } = await axios.get('https://api.citybik.es/v2/networks/'+params.id)
    console.log(data);
    var sgmapurl= "https://maps.googleapis.com/maps/api/staticmap?center="+data.network.location.latitude+","+data.network.location.longitude+"&zoom=16&size=400x400&";
    console.log(sgmapurl);
    return { bike: data.network, gmapurl:sgmapurl }

    }
    return { bike: {name:'bikename', id:'bikeid'}}
  },
  head () {
    console.log(this.bike.name);
    return {
      title: this.bike.name
    }
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