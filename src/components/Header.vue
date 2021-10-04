<template>
    <header>
        <h1>{{title}}</h1>
        <Button @click="handleClick()" text="Add task"/>
    </header>
</template>

<script>
import Button from './Button'

    export default {
        name: 'Header',
        props:  {
            title: { type:String, default: 'Welcome mf'},
        },        
        components: {
            Button
        },
        methods:{
            handleClick(){
                console.log('clikc');
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;    
    }
</style>