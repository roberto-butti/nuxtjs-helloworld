<template>
<div>
	<h1 class="red">Hello {{ name }}!</h1>
    <p>Hi from me, {{ datex }}</p>
	<p>{{ inc }}</p>
	<p>{{ myreq }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
 </template>

<script>
var i=0;
export default {
  asyncData ({ req }) {
  	var retVal={ name: 'world' };
  	retVal["datex"]="a"+Date.now();
  	retVal["inc"]=i++;
  	retVal["myreq"]= req ? "SERVER" : "none";
    return retVal;
  }
}
</script>

<style>
.red {
  color: red;
}
</style>