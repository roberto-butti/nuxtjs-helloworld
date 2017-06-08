<template>

<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
      <img src="~assets/roadbike.svg" alt="roadbike logo">
      </a>
      <nuxt-link to="/" class="nav-item is-tab is-mobile ">Home</nuxt-link>
      <nuxt-link to="/bikes" class="nav-item is-tab is-mobile ">Bikes</nuxt-link>
      
      
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</nav>

</template>
<script>
	
	export default {
		name: 'mymenu',
		data: function() {
			return { greeting:'Hello'}
		}
	}
</script>

<style scoped>
</style>