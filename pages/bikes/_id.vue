<template>
  <div id="mycomponent" class="container">
    <mymenu></mymenu>
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
import mymenu from '~/components/mymenu.vue'
export default {
  layout: 'app',
  components: {
    mymenu
  },
  async asyncData ({ params }) {
    console.log(params);
    if (params.id) {
    let { data } = await axios.get('https://api.citybik.es/v2/networks/'+params.id)
    console.log(data);
    var sgmapurl= "https://maps.googleapis.com/maps/api/staticmap?center="+data.network.location.latitude+","+data.network.location.longitude+"&zoom=18&size=800x400&";
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

</style>