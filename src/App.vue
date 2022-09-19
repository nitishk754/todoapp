<template>
  <div id="app">
    <NavComponent />
    <router-view  :users="users" />
  </div>
</template>

<script lang="js">
import axios from 'axios';
import NavComponent from './components/NavComponent.vue';
export default {
  name: 'App',
  components: {
    NavComponent
  },
  data() {
    return {
      users: {}
    }
  },
  async created() {
    const response= await axios.get('/user')
    if(response.status === 200){
      console.log(response.data.data)
      this.users = response.data.data;
    }

    if(response.status === 422){
      console.log(response);
    }
  },
}
</script>

<style>

</style>
