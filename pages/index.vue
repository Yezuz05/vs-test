<script setup lang="ts">
    import { GET_CORPORATE_LANDING_PAGE } from '~/graphql/queries';
    import type { LandingPageResponse } from '~/types';
    import VideoIcon from '~/assets/icons/video.svg';
    import BookIcon from '~/assets/icons/book.svg';
    import ClockIcon from '~/assets/icons/clock.svg';
    import CheckCircleIcon from '~/assets/icons/check-circle.svg';
    import CloseCircleIcon from '~/assets/icons/close-circle.svg';
    import InfoIcon from '~/assets/icons/info.svg';
    import SeatsIcon from '~/assets/icons/seats.svg';
    import CalendarIcon from '~/assets/icons/calendar.svg';


    const { data } = await useAsyncData('corporateTraining', async (ctx) => {
        const { $hygraph } = ctx!;
        
        const res = await $hygraph.request<LandingPageResponse>(GET_CORPORATE_LANDING_PAGE);
        return res;
    })

    const landingPageData = data.value?.landingPages[0]!;

    const metrics = landingPageData.metrics;

    const getMetric = (metric: string) => {
        return metrics.find((m) => m.key === metric)?.value;
    }
</script>

<template>
    <main class="page">
        <section class="flex flex-col xl:flex-row xl:items-center section-container text-center xl:text-start xl:justify-between text-white gap-12 sm:px-[83px] xl:px-[135px] pt-[32px] sm:pt-12 lg:pt-[32px]">
            <div class="flex flex-col gap-6 sm:gap-10 sm:px-5 xl:px-0 xl:w-[570px] flex-shrink-0">
                <h1 class="text-[40px] sm:text-6xl font-bold">
                    {{landingPageData.title[0]}} <span class="text-primary">{{landingPageData.title[1]}}</span> {{landingPageData.title[2]}}
                </h1>
                <p class="sm:text-[22px]">
                    {{landingPageData.subtitle}}
                </p>
                <button class="btn btn--fill w-[176px] mx-auto xl:ml-0">{{landingPageData.cta}}</button>
            </div>
            <div class="flex w-full sm:max-w-[602px] sm:mx-auto">
                <NuxtImg src="/images/hero.png" alt="Corporate training" />
            </div>
        </section>  
        <div class="waves"></div>
        <section class="flex flex-col section-container gap-16 pb-[60px] pt-[104px] sm:pt-[100px] xl:pt-[53px]">
            <div class="flex flex-col sm:flex-row gap-6 bg-midnight-haze bg-opacity-90 rounded-[30px] p-6 sm:py-10 xl:px-10">
                <div class="flex justify-center items-center w-[85px] h-[88px] sm:w-[152px] sm:h-[158px] xl:w-[280px] xl:h-[247] px-3 sm:px-5 py-[10px] sm:py-4 xl:py-[47px] xl:px-[72px] flex-shrink-0 mx-auto">
                    <NuxtImg src="/images/logo-small.png" alt="Vue school" />
                </div>
                <div class="flex flex-col gap-4 sm:gap-8 text-white text-center sm:text-start">
                    <h2 class="font-bold text-2xl sm:text-[40px] leading-7 sm:leading-[48px]">
                        About Vue School corporate training
                    </h2>
                    <p class="text-sm sm:text-[22px] sm:leading-[32px] leading-6">
                        Vue School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers. 
                        Private individuals and small to enterprise companies have used our services to develop their skills since 2016. 
                    </p>
                </div>
            </div>
            <div class="hidden xl:flex gap-[31px]">
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
                <div class="flex w-[169px] h-[60px] px-[25.2px] pt-[10px]">
                    <NuxtImg class="object-contain" src="/images/google-logo.png" alt="Google" />
                </div>
            </div>
        </section>
        <div class="breakers"></div>
        <section class="flex flex-col xl:flex-row section-container py-[60px] sm:px-[99px] xl:px-[135px] gap-8 sm:gap-7 xl:gap-20 xl:items-center">
            <div class="flex flex-col gap-[13px] text-center xl:text-start">
                <p class="uppercase text-gradient font-medium leading-[18px] sm:leading-7 text-base sm:text-2xl">Your #1 source of Vue.js Courses</p>
                <h2 class="text-[40px] sm:text-6xl text-silver font-bold leading-[48px] sm:leading-[71px]">
                    Full Stack <span class="text-gradient-mix">Vue Training</span> Solutions
                </h2>
            </div>
            <div class="flex gap-6 sm:gap-[61px] mx-auto">
                <div class="flex flex-col gap-[11px]">
                    <p class="text-gradient text-[64px] sm:text-[90px] leading-[75px] sm:leading-[106px] font-medium">
                        {{ getMetric('lessons') }}
                    </p>
                    <div class="flex gap-[10px] text-silver text-sm sm:justify-center">
                        <VideoIcon :fontControlled="false" class="w-[18px] h-[18px]" />
                        <span>Video lessons</span>
                    </div>
                </div>
                <div class="flex flex-col gap-[11px]">
                    <p class="text-gradient text-[64px] sm:text-[90px] leading-[75px] sm:leading-[106px] font-medium">
                        {{ getMetric('courses') }}
                    </p>
                    <div class="flex gap-[10px] text-silver text-sm sm:justify-center">
                        <BookIcon :fontControlled="false" class="w-[18px] h-[18px]" />
                        <span>Courses</span>
                    </div>
                </div>
                <div class="flex flex-col gap-[11px]">
                    <p class="text-gradient text-[64px] sm:text-[90px] leading-[75px] sm:leading-[106px] font-medium">
                        {{ getMetric('hours') }}
                    </p>
                    <div class="flex gap-[10px] text-silver text-sm sm:justify-center">
                        <ClockIcon :fontControlled="false" class="w-[18px] h-[18px]" />
                        <span>hours</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-container flex flex-col gap-14 sm:gap-[72px] xl:gap-[120px] py-[60px] sm:py-[70px] xl:pt-[100px] xl:pb-[80px]">
            <h2 class="text-[40px] sm:text-6xl text-center text-silver font-bold max-w-[752px] mx-auto">
                Discounted <span class="text-gradient-mix">Corporate Training</span> Bundles
            </h2>
            <div class="flex flex-col xl:flex-row gap-6 xl:gap-[30px] xl:justify-between">
                <template v-for="bundle in landingPageData.prices">
                    <div class="bundle">
                        <div class="flex gap-4">
                            <div class="w-8 h-8 py-1 px-[6px] flex items-center justify-center">
                                <NuxtImg class="object-contain" :src="`/images/${bundle.icon}.svg`" :alt="bundle.title" />
                            </div>
                            <h4 class="text-silver font-bold text-[22px]">{{ bundle.title }}</h4>
                        </div>
                        <div class="flex flex-col gap-6">
                            <p class="text-primary leading-6">Includes 1 year access to:</p>
                            <ul class="flex flex-col gap-4">
                                <li v-for="feature in bundle.baseFeatures" class="flex items-center gap-4">
                                    <CheckCircleIcon :fontControlled="false" class="w-[18px] h-[18px]" filled />
                                    <span class="text-silver text-sm leading-5">{{feature}}</span>
                                    <InfoIcon :fontControlled="false" class="w-[14px] h-[14px] ml-auto" filled />
                                </li>
                                <li v-for="feature in bundle.unsupportedFeatures" class="flex items-center gap-4 opacity-20">
                                    <CloseCircleIcon :fontControlled="false" class="w-[18px] h-[18px]" filled />
                                    <span class="text-silver text-sm leading-5">{{feature}}</span>
                                </li>
                                <li v-for="feature in bundle.specialFeatures" class="flex items-center gap-4">
                                    <CheckCircleIcon :fontControlled="false" class="w-[18px] h-[18px]" filled />
                                    <span class="text-silver text-sm leading-5 font-bold">{{feature}}</span>
                                    <InfoIcon :fontControlled="false" class="w-[14px] h-[14px] ml-auto" filled />
                                </li>
                            </ul>
                            <div v-if="bundle.title === 'Professional'" class="flex items-center gap-4 bg-primary bg-opacity-20 h-[80px] py-4 px-6 rounded-[10px]">
                                <div class="flex rounded-md w-12 h-12">
                                    <NuxtImg src="/images/vue-mastery.png" alt="Vue mastery" />
                                </div>
                                <div class="flex flex-col font-medium">
                                    <p class="text-grey text-sm">
                                        Enough time to watch:
                                    </p>
                                    <p class="text-white text-lg">
                                        The Vue 3 Masterclass
                                    </p>
                                </div>
                            </div>
                            <div class="bg-phantom-blue rounded-2xl py-6 px-4">
                                <div class="flex items-center gap-[10px] mb-6">
                                    <span class="font-bold text-[40px] text-white leading-[50px]">
                                        ${{bundle.amount}}
                                    </span>
                                    <span class="text-grey">/ seat / month</span>
                                </div>
                                <div class="flex flex-col gap-3 mb-4">
                                    <p class="font-bold text-white leading-[18px]">How many licenses do you need?</p>
                                    <div class="flex flex-col">
                                        <span class="h-[22px]">
                                            <input type="range" id="licenses" class="licenses-slider" name="licenses" min="5" max="20" />
                                        </span>
                                        <label for="licenses" class="flex justify-between text-sm font-medium text-dusk-blue">
                                            <span>5</span>
                                            <span>20</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex items-center gap-5 justify-between sm:justify-normal">
                                    <div class="flex items-center py-1 px-[14px] gap-[10px] bg-midnight-essence bg-opacity-20 rounded-lg">
                                        <SeatsIcon :fontControlled="false" class="w-[18px] h-[18px]" filled />
                                        <span class="text-white text-[26px] font-bold leading-[30px]">
                                            12
                                        </span>
                                        <span class="text-grey">
                                            seats
                                        </span>
                                    </div>
                                    <p class="text-primary font-medium">
                                        {{bundle.discount}}% discount
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6">
                                <a href="#" class="btn btn--fill">
                                    Start learning
                                </a>
                                <a class="text-primary mx-auto font-medium leading-[18px]" href="">Refer your manager</a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
        <section class="section-container flex flex-col pt-[60px] pb-[50px] sm:pb-[70px] xl:pb-[100px]">
            <div class="flex items-center mb-14 sm:mb-[72px] justify-center xl:justify-between">
                <h2 class="text-white text-[40px] sm:text-6xl font-bold leading-[47px] text-center">
                    Available Workshops
                </h2>
                <button class="hidden xl:btn btn--fill w-[247px]">See all the workshops</button>
            </div>
            <Swiper 
                :modules="[SwiperAutoplay, SwiperFreeMode, SwiperA11y]"
                :autoplay="{
                    delay: 2000,
                    disableOnInteraction: true,
                }"
                :breakpoints="{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },
                    768: {
                        slidesPerView: 1.3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 1.3,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 2.3,
                        spaceBetween: 30,
                    },
                }"
                :free-mode="true"
                :loop="true"
                class="max-w-full"
            >
                <SwiperSlide class="group w-[345px] sm:w-[570px] rounded-[30px] bg-midnight-haze bg-opacity-90 hover:bg-gradient-to-r from-[#4F08E650] to-[#FF497550] hover:text-white">
                    <div class="h-[68px] py-6 px-4 xl:px-[35px] text-silver rounded-t-[30px] flex items-center gap-3 bg-gradient-to-r from-[#4F08E650] to-[#FF497550]">
                        <CalendarIcon :fontControlled="false" class="w-[18px] h-[20px]" />
                        <span class="font-bold leading-[18px]">
                            December 14th - 11:00 AM (GMT-3)
                        </span>
                    </div>
                    <div class="flex flex-col gap-5 py-[35px] px-4 xl:px-[35px]">
                        <div class="flex items-center gap-[35px] text-dusk-blue group-hover:text-white text-sm">
                            <span class="flex gap-3 items-center">
                                <VideoIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>LIVE Training</span>
                            </span>
                            <span class="flex gap-3 items-center">
                                <ClockIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>15 hours</span>
                            </span>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-medium text-silver text-2xl leading-[28px]">Vue.js Fundamentals</h3>
                            <p class="text-dusk-blue group-hover:text-white text-sm leading-5">
                                A progressive framework for building user interfaces. 
                                Unlike other monolithic frameworks, 
                                Vue is designed from the ground up to be incrementally...
                            </p>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full overflow-hidden">
                                    <NuxtImg src="/images/speaker.png" alt="Steve Popoola" />
                                </span>
                                <span class="text-sm text-dusk-blue group-hover:text-white">
                                    Steve Popoola
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="group w-[345px] sm:w-[570px] rounded-[30px] bg-midnight-haze bg-opacity-90 hover:bg-gradient-to-r from-[#4F08E650] to-[#FF497550] hover:text-white">
                    <div class="h-[68px] py-6 px-4 xl:px-[35px] text-silver rounded-t-[30px] flex items-center gap-3 bg-gradient-to-r from-[#4F08E650] to-[#FF497550]">
                        <CalendarIcon :fontControlled="false" class="w-[18px] h-[20px]" />
                        <span class="font-bold leading-[18px]">
                            December 14th - 11:00 AM (GMT-3)
                        </span>
                    </div>
                    <div class="flex flex-col gap-5 py-[35px] px-4 xl:px-[35px]">
                        <div class="flex items-center gap-[35px] text-dusk-blue group-hover:text-white text-sm">
                            <span class="flex gap-3 items-center">
                                <VideoIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>LIVE Training</span>
                            </span>
                            <span class="flex gap-3 items-center">
                                <ClockIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>15 hours</span>
                            </span>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-medium text-silver text-2xl leading-[28px]">Vue.js Fundamentals</h3>
                            <p class="text-dusk-blue group-hover:text-white text-sm leading-5">
                                A progressive framework for building user interfaces. 
                                Unlike other monolithic frameworks, 
                                Vue is designed from the ground up to be incrementally...
                            </p>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full overflow-hidden">
                                    <NuxtImg src="/images/speaker.png" alt="Steve Popoola" />
                                </span>
                                <span class="text-sm text-dusk-blue group-hover:text-white">
                                    Steve Popoola
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="group w-[345px] sm:w-[570px] rounded-[30px] bg-midnight-haze bg-opacity-90 hover:bg-gradient-to-r from-[#4F08E650] to-[#FF497550] hover:text-white">
                    <div class="h-[68px] py-6 px-4 xl:px-[35px] text-silver rounded-t-[30px] flex items-center gap-3 bg-gradient-to-r from-[#4F08E650] to-[#FF497550]">
                        <CalendarIcon :fontControlled="false" class="w-[18px] h-[20px]" />
                        <span class="font-bold leading-[18px]">
                            December 14th - 11:00 AM (GMT-3)
                        </span>
                    </div>
                    <div class="flex flex-col gap-5 py-[35px] px-4 xl:px-[35px]">
                        <div class="flex items-center gap-[35px] text-dusk-blue group-hover:text-white text-sm">
                            <span class="flex gap-3 items-center">
                                <VideoIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>LIVE Training</span>
                            </span>
                            <span class="flex gap-3 items-center">
                                <ClockIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>15 hours</span>
                            </span>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-medium text-silver text-2xl leading-[28px]">Vue.js Fundamentals</h3>
                            <p class="text-dusk-blue group-hover:text-white text-sm leading-5">
                                A progressive framework for building user interfaces. 
                                Unlike other monolithic frameworks, 
                                Vue is designed from the ground up to be incrementally...
                            </p>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full overflow-hidden">
                                    <NuxtImg src="/images/speaker.png" alt="Steve Popoola" />
                                </span>
                                <span class="text-sm text-dusk-blue group-hover:text-white">
                                    Steve Popoola
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="group w-[345px] sm:w-[570px] rounded-[30px] bg-midnight-haze bg-opacity-90 hover:bg-gradient-to-r from-[#4F08E650] to-[#FF497550] hover:text-white">
                    <div class="h-[68px] py-6 px-4 xl:px-[35px] text-silver rounded-t-[30px] flex items-center gap-3 bg-gradient-to-r from-[#4F08E650] to-[#FF497550]">
                        <CalendarIcon :fontControlled="false" class="w-[18px] h-[20px]" />
                        <span class="font-bold leading-[18px]">
                            December 14th - 11:00 AM (GMT-3)
                        </span>
                    </div>
                    <div class="flex flex-col gap-5 py-[35px] px-4 xl:px-[35px]">
                        <div class="flex items-center gap-[35px] text-dusk-blue group-hover:text-white text-sm">
                            <span class="flex gap-3 items-center">
                                <VideoIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>LIVE Training</span>
                            </span>
                            <span class="flex gap-3 items-center">
                                <ClockIcon :fontControlled="false" class="w-[20px] h-[20px]" />
                                <span>15 hours</span>
                            </span>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h3 class="font-medium text-silver text-2xl leading-[28px]">Vue.js Fundamentals</h3>
                            <p class="text-dusk-blue group-hover:text-white text-sm leading-5">
                                A progressive framework for building user interfaces. 
                                Unlike other monolithic frameworks, 
                                Vue is designed from the ground up to be incrementally...
                            </p>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full overflow-hidden">
                                    <NuxtImg src="/images/speaker.png" alt="Steve Popoola" />
                                </span>
                                <span class="text-sm text-dusk-blue group-hover:text-white">
                                    Steve Popoola
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button class="btn btn--fill xl:hidden w-[247px] mx-auto mt-[40px] sm:mt-[65px]">See all the workshops</button>
        </section>
    </main>
