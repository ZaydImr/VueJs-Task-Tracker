<template>
  <div class="container">
    <router-view> </router-view>
  </div>
</template>
 
<script>


export default {
  name: 'App',
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
a{
  transition: .3s;
}
a:hover{
  font-weight: 500;
  font-size: large;
}
</style>
