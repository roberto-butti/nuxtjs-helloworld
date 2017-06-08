<template>
  <div id="mycomponent" class="container">
  <mymenu></mymenu>
    <h1>Bikes</h1>
    <p><nuxt-link to="/">Back to home page</nuxt-link>
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
import mymenu from '~/components/mymenu.vue'
export default {
  layout: 'app',
  components: {
    mymenu
  },
 
  asyncData ({ params, error }) {
    console.log(params);
    var country_find = "IT";
    if (params.country) {
      country_find = params.country;
    }

    return axios.get('https://api.citybik.es/v2/networks')
    .then((res) => {
      //console.log(res);
      //return { bikes: res.data.networks.slice(0, 10) 
        var a = {};
        var country="";
        for (var i = res.data.networks.length - 1; i >= 0; i--) {
          var n = res.data.networks[i];

          country = n.location.country;
          if (a[country] !== undefined) {
            a[country]++;
          } else {
            a[country] = 1;
          }

        }
        //var country_find="IT";
        var countries_found=[];
        for (var i = res.data.networks.length - 1; i >= 0; i--) {
          var n = res.data.networks[i];

          country = n.location.country;
          if (country == country_find) {
            countries_found.push(n);
          } else {
            
          }

        }

        console.log(countries_found);
        return { bikes: countries_found };
        //return { bikes: res.data.networks }
    })
    .catch((e) => {
      console.log(e);

      error({ statusCode: e.statusCode, message: e.message })
    })

  }
}
</script>

<style scoped>

</style>