</template>

<style lang="postcss">
    .page {
        @apply flex flex-col relative;
        & > *:not(.waves):not(.breakers) {
            @apply relative z-[5];
        }
    }
    .licenses-slider {
        @apply appearance-none bg-primary h-[4px] w-full rounded-full outline-none;
        &::-webkit-slider-thumb {
            @apply appearance-none w-[14px] h-[14px] bg-primary rounded-full cursor-pointer;
        }
    }
    .bundle {
        @apply relative flex h-max flex-col gap-8 rounded-[30px] px-6 py-10 border border-solid border-transparent;
        background: linear-gradient(to bottom, #FFFFFF33, #FFFFFF00) padding-box,
              linear-gradient(to bottom, #FFFFFF33, #FFFFFF00) border-box;;
        &::after {
            @apply absolute inset-0 rounded-[30px] z-[0] bg-midnight-haze bg-opacity-90 content-[''];
        }
        & > * {
            @apply relative z-[1];
        }
    }
    .waves {
        @apply w-full absolute h-[918px] 2xl:h-[1100px] left-0 top-[748px] sm:top-[1030px] lg:top-[930px] xl:top-[540px] 2xl:top-[580px] z-[1] opacity-50;
        background: url('~/assets/img/mobile-wave-1.svg') no-repeat, url('~/assets/img/mobile-wave-2.svg') no-repeat;
        background-position: top left, top 36px left;
        background-size: 100%;
        @media screen(sm) {
            background: url('~/assets/img/tablet-wave-1.svg') no-repeat, url('~/assets/img/tablet-wave-2.svg') no-repeat;
            background-position: top left, top 36px left;          
        }
        @media screen(lg) {
            background-size: 100%;
        }
        @media screen(xl) {
            background: url('~/assets/img/wave-1.svg') no-repeat, url('~/assets/img/wave-2.svg') no-repeat;
            background-position: top left, top left;
            background-size: 100%;
        }
    }
    .breakers {
        @apply w-full absolute h-[1000px] 2xl:h-[1250px] left-0 top-[2045px] sm:top-[2420px] lg:top-[2280px] xl:top-[1580px] 2xl:top-[1620px] z-[1] opacity-80;
        background: url('~/assets/img/mobile-breaker-1.svg') no-repeat, url('~/assets/img/mobile-breaker-2.svg') no-repeat;
        background-position: top left, top 370px left;
        background-size: 100%;
        @media screen(sm) {
            background: url('~/assets/img/tablet-breaker-1.svg') no-repeat, url('~/assets/img/tablet-breaker-2.svg') no-repeat;
            background-position: top left, top 370px left;          
        }
        @media screen(xl) {
            background: url('~/assets/img/breaker-1.svg') no-repeat, url('~/assets/img/breaker-2.svg') no-repeat;
            background-position: top left, top 345px left;
            background-size: 100%;
        }
    }
</style>