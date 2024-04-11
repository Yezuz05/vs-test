<script setup lang="ts">
    import { FOOTER_ITEMS } from '~/data/constants';
    import FacebookIcon from '~/assets/icons/facebook.svg'
    import LinkedInIcon from '~/assets/icons/linkedin.svg'
    import GithubIcon from '~/assets/icons/github.svg'
    import TwitterIcon from '~/assets/icons/twitter.svg'
    import YoutubeIcon from '~/assets/icons/youtube.svg'

</script>

<template>
    <footer class="container flex gap-12 sm:gap-16 lg:gap-[130px] flex-col lg:flex-row px-[15px] sm:px-10 pt-[50px] sm:pt-[70px] pb-[131px] sm:pb-[140px]">
        <div class="flex flex-col gap-8 sm:gap-10 lg:w-2/5 flex-shrink-0">
            <a class="mx-auto lg:ml-0" href="#" title="Vue School">
                <img class="w-[268px]" src="~/assets/img/logo.png" alt="Vue School Logo">
            </a>
            <p class="text-center lg:text-start text-white leading-6">
                Thanks to fine people like you, Vue School can proudly sponsor Evan and the future of Vue.js by being a Platinum Patreon
            </p>
            <div class="flex flex-col gap-y-8 lg:gap-y-[50px] sm:gap-x-[22px] items-center lg:items-start">
                <h4 class="footer-title">FOLLOW US ON SOCIAL MEDIA</h4>
                <div class="flex gap-3 justify-between sm:w-[468px] lg:w-full">
                    <a href="#" class="social-link">
                        <FacebookIcon :fontControlled="false" />
                    </a>
                    <a href="#" class="social-link">
                        <TwitterIcon :fontControlled="false" />
                    </a>
                    <a href="#" class="social-link">
                        <GithubIcon :fontControlled="false" />
                    </a>
                    <a href="#" class="social-link">
                        <LinkedInIcon :fontControlled="false" />
                    </a>
                    <a href="#" class="social-link">
                        <YoutubeIcon :fontControlled="false" />
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center sm:flex-row sm:justify-start sm:items-start flex-wrap gap-8 sm:gap-x-[22px] sm:gap-y-[32px] lg:gap-x-[30px] lg:gap-y-[50px]">
            <template v-for="item in FOOTER_ITEMS" :key="item.title">
                <div class="flex flex-col gap-5 justify-center sm:justify-start sm:w-[210px] xl:w-[270px]">
                    <h4 class="footer-title">{{item.title}}</h4>
                    <div class="flex flex-col gap-[14px]">
                        <template v-for="linkItem in item.links" :key="item.title">
                            <a :href="linkItem.link" class="text-white w-max mx-auto sm:mr-auto sm:ml-0 text-center sm:text-start hover:opacity-50 leading-6">
                                {{ linkItem.title }}
                            </a>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </footer>
</template>

<style lang="postcss">
.footer-title {
    @apply text-center sm:text-start text-dusk-blue text-[22px] font-medium uppercase;
}
.social-link {
    @apply w-[60px] h-[60px] bg-midnight-haze text-foggy-dawn rounded-full flex items-center justify-center;
    svg {
        @apply w-[28px] h-[28px];
    }
}
</style>