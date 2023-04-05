<template>
  <header class="bg-white">
<nav class="flex h-42 items-center justify-between px-5 bg-blue" aria-label="Global">

  
      <div class="flex align-sub">
        <a href="/">
         <logo-perrito />
         <h1 class="text-5xl inter font-extralight">Perrito</h1>
        </a>
      </div>



      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <!-- <span class="sr-only">Open main menu</span> -->
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <shield-vector/>
            <guardians-btn/>
          </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <house-vector/>
              <home-btn/>
            </div>
              <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <login-vector/>
                <login-btn />
              </div>

</nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div>
                <guardians-btn/>
                <home-btn/>
              </div>
            </div>
            <div class="py-6">
              <login-btn />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>

import LogoPerrito from '@/assets/LogoPerrito.vue'
import HomeBtn from '@/components/HomeBtn.vue'
import LoginBtn from '@/components/LoginBtn.vue'
import GuardiansBtn from '@/components/GuardiansBtn.vue'
import LoginVector from '@/assets/LoginVector.vue'
import HouseVector from '@/assets/HouseVector.vue'
import ShieldVector from '@/assets/ShieldVector.vue'



import { ref } from 'vue'

import {
  Dialog,
  DialogPanel,
} from '@headlessui/vue'

import {
  Bars3Icon,
  XMarkIcon


} from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)
</script>