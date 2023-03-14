<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';
import { toggle } from '../utils/toggleTheme';
import Logo from './icons/logo.vue';
import Twitter from './icons/twitter.vue';

const { y } = useWindowScroll()
const bgStyle = computed(() => {
  if (y.value >= 40) {
    return "dark:bg-black/80 dark:drop-shadow-xl"
  }
  return 'dark:bg-black'
})

</script>

<template>
  <div class="fixed w-full z-[9999] dark:bg-transparent top-0 h-[80px]">
    <div :class="bgStyle"
      class="z-40 w-full backdrop-blur flex-none transition-colors duration-200 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.1] bg-white/40 supports-backdrop-blur:bg-white/60 backdrop-saturate-[180%] drop-shadow-xl ">
      <nav class="flex h-[80px]  max-w-7xl m-auto justify-between items-center xl:px-0 px-6">

        <!-- {/* logo start */} -->
        <div class="grid items-center grid-cols-2">
          <a href="#">
            <Logo />
          </a>
          <a href="#" class="hidden md:block text-black text-2xl font-semibold drop-shadow-2xl dark:text-white">
            Twitter
          </a>
        </div>
        <!-- {/* logo end */} -->

        <!-- {/* links satrt*/} -->
        <div class="hidden text-black text-xl font-bold drop-shadow-2xl md:grid grid-cols-4 gap-4 dark:text-white">
          <a href="#">Discord</a>
          <a href="#">VSCode</a>
          <a href="#">Terminal</a>
          <a href="#">Archlinux</a>
        </div>
        <!-- {/* links end*/} -->

        <!-- {/* login satrt */} -->
        <div class="hidden cursor-pointer text-black text-xl font-bold drop-shadow-2xl md:grid grid-cols-2 gap-4">
          <a
            class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 outline-blue-400">
            <Twitter />
            Sign in
          </a>
          <a
            class="cursor-pointer hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white  dark:focus:ring-gray-800">
            Sign up
          </a>
        </div>
        <!-- {/* login end */} -->

        <!-- mobile menu start-->
        <div class="block text-black text-xl font-bold drop-shadow-2xl md:hidden grid-cols-4 gap-4 dark:text-white">
          <a href="#">Twitter</a>
        </div>

        <div class="md:hidden grid grid-cols-2 gap-5 cursor-pointer">
          <span @click="toggle"
            class="hover:text-gray-800 dark:text-gray-500 w-[35px] h-[35px] hover:ring hover:ring-indigo-900/5 text-gray-500 inline-flex items-center justify-center  transition duration-150 ease-in-out bg-gray-100/40 border border-transparent rounded-md dark:bg-transparent dark:hover:bg-gray-800 dark:hover:ring dark:hover:ring-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <span
            class="hover:text-gray-800 dark:text-gray-500 w-[35px] h-[35px] hover:ring hover:ring-indigo-900/5 text-gray-500 inline-flex items-center justify-center  transition duration-150 ease-in-out bg-gray-100/40 border border-transparent rounded-md dark:bg-transparent dark:hover:bg-gray-800 dark:hover:ring dark:hover:ring-gray-700">
            <svg class=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
        </div>
        <!-- mobile menu end-->
      </nav>
    </div>
  </div>
</template>


<style scoped></style>


