<template>
    <header>
        <h1>{{title}}</h1>
        <Button  @click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add task'" :color="showAddTask ? 'red' : ''"/>
    </header>
</template>

<script>
import Button from './Button'

    export default {
        name: 'Header',
        props:  {
            title: { type:String, default: 'Welcome mf'},
            showAddTask : Boolean
        },        
        components: {
            Button
        }
    }
</script>

<style>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;    
    }
</style>