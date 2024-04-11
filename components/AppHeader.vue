<script setup lang="ts">
import HamburgerIcon from '~/assets/icons/hamburger.svg'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg'
import { MENU_ITEMS } from '~/data/constants';

</script>

<template>
    <header class="flex items-center justify-between h-[96px] sm:h-[99px] px-6 sm:px-12">
        <div class="flex gap-6 items-center">
            <button class="lg:hidden w-[26px] h-[24px] text-white">
                <HamburgerIcon :fontControlled="false" />
            </button>
            <img class="w-[170px]" src="~/assets/img/logo.png" alt="Vue School Logo">
        </div>
        <div class="menu">
            <template v-for="item in MENU_ITEMS" :key="item.title">
                <a :class="['menu__item', {'menu__item--dropdown': Boolean(item.children)}]" :href="item.link">
                    {{ item.title }}
                    <template v-if="item.children">
                        <ChevronDownIcon  class="w-[10px] h-[10px]" :fontControlled="false" />
    
                        <div class="dropdown">
                            <template v-for="child in item.children" :key="child.title">
                                <a class="" :href="child.link">
                                    {{ child.title }}
                                </a>
                            </template>
                        </div>
                    </template>
                </a>
            </template>
        </div>
        <div class="hidden sm:flex items-center gap-[30px]">
            <a class="text-white leading-[18px]" href="#">Log in</a>
            <button class="btn btn--outline w-[140px]">
                <span>
                    Sign up
                </span>
            </button>
        </div>
    </header>
</template>

<style lang="postcss">
    .menu {
        @apply hidden lg:flex gap-5;
        &__item {
            @apply text-silver flex items-center lg:gap-1 xl:gap-2 lg:text-sm xl:text-base;
            &--dropdown {
                @apply relative;
                &:hover {
                    .dropdown {
                        @apply flex;
                        animation: fadeInDown 0.5s ease forwards;
                    }
                }
            }
            .dropdown {
                @apply hidden flex-col gap-1 absolute top-[100%] left-0 bg-midnight-haze p-4 shadow-lg rounded-lg min-w-[220px];
                a {
                    @apply text-silver flex py-2;
                    &:hover {
                        @apply opacity-60;
                    }
                }
            }
        }
    }

    @keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>