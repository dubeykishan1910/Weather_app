<template>
  <div class="error">
    <h1>error 404 (page not found)</h1>
    \
  </div>
    
  </template>
  
  <script>
  export default {
    name: 'DefaultCom',
    data() {
      return {
        
      };
    },
  };
  </script>

  <style scoped>

   .error{
    display: flex;
    color: beige;
    height: 80vh;
    align-items: center;
    justify-content: center;
    
   }
   h1{
    border: 5px solid black;
    line-height: 5rem;
    padding: 5rem;
    background: red;
   }
</style>