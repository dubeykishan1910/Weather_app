<template>
    <!-- <pre>{{ this.user }}</pre> -->
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-lg">

                    <div class="card-header bg-success text-white">
                        <button v-if="!isLoggedIn" class="btn btn-warning btn-sm s-1 m-1" @click="login()">Login</button>
                        <button v-if="isLoggedIn" class="btn btn-danger btn-sm s-1" @click="logout()">Logout</button>
                    </div>

                    <div v-if="isLoggedIn" class="card-body">
                        <p class="h3 display-3">count {{ this.count }}</p>
                        <button class="btn btn-success m-1" @click="this.incr">Increment</button>
                        <button class="btn btn-warning m-1" @click="decr">Decrement</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4 ">
                <div class="card shadow-lg">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Register Here</p>
                    </div>
                    <div class="card-body bg-light">
                        <form @submit.prevent="register()">
                            <div class="mb-2">
                                <input v-model="userr.name" class="form-control" placeholder="Name" type="text">
                            </div>
                            <div class="mb-2">
                                <input v-model="userr.email" class="form-control" placeholder="Email" type="email">
                            </div>
                            <div class="mb-2">
                                <input v-model="userr.password" class="form-control" placeholder="Password" type="password">
                            </div>
                            <div class="mb-2">
                                <input class="btn btn-success" type="submit" value="Register">
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default{
    name : "CounterEventh",
    data(){
        return{
            count : 0,
            isLoggedIn: false,
            userr:{
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods :{
        incr: function(){
            this.count +=1
        },
        decr: function(){
            this.count -=1
        },
        register: function(){
            console.log(this.user)
        },

        login: function(){
            this.isLoggedIn=true
        },
        logout: function(){
            this.isLoggedIn=false
        }
    }

}
</script>