<template>
  <div class="container">
    <Header  @toggle-add-task="this.showAddTask = !this.showAddTask" title="Task tracker" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data(){
    return{
      tasks:[],
      showAddTask : false
    }
  },
  methods:{
      addTask(task){
        this.showAddTask = false;
          this.tasks = [...this.tasks,task];
      },
      deleteTask(id){
      if(confirm('Are you sure ?')) this.tasks = this.tasks.filter(task=>task.id !== id);
      },
      toggleReminder(id){
          this.tasks = this.tasks.map(task=>task.id === id ? { ...task, reminder: !task.reminder} : task);
      }
  },
  created(){
      this.tasks = [
        {
          id: 1,
          text: 'Task1',
          day : 'March 3rd at 1:30pm',
          reminder : true
        },
        {
          id: 2,
          text: 'Task2',
          day : 'March 2nd at 2:30pm',
          reminder : true
        },
        {
          id: 3,
          text: 'Task3',
          day : 'March 3rd at 3:30pm',
          reminder : false
        }
      ]
  },
  
}
</script>

<style>
*{font-family: 'poppins';}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn{
  background-color: #2c3e50;
  color:white;
  border-radius: 5px;
  border: 0px;
  padding: .5rem 1rem;
}
.container {
  width: 500px;
  margin: auto;
  border: 1px solid green;
  border-radius: 5px;
  padding: 0 2rem;
}
</style>
