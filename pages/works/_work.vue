<template>
    <div class="work">
        <div class="logo"> <img :src="require(`~/static/images/logos/${allProjects[1].logo}.png`)" class="logo" alt="">
        </div>
        <h1 class="intro p-0 m-0 name">{{ allProjects[1].company }}</h1>
        <p class="about">{{ allProjects[1].about }}</p>

        <div class="row mt-5 mt-md-2">
            <div class="left col-lg-6 order-2 order-lg-1">
                <h3>Client Details</h3>
                <div class="d-md-flex">
                    <ul class="mr-md-5">
                        <h4>Industry</h4>
                        <li>{{ allProjects[1].about }}</li>
                    </ul>
                    <ul>
                        <h4>Service rendered</h4>
                        <li v-for="(service, i) in allProjects[1].services" :key="i">{{ service }}</li>
                    </ul>
                </div>
                <ul>
                    <h4>Objectives</h4>

                    <li v-for="(objective, i) in allProjects[1].objectives" :key="i">{{ objective }}</li>
                </ul>
            </div>
            <div class="right col-lg-6 order-1 order-lg-2">
                <VueSlickCarousel v-bind="settings" ref="carousel">
                    <div class="review">
                        <img src="~/static/images/mockups/gob1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                    <div class="review">
                        <img src="~/static/images/mockups/mbi1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                    <div class="review">
                        <img src="~/static/images/mockups/top1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                </VueSlickCarousel>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-7">
                <ul class="w-done">
                    <h3>Work Done</h3>

                    <li v-for="(work, i) in allProjects[1].work_done" :key="i">{{ work }}</li>
                </ul>
                <ul class="results">
                    <h3>Results</h3>
                    <li v-for="(result, i) in allProjects[1].results" :key="i">{{ result }}</li>
                </ul>
            </div>
            <div class="col-lg">
                <div class="col"></div>

            </div>
        </div>



        <!-- {{allProjects}} -->
    </div>
</template>
  
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Projects from '~/static/js/projects.js'
export default {
    name: 'Contact',
    components: { VueSlickCarousel },
    // components: [Projects, VueSlickCarousel],
    data() {
        return {
            settings: {
                dots: false,
                arrows: false,
                focusOnSelect: true,
                infinite: true,
                speed: 800,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                touchThreshold: 5,
                responsive: [
                    {},
                    {
                        breakpoint: 900,
                        settings: {
                            fade: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        }
    },
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
    padding: 0px 7%;
    background: url("~/static/images/mob-1.svg");
    background-size: cover;
    background-repeat: no-repeat;

    .logo {
        width: 150px;
        margin: 0 auto;

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

    h3 {
        font-family: 'josefin sans', sans-serif;
        font-size: 48px;
        font-weight: bolder;
        color: #7949a7;
        margin-top: 30px;
        margin-bottom: 15px;

        @include bg-tablet {
            font-size: 36px;
        }

    }

    h4 {
        font-family: 'josefin sans', sans-serif;
        font-size: 24px;
        font-weight: bolder;
        color: #7949a7;
    }

    .about {
        text-align: center;
        color: #7949a7;
        font-size: 18px;

    }

    ul {
        list-style: none;
        margin-top: 30px;
        background: rgb(250, 239, 254);
        border-radius: 15px;
        padding: 20px;

        li {
            margin-bottom: 15px;
            border-left: 5px solid #7949a7;
            padding-left: 5px;
            font-size: 16px;

            @include mobile {
                // border: none;
                // text-align: left;
                // max-width: 60vw;
                // margin:0 auto 15px;
            }
        }

    }

    .left {}

    .review {

        .quote {
            max-width: 250px !important;
            // margin-left: auto;
        }
    }

    .w-done,
    .results {
        margin-top: 50px;
    }
}
</style>
  