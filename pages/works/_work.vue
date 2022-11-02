<template>
    <div class="work">
        <div class="logo"> <img :src="require(`~/static/images/logos/${project.logo}.png`)" class="logo" alt="">
        </div>
        <h1 class="intro p-0 m-0 name">{{ project.company }}</h1>
        <p class="about">{{ project.about }}</p>

        <div class="row info">
            <div class="left col-lg-6 order-2 order-lg-1">
                <h3>Client Details</h3>
                <div class="d-md-flex">
                    <ul class="mr-md-5">
                        <h4>Industry</h4>
                        <li>{{ project.about }}</li>
                    </ul>
                    <ul>
                        <h4>Service rendered</h4>
                        <li v-for="(service, i) in project.services" :key="i">{{ service }}</li>
                    </ul>
                </div>
                <ul>
                    <h4>Objectives</h4>

                    <li v-for="(objective, i) in project.objectives" :key="i">{{ objective }}</li>
                </ul>
            </div>
            <div class="right col-lg-6 order-1 order-lg-2">
                <div class="d-flex">
                    <img :src="project.mockup" alt="" class="mockup mx-auto ml-lg-auto">
                </div>
                <!-- <VueSlickCarousel v-bind="settings" ref="carousel">
                    <div class="review">
                        <img src="~/static/images/mockups/gob1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                    <div class="review">
                        <img src="~/static/images/mockups/mbi1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                    <div class="review">
                        <img src="~/static/images/mockups/top1.png" alt="" class="quote mx-auto ml-md-auto" />
                    </div>
                </VueSlickCarousel> -->
            </div>
        </div>

        <div class="row">
            <div class="col-lg-9">
                <ul class="w-done">
                    <h3>Work Done</h3>

                    <li v-for="(work, i) in project.work_done" :key="i">{{ work }}</li>
                </ul>
                <ul class="results">
                    <h3>Results</h3>
                    <li v-for="(result, i) in project.results" :key="i">{{ result }}</li>
                </ul>
            </div>
            <div class="col-12 gallery">
                <div class="gallery-in">
                    <div v-for="(stat, idx) in project.stats" :key="idx" class="stat ">
                        <img :src="stat" alt="">
                    </div>
                </div>

            </div>
        </div>

        <h3 class="r-head">Client Review</h3>
        <img :src="project.review" alt="" class="review">
    </div>
</template>
  
<script>
// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Projects from '~/static/js/projects.js'
export default {
    name: 'Contact',
    // components: { VueSlickCarousel },
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
        project() {
            console.log(Projects.projects)
            return Projects.projects[this.$route.params.work]
        }
    }
}
</script>
  
<style lang="scss" scoped>
.work {
    overflow-x: hidden;
    padding: 0px 7%;
    background: url("~/static/images/mob-1.svg");
    background-size: cover;
    background-repeat: no-repeat;


    @include mobile {
        padding: 0 5%;
    }

    .logo {
        width: 150px;
        margin: 0 auto;

        @include mobile {
            width: 150px;
            margin-top: 0px;

        }
    }

    h1 {
        font-family: 'josefin sans', sans-serif;
        font-size: 82px;
        font-weight: bolder;
        color: #7949a7;
        text-align: center;

        @include bg-tablet {
            font-size: 64px;
        }

        @include mobile {
            font-size: 48px;
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

    .mockup {
        max-height: 700px;

        @include tablet {
            max-height: 500px;
            margin-bottom: 50px;
        }
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

    .info {
        margin-top: 50px;
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

    .stat {
        height: 300px;
        cursor: pointer;

        // position: relative;
        // flex: 1 1 auto;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            vertical-align: middle;
            max-width: 340px;

            @include tablet {
                min-width: 300px;
            }
        }

    }

    .gallery {}

    .gallery-in {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 0 !important;
        gap: 1px;

        @include mobile {
            flex-wrap: nowrap;
            width: 100%;
            overflow-x: auto;

            &::-webkit-scrollbar {
                height: 5px
            }

            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(33, 33, 33, 0.3);
            }

            &::-webkit-scrollbar-thumb {
                background-color: #7949a7;
                border-radius: 35px;
            }
        }


    }

    .r-head {}

    .review {
        max-width: 600px;

        @include mobile {
            width: 100%;
        }
    }
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.4s ease-in;
}

.page-enter,
.page-leave-to {
    opacity: 0;

}
</style>
  