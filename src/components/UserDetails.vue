<template>
<div class="team">
    <div class="container mt-3">
        <div class="row">
            <div class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                    <!-- <div class="teampic">
                        <img src="#" alt="tem1">
                    </div> -->

                    <div class="member-info">
                        <h4>Name = {{ list.name }} </h4>
                        <span>Email = {{ list.email }}</span>
                        <p>website = {{ list.website }}</p>
                        <p>Phone = {{ list.phone }}</p>
                    </div>
                </div>
                <!-- <pre>{{ list }}</pre> -->
            </div>
        </div>
    </div>
</div>
    <div class="row">
        <div class="col">
            <router-link to="/data" class="btn btn-success ms-3">Back</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default{
    
    name : "UserDetails",
    data(){
        return{
            loading: false,
            list: [],
            errorMessage: null
        }
    },
     async created(){
        try {
            this.loading=true;
            let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.Id}`);
            this.loading=false;
            this.list = result.data;
            console.warn(result.data)
            
        }
        catch (error) {
            this.loading= false;
            this.errorMessage = error;
        }
    },

    
};
</script>

<style scoped>

</style>