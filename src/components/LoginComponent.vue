<template>
    <div class="container" style="margin-top:80px">
        <div class="row justify-content-md-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="loginUser">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" v-model="password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        loginUser() {
            let toast = this;
            axios.post('/auth/login',{
                email : this.email,
                password : this.password 
            }).then(res => {
                if(res.status === 200){
                    // check if logged in successfully
                    if(res.data.status){
                        toast.$toasted.success(res.data.message)

                        // set token to localstorage
                        localStorage.setItem('auth_token',res.data.token)
                        toast.$router.push('/tasks');
                    }
                    // check if inavlid credentials
                    if(!res.data.status){
                        toast.$toasted.error(res.data.message)
                    }
                }
            }).catch(error => {
                if(error.response.status === 422){
                    let err = error.response.data.errors;
                    if(err.email){
                        toast.$toasted.error(err.email)
                    }else if(err.password){
                        toast.$toasted.error(err.password)
                    }
                }
            })
        }
    },
}
</script>