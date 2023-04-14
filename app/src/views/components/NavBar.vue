<template>
  <header>
    <nav class="flex justify-between px-5 bg-blue">
      <div> 
        <a class="flex items-end" href="/">
          <img src="@/themes/LogoPerrito.svg" alt="" class="w-24 h-24">      
          <h1 class="text-5xl inter font-extralight mb-[0.460rem]">
            Perrito
          </h1> 
        </a>               
      </div>
      <div class="flex">
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="items-center hidden lg:flex lg:flex-1 lg:justify-end">
          <svg class="fill-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" :width="widthAttr" :height="heightAttr" viewBox="0 0 18 22" fill="none" overflow="visible">
            <path d="M18 9.7C18 15.0835 14.16 20.1178 9 21.34C3.84 20.1178 0 15.0835 0 9.7V3.88L9 0L18 3.88V9.7ZM9 19.4C12.75 18.43 16 14.1038 16 9.9134V5.141L9 2.1146L2 5.141V9.9134C2 14.1038 5.25 18.43 9 19.4ZM7 15.52L3 11.64L4.41 10.2723L7 12.7749L13.59 6.3826L15 7.76" class="fill-current-color" />
          </svg>
          <a href="/guardians">
            <button class="inter ml-2">
              Strážcovia
            </button>
          </a>
        </div>
        <div class="items-center ml-14 hidden lg:flex lg:flex-1 lg:justify-end">
          <svg class="fill-black w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" overflow="visible">
            <g>
              <path d="M24.3462 12.4877L13.5129 1.65435C13.3776 1.51984 13.1945 1.44434 13.0037 1.44434C12.8129 1.44434 12.6299 1.51984 12.4945 1.65435L1.66121 12.4877C1.54289 12.6258 1.48107 12.8036 1.48809 12.9853C1.49511 13.1671 1.57046 13.3395 1.69908 13.4682C1.82771 13.5968 2.00013 13.6721 2.1819 13.6791C2.36366 13.6862 2.54138 13.6243 2.67955 13.506L13.0001 3.18546L23.3207 13.5132C23.4588 13.6316 23.6365 13.6934 23.8183 13.6864C24.0001 13.6793 24.1725 13.604 24.3011 13.4754C24.4297 13.3467 24.5051 13.1743 24.5121 12.9926C24.5191 12.8108 24.4573 12.6331 24.339 12.4949L24.3462 12.4877Z" class="fill-current-color" />
              <path d="M20.2221 23.1116H16.611V15.8894H9.38881V23.1116H5.7777V13.0005L4.33325 14.4449V23.1116C4.33325 23.4947 4.48543 23.8621 4.75632 24.133C5.02721 24.4039 5.39461 24.556 5.7777 24.556H10.8333V17.3338H15.1666V24.556H20.2221C20.6052 24.556 20.9726 24.4039 21.2435 24.133C21.5144 23.8621 21.6666 23.4947 21.6666 23.1116V14.2716L20.2221 12.8271V23.1116Z" class="fill-current-color" />
            </g>
          </svg>
          <a href="/">
            <button class="inter ml-2">
              Domov
            </button>
          </a>
        </div>
        <div class="items-center ml-14 hidden lg:flex lg:flex-1 lg:justify-end">
          <svg class="stroke-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" fill="none" overflow="visible">
            <path d="M11 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M15 16L17 18L21 14M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current-color" />
          </svg>
          <a href="/login">
            <button class="inter ml-2">
              Prihlásenie
            </button>
          </a>
        </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10">
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-10\12 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">
                Close menu
              </span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <div>
                  <div class="flex justify-center">
                    <img src="@/themes/LogoPerrito.svg" alt="" class="w-16 h-16">
                  </div>
                  <div class="flex justify-center text-xl">
                    <h1>P E R R I T O</h1>
                  </div>
                  <div class="flex justify-center">
                    <div>
                      <hr class="w-56 h-px my-7 bg-black border-0 dark:bg-gray-700 inter mb-14">
                    </div>
                  </div>
                  <div class="grid justify-items-center text-xl font-normal">
                    <a href="/guardians">
                      <button class="inter mb-10">
                        Strážcovia
                      </button>
                    </a>
                    <a href="/">
                      <button class="inter mb-10">
                        Domov
                      </button>
                    </a>
                    <a href="/login">
                      <button class="inter">
                        Prihlásenie
                      </button>
                    </a>
                  </div>
                  <div class="flex justify-center">
                    <div>
                      <hr class="w-56 h-px my-7 bg-black border-0 dark:bg-gray-700 inter mt-14">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </header>
</template>

<script setup>

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

<style>

</style>