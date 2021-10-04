<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label for="text">Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label for="day">Day & time</label>
            <input type="text" v-model="day" name="day" placeholder="Add Day & Time">
        </div>
        <div class="form-control-check">
            <label for="reminder">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-clock"/>
    </form>
</template>

<script>
export default {
    name:'AddTask',
    data(){
        return{
            text: '',
            day: '',
            reminder: false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();
            if(!this.text) { alert('Please add a task'); return;}
            
            const newTask = 
            {
                id : Math.floor(Math.random() * 100000),
                text : this.text,
                day : this.day,
                reminder : this.reminder
            };

            this.$emit('add-task',newTask);

            this.text = '';
            this.day = '';
            this.reminder = false;
        }
    }

}
</script>

<style scoped>
.add-form{
    margin-bottom: 40px;
    }
    .form-control{
        margin: 20px 0;
    }
    .form-control-check{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
    }
    .form-control-check input{height: 20px;}
    .form-control label{
        display: block;
        font-weight: 500;
        text-align: start;
    }
     .form-control input{
        width: calc(100% - 2.25rem);
        margin: 5px 0;
        font-size: 17px;
        padding: .5rem 1rem;
    }
    input[type=submit]{width: 100%;}
</style>