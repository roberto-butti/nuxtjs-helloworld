<template>
  <div id="mycomponent" class="container">
  	<mymenu></mymenu> 	
    <h1>Welcome!</h1>
    <p><nuxt-link to="/about" class="button is-medium is-primary hvr-float-shadow">About page</nuxt-link></p>
    <p><nuxt-link to="/bikes" class="button is-medium is-primary hvr-float-shadow">Bikes</nuxt-link></p>
    <nuxt-link to="/call">Call page</nuxt-link>
    
  </div>

</template>

<script>

import mymenu from '~/components/mymenu.vue'
export default {
  layout: 'app',
components: {
    mymenu
  }
}
</script>

<style>

</style>