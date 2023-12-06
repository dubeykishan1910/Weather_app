<template>
    <header>
        <div class="navbar">
            <div class="logo"><router-link to="/main" class="a">API CALL</router-link></div>
            <ul class="links">
                <li><router-link class="nav-link" to="/">Home</router-link></li>
                <li v-on:click="logout"><a class="nav-link" href="#">Logout</a></li>
                <li><router-link class="nav-link" to="/">Contact</router-link></li>
                <li><router-link class="nav-link" to="/">card</router-link></li>
            </ul>
    
            <button @click="toggleNavbar" class="toggle_btn"><i class="ri-menu-line"></i></button>
        </div>
    
        <div class="dropdown__menu" :class="{'open':isNavbarOpen}">
            <li @click="toggleNavbar"><router-link class="nav-link" to="/">Home</router-link></li>
            <li @click="toggleNavbar" v-on:click="logout"><a class="nav-link" href="#">Logout</a></li>
            <li @click="toggleNavbar"><router-link class="nav-link" to="/">Contact</router-link></li>
            <li @click="toggleNavbar"><router-link class="nav-link" to="/">Card</router-link></li>
        </div>
    </header>
    </template>
    
    <script>
    export default {
        name: 'HeaderC',
        data(){
          return{
            isNavbarOpen: false,
          }
        },
        methods: {
          toggleNavbar(){
          this.isNavbarOpen=! this.isNavbarOpen
          },
        }
    };
    </script>
    
    <style scoped>
    /*=============== HEADER & NAV ===============*/
    a:hover {
        color: orange;
    }
    button{
      border: none;
      background: aqua;
    }
    
    header {
        position: relative;
        padding: 0 2rem;
        background-color: aqua;
    }
    
    .navbar {
    
        width: 100%;
        height: 5rem;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .navbar .logo .a {
    
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .navbar .links {
        display: flex;
        gap: 2rem;
    }
    
    .navbar .toggle_btn {
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
    }
    
    /* Dropdown menu */
    .dropdown__menu{
      display: none;
      position: absolute;
      right: 2rem;
      top: 60px;
      height: 0;
      width: 300px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(15px);
      border-radius: 10px;
      overflow: hidden;
    
    }
    .dropdown__menu.open{
      height: 190px;
    }
    .dropdown__menu li{
      padding: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (max-width: 992px) {
        .navbar .links {
            display: none;
        }
    
        .navbar .toggle_btn {
            display: block;
        }
        .dropdown__menu{
          display: block;
        }
    
    }
    
    @media (max-width: 600px) {
    
        .dropdown__menu{
            left:2rem;
            width: unset;
        }
        .dropdown__menu.open{
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-inline: auto;
            
    }
    }
    </style>