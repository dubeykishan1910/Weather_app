<template>
    <!-- api call data-->

 <div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 fw-bold text-success">server data User list</p>
        </div>
        <div v-if="loading">
            <SpinnerC/>
        </div>
        
        <!-- only if error come while calling api -->
        <div v-if="errorMessage">
            <p class="fw-bold text-danger">{{ errorMessage }}</p>
        </div>
        
        <!-- table data will be printed after loading -->
        <div v-if="!loading && list.length > 0" class="row">
            <div class="col">
                <table class="table">
                    <thead class="bg-success text-white">
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>website</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in list" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>
                                <router-link :to="'/data/' + user.id" class="text-decoration-none fw-bold text-success">{{ user.name }}</router-link>
                            </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.company.name }}</td>
                            <td>{{ user.website }}</td>
                            <td>{{ user.address.city }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import SpinnerC from './SpinnerC.vue';

export default{
    name: "ForC",
    data() {
        return {
            loading: false,
            list: [],
            errorMessage: null
        };
    },

    // api call get
    async created() {
        try {
            this.loading=true;
            let result = await axios.get("https://jsonplaceholder.typicode.com/users");
            this.list = result.data;
            this.loading=false;
        }
        catch (error) {
            this.loading= false;
            this.errorMessage = error;
        }
    },
    components: { SpinnerC }
}

</script>