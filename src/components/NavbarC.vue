<template>
<nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
        <router-link class="navbar-brand" to="/">Vue Router</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link px-4" to="/">Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link px-4" to="/users">Users</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link px-4" to="/weather">Weather</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link px-4" to="/data">Api Data</router-link>
                </li>
                

                
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default{
    name : "NavbarC"

}</script>
<style scoped>
.navbar{
    min-height: 10vh;
    
}
.nav-item{
    font-size: 20px;
}
</style>