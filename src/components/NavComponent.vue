<template>
    <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
        <a class="navbar-brand" href="#">Task Tracker</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item" v-if="!users">
                <router-link class="nav-link" to="/tasks">Manage Task</router-link> 
            </li>
            

        </ul>
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item" v-if="users">
                <router-link  class="nav-link" to="/login">Login</router-link> 
            </li>
            <li class="nav-item" v-if="users">
                <router-link class="nav-link" to="/register">Signup</router-link>  
            </li>

            <li class="nav-item" v-if="!users">
                <router-link class="nav-link" to="/login">Logout</router-link>  
            </li>

        </ul>
    </nav>

</template>

<script>
export default {
    name: 'NavComponent',
    props : ['users']
}
</script>

<style>
    .nav-link {
        color: #fff;
    }
    .nav-item router-link{
        color: #fff;
    }
</style>