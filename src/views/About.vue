<template>
    <header>
        <router-link to="/"><i class="fas fa-angle-left"></i> Go back</router-link>
        <h1>About</h1>
    </header>
    <div class="row">
        <div class="line">
            <h3>Technologies :</h3>
            <p>VueJs 3 / json-server </p>
        </div>
        <div class="line">
            <h3>Version :</h3>
            <p>1.0.0</p>
        </div>
        <div class="line">
            <h3>Developer :</h3>
            <a target="_blank" href="https://www.linkedin.com/in/zaydimr/">Zayd EL IMRANI</a>
        </div>
        <div class="line">
            <h3>Github repository :</h3>
            <a target="_blank" href="https://github.com/ZaydImr/VueJs-Task-Tracker"><i class="fab fa-github"></i> Github</a>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    components:{
        Header
    }
}
</script>

<style scoped>
header a{
    position: absolute;
    left: 0;
    color: royalblue;
    text-decoration: none;
}
header{
    justify-content: center;
    position: relative;
    align-items: center;
    margin-bottom: 0;
}
.line{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
a{
    color: black;
    text-decoration: none;
}
h3,p{
    margin: .5rem 0
}
.row{
    margin-bottom: 2rem;
}
</style>