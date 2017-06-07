<template>
  <div>
  a
  	<menu />
  	a
    <h1>Welcome!</h1>
    <p><nuxt-link to="/about" class="button is-medium is-primary hvr-float-shadow">About page</nuxt-link></p>
    <p><nuxt-link to="/bikes" class="button is-medium is-primary hvr-float-shadow">Bikes</nuxt-link></p>
    <nuxt-link to="/call">Call page</nuxt-link>
    
  </div>

</template>

<script>
export default {
  layout: 'app'
}
</script>