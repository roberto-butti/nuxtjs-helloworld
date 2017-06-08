<template>
  <div id="mycomponent" class="container">
  	<mymenu></mymenu> 	
    <h1>Welcome !</h1>
    
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