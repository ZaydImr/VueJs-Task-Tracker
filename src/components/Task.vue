<template>
    <div @dblclick="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}} <i @click="this.$emit('delete-task',id)" class="fas fa-times"></i></h3>
        <p>{{task.day}}</p>
    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task:Object
    }
}
</script>

<style scoped>
.fas{
    color: red;
}
.fas:hover{
    cursor: pointer;    
}
.task{
    background-color: whitesmoke;
    margin: 1rem auto;
    padding: .5rem 1rem;
}
.task.reminder{
    border-left: 5px solid green;
}
h3{
    display: flex;
    justify-content: space-between;
}
p{
    text-align: start;
}
</style>