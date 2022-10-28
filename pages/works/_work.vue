<template>
    <div class="work">
        <div class="logo"> <img :src="require(`~/static/images/logos/${allProjects[1].logo}.png`)" class="logo" alt="">
        </div>
        <h1 class="intro p-0 m-0 name">{{ allProjects[1].company }}</h1>
        <p class="about">{{ allProjects[1].about }}</p>

        {{allProjects}}
    </div>
</template>
  
<script>
import Projects from '~/static/js/projects.js'
export default {
    name: 'Contact',
    components: [Projects],
    computed: {
        allProjects() {
            console.log(Projects.projects)
            return Projects.projects
        }
    }
}
</script>
  
<style lang="scss" scoped>
.work {
    overflow: clip;

    .logo {
        width: 150px;
        margin: 0 auto;
        margin-top: -25px;

        @include mobile {
            width: 100px;
            margin-top: 0px;

        }
    }

    h1 {
        font-family: 'josefin sans', sans-serif;
        font-size: 90px;
        font-weight: bolder;
        color: #7949a7;
        text-align: center;

        @include mobile {
            font-size: 60px;
        }
    }

    .about{
        text-align:center;
        font-size:24px;

    }
}
</style>
  