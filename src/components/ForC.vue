<template>
    <!-- taking data for logal storage -->
 <div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 fw-bold text-success">User list local storage</p>
        </div>
        <div class="row">
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
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
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
import { UserService } from "../services/UserService";
export default{

    name : "ForC",
    data: function(){
        return{
        users: UserService.getALLUsers()
        };
    }
}
</script>