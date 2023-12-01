<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3">Customer (using props)</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : {{ name }}
                    </li>
                    <li class="list-group-item">
                        age : {{ age }}
                    </li>
                    <li class="list-group-item">
                        Designation : {{ designation }}
                    </li>
                </ul>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "CustomerC",
    // declear props call from parent component
    props:{
        name:{type:String, required: true},
        age:{type:Number, required: true},
        designation:{type:String, required: true},

    }
}
</script>