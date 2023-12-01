<template>
 
  <NavbarC/>
  <router-view />

</template>

<script>

import NavbarC from "./components/NavbarC.vue";



export default {
  name: 'App',
  components: {
    NavbarC,
    
}}
</script>

<style>
@import "./styles.css";


</style>
