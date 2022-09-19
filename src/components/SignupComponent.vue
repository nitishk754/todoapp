<template>
    <div class="container" style="margin-top:80px">
        <div class="row justify-content-md-center">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">Register User</div>
                    <div class="card-body">
                    <form @submit.prevent = "registerUser">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" class="form-control" v-model="password_confirmation">
                    </div>
                
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name : 'SignupComponent',
        data() {
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation :""
            }
        },
        methods: {
            registerUser(event){
                let toast = this;
                axios.post('/auth/signup',{
                    'name': this.name,
                    'email' : this.email,
                    'password' : this.password,
                    'password_confirmation' : this.password_confirmation
                })
                .then(function(res){
                    console.log(res)
                    if(res.status === 200 && res.data.status){
                        toast.$toasted.success(res.data.message);
                        event.target.reset();
                        toast.$router.push('/login')
                    }
                }).catch(function(error){
                    console.log(error);
                    if(error.response.status === 422){
                        let err = error.response.data.errors;
                        if(err.name){
                            toast.$toasted.error(err.name)
                        }else if(err.email){
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