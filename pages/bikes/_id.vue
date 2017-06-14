<template>
  <div id="mycomponent" class="container">
    <mymenu></mymenu>
    <h1>BICI :{{ bike.name }}</h1>
    <pre>{{ bike.id }}</pre>
    <div>{{ bike.location.city }}</div>
    <div>{{ bike.location.country }}</div>
    <img :src="gmapurl">

    <script async defer src="https://maps.googleapis.com/maps/api/js?callback=renderMap"></script>
    <div id="vue-map">
      <div id="map_canvas1"></div>
    </div>

    <p><nuxt-link to="/bikes">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'
import mymenu from '~/components/mymenu.vue'



export default {
  layout: 'app',
  name: 'detailmap',
  components: {
    mymenu
  },
  data () {
    return { map:null }
  },
  mounted(){
    window.renderMap = () => {

      var myLatLng = {lat: this.bike.location.latitude, lng: this.bike.location.longitude};
      this.map = new google.maps.Map(document.getElementById('map_canvas1'), {
          center: myLatLng,
          zoom: 12
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: this.bike.name
      });
      //console.log("PARAMETRO:"+this.$route.params.id)
      //console.log(this.bike)

    }
  },
  create() {
  },
  async asyncData ({ params }) {
    console.log(params);

    if (params.id) {
      var start = new Date().getTime()
      let { data } = await axios.get('https://api.citybik.es/v2/networks/'+params.id)
      //console.log(data)
      var end = new Date().getTime()
      var time = end - start
      //console.log('Execution time: ' + time)
      var sgmapurl= "https://maps.googleapis.com/maps/api/staticmap?center="+data.network.location.latitude+","+data.network.location.longitude+"&zoom=18&size=800x400&";
      console.log(sgmapurl);
      return { bike: data.network, gmapurl:sgmapurl }
    }

    return { bike: {name:'bikename', id:'bikeid'}}
  },

  head () {
    //console.log(this.bike.name);
    return {
      title: this.bike.name
    }
  }
}
</script>

<style scoped>
#map_canvas1{
    width: 100%;
    height: 300px;
    border: 1px solid black;
    float:left;
}
</style>
