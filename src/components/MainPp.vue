<template>
    <div>
      <div class="sidebar">
        <!-- Sidebar navigation links -->
        <button @click="currentComponent = 'HomeC'">Load Home</button>
        <button @click="currentComponent = 'AboutC'">Load About</button>
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
  
  export default {
    name: 'App',
    components: {
      HomeC,
      AboutC,
      // Add more components as needed
    },
    data() {
      return {
        currentComponent: 'HomeC', // Default component to render
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  .sidebar {
    float: left;
    width: 20%;
    background-color: #f0f0f0;
    height: 100vh;
  }
  
  .content {
    float: left;
    width: 80%;
    padding: 20px;
  }
  </style>
  