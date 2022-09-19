<template>
    <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Add Task</div>
          <div class="card-body">
            <form @submit.prevent = "createTask">
              <input type="hidden" v-model="task.id">
              <div class="form-group">
                <label for="title">Title </label>
                <input type="text" class="form-control" v-model="task.title">
              </div>
              <div class="form-group">
                <label for="date">Due On</label>
                <input type="date" class="form-control" v-model="task.due_at">
              </div>
              <div class="form-group">
                <label for="description">Summary</label>
                <textarea class="form-control" v-model="task.description"></textarea>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-8">

          <div class="card">
            <div class="card-header">Task List</div>
            <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <th>#</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr v-for="(item,index) of taskList" :key="item.id">
                  <td>{{ index+1 }}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.due_at}}</td>
                  <td>{{item.description}}</td>
                  <td><span class="badge badge-warning">Pending</span></td>
                  <td>
                    <a href="#" @click="editTask(item.id)"><i class="fa fa-pencil"></i></a>&nbsp;&nbsp;
                    <a href="#" style="color:red" ><i class="fa fa-trash-o"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

    export default {
        name : 'TaskComponent',
        mounted() {
            this.fetchTask()
        },
        data() {
          return {
            taskList : {},
            task : {}
          }
        },
        methods: {
          fetchTask(){
            axios.get('/task')
            .then(res => {
              console.log(res)
              this.taskList = res.data.data;
            })
            .catch(err => {
              console.log(err)
            })
          },
          createTask(event){
            let toast = this ;
              axios.post('/task/store',this.task)
              .then(res=> {
                if(res.status == 200){
                  event.target.reset()
                  toast.$toasted.success(res.data.message)
                  toast.fetchTask()
                  
                }
              }).catch(error => {
                  if(error.response.status == 422){
                    let err = error.response.data.errors;
                    if(err.title){
                      toast.$toasted.error(err.title);
                    }else if(err.due_at){
                      toast.$toasted.error(err.due_at)
                    }else if(err.description){
                      toast.$toasted.error(err.description)
                    }
                  }
              })
          },
         async editTask(id){
           const response= await axios.get('/task/edit/'+id);
           if(response.status === 200){
              
            this.task = response.data.data;
           }
          }
        },
    }
</script>