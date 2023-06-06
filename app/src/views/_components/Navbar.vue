<template>
  <header>
    <nav class="flex justify-between px-5 bg-blue">
      <div> 
        <a class="flex items-end" @click="$router.push('/')">
          <img src="@/views/_components/_assets/LogoPerrito.svg" alt="" class="w-24 h-24">      
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
          <svg class="fill-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" fill="none" overflow="visible">
            <path d="M18 9.7C18 15.0835 14.16 20.1178 9 21.34C3.84 20.1178 0 15.0835 0 9.7V3.88L9 0L18 3.88V9.7ZM9 19.4C12.75 18.43 16 14.1038 16 9.9134V5.141L9 2.1146L2 5.141V9.9134C2 14.1038 5.25 18.43 9 19.4ZM7 15.52L3 11.64L4.41 10.2723L7 12.7749L13.59 6.3826L15 7.76" class="fill-current-color" />
          </svg>
          <a @click="$router.push('/guardians')">
            <button class="inter ml-2">
              Strážcovia
            </button>
          </a>
        </div>
        <div class="items-center ml-14 hidden lg:flex lg:flex-1 lg:justify-end">
          <svg class="fill-black w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1280.000000pt" height="1232.000000pt" viewBox="0 0 1280.000000 1232.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1232.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M8443 12301 c-725 -171 -1292 -772 -1566 -1661 -128 -415 -184 -930 -142 -1305 82 -741 432 -1322 951 -1583 294 -148 585 -173 859 -76 192 68 451 220 620 364 449 381 769 968 889 1630 41 227 51 342 50 595 0 484 -68 837 -219 1150 -230 476 -594 788 -1027 881 -119 25 -317 27 -415 5z"/>
            <path d="M3820 12255 c-401 -70 -779 -386 -1004 -839 -123 -247 -181 -484 -207 -847 -12 -159 -6 -414 12 -574 103 -908 527 -1673 1166 -2101 128 -86 340 -191 484 -239 102 -34 128 -38 241 -43 150 -6 257 8 388 50 203 65 369 167 525 323 309 309 501 775 546 1323 18 226 -2 562 -51 825 -196 1067 -809 1857 -1621 2091 -162 46 -328 57 -479 31z"/>
            <path d="M11403 8606 c-669 -110 -1251 -571 -1614 -1280 -167 -327 -251 -593 -316 -1007 -23 -148 -27 -204 -27 -374 0 -208 12 -311 55 -479 115 -451 386 -818 723 -981 184 -89 352 -122 541 -105 459 40 868 247 1232 623 401 415 677 989 767 1592 23 150 39 446 32 567 -37 622 -371 1169 -836 1369 -180 77 -378 104 -557 75z"/>
            <path d="M1051 8344 c-435 -73 -801 -377 -936 -779 -48 -142 -88 -345 -105 -530 -62 -671 174 -1429 618 -1985 332 -415 760 -702 1239 -831 403 -108 765 -6 1072 301 274 274 411 674 411 1201 0 205 -10 317 -46 507 -122 652 -492 1276 -999 1685 -233 188 -547 361 -745 410 -156 39 -353 47 -509 21z"/>
            <path d="M6240 5905 c-348 -39 -692 -132 -1031 -281 -518 -229 -1018 -610 -1341 -1024 -697 -894 -1181 -1862 -1378 -2755 -12 -55 -33 -138 -46 -185 -67 -243 -56 -519 31 -760 140 -388 443 -689 818 -815 224 -75 559 -74 932 4 243 50 425 108 941 299 718 267 917 318 1400 363 216 20 255 21 404 10 381 -27 682 -110 1260 -346 512 -209 798 -322 870 -342 720 -204 1435 47 1680 590 107 239 119 628 29 997 -88 359 -349 942 -599 1335 -705 1110 -1208 1727 -1790 2197 -547 441 -1006 650 -1571 713 -159 18 -447 18 -609 0z"/>
            </g>
          </svg>
          <a @click="$router.push('/animals')">
            <button class="inter ml-2">
              Zvieratká
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
          <a @click="$router.push('/')">
            <button class="inter ml-2">
              Domov
            </button>
          </a>
        </div>
        <div class="items-center ml-14 hidden lg:flex lg:flex-1 lg:justify-end">
          <svg class="stroke-black w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" fill="none" overflow="visible">
            <path d="M11 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M15 16L17 18L21 14M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current-color" />
          </svg>
          <a v-if="!isLoggedIn" @click="$router.push('/login')">
            <button class="inter ml-2">
              Prihlásenie
            </button>
          </a>
          <a v-else @click="logout()">
            <button class="inter ml-2">
              Odhlásenie
            </button>
          </a>
        </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden " @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10">
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-10\12 overflow-y-auto bg-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    <img src="@/views/_components/_assets/LogoPerrito.svg" alt="" class="w-16 h-16">
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
                    <a @click="$router.push('/guardians')">
                      <button class="inter mb-10">
                        Strážcovia
                      </button>
                    </a>
                    <a @click="$router.push('/animals')">
                      <button class="inter mb-10">
                        Zvieratká
                      </button>
                    </a>
                    <a @click="$router.push('/')">
                      <button class="inter mb-10">
                        Domov
                      </button>
                    </a>
                    <a v-if="!isLoggedIn" @click="$router.push('/login')">
                      <button class="inter">
                        Prihlásenie
                      </button>
                    </a>
                    <a v-else @click="logout()">
                      <button class="inter ml-2">
                        Odhlásenie
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

<script>

import { mapGetters } from 'vuex'
import store from '@/store.js'

import {
  Dialog,
  DialogPanel,
} from '@headlessui/vue'

import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

export default {
  components: {
    Dialog, DialogPanel, Bars3Icon, XMarkIcon
  },
  data(){
    return {
      mobileMenuOpen: false
    }
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },

  methods: {
    logout() {
      store.dispatch('logout')
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>