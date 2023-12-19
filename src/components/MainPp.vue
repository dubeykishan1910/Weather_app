<template>
    <div class="main">
      <div class="sidebar">
        <!-- Sidebar navigation links -->
        <span><button @click="currentComponent = 'HomeC'">Load Home</button></span>
        <span><button @click="currentComponent = 'AboutC'">Load About</button></span>
        <span><button @click="currentComponent = 'FormC'">Lord FORM</button></span>
      </div>
      <div class="content">
        <!-- Dynamic component rendering -->
        <component :is="currentComponent" />
      </div>
    </div>
  </template>
  
  <script>
  // Import your components here
  import HomeC from '../components/HomeC.vue';
  import AboutC from '../components/AboutC.vue';
  import FormC from "../components/FormC.vue";
  
  export default {
    name: 'App',
    components: {
      HomeC,
      AboutC,
      FormC,
      // Add more components as needed
    },
    data() {
      return {
        currentComponent: 'HomeC', // Default component to render
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */

  .main{
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    /* padding: 5rem; */

  }
  button{
    
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 400;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Poppins', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 30vw;
    min-height: 60vh;
    width: 100%;
    
    padding: 20px;
    border-radius: 1em;
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); */

  }
  
  .content {

    font-family: 'Poppins', sans-serif;
    position: absolute;
    top: 0;
    right: 0;
    max-width: 60vw;
    width: 100%;

    padding: 20px;
    border-radius: 1em;
    min-height: 60vh;
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); */


    /* float: left;
    width: 80%; */
    
    /* padding: 20px; */
  }
  </style>
  