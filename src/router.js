import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import HomeComponent from '@/components/HomeComponent'
import LoginComponent from '@/components/LoginComponent'
import SignupComponent from '@/components/SignupComponent'
import TaskComponent from '@/components/TaskComponent'

export default new VueRouter({
    mode: 'history',
    base : __dirname,
    routes : [
        {
            path : '/', component : HomeComponent
        },
        {
            path : '/login', component : LoginComponent
        },
        {
            path : '/register', component : SignupComponent
        },
        {
            path : '/tasks', component: TaskComponent
        }
    ]
})