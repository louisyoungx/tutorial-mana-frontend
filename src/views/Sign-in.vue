<template>
<div class="bg-gray-100">
    <modals :title="modals.title" :open="modals.open" :remind="modals.remind" :confirm="modals.confirm" :cancel="modals.cancel" />
    <section class="bg-white h-screen">
        <div class="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 px-2 py-20 sm:py-40 sm:px-12 flex flex-col justify-center items-center bg-blue-600 relative">
                <div class="absolute left-0 top-0 pl-3 pt-3">
                    <svg width="130" height="462" xmlns="http://www.w3.org/2000/svg">
                        <g transform="rotate(-180 65 231)" fill="#7F9CF5" fill-rule="evenodd">
                            <rect class="hidden sm:block" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="24.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="48.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="48.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="48.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="48.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="48.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="72.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="72.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="72.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="72.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="72.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="96.059" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="96.059" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="96.059" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="96.059" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="96.059" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="120.073" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="120.073" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="120.073" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="120.073" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="120.073" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="144.088" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="144.088" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="144.088" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="144.088" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="144.088" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="168.103" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="168.103" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="168.103" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="168.103" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="168.103" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="192.117" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="216" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="216" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="216" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="216" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="216" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="240.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="240.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="240.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="240.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="240.015" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="264.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="264.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="264.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="264.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="264.029" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" y="288.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="31.002" y="288.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="62.003" y="288.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="93.005" y="288.044" width="6.002" height="6.005" rx="3.001" />
                            <rect class="hidden sm:block" x="124.007" y="288.044" width="6.002" height="6.005" rx="3.001" />
                            <rect y="312.059" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="312.059" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="312.059" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="312.059" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="312.059" width="6.002" height="6.005" rx="3.001" />
                            <rect y="336.073" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="336.073" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="336.073" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="336.073" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="336.073" width="6.002" height="6.005" rx="3.001" />
                            <rect y="360.088" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="360.088" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="360.088" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="360.088" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="360.088" width="6.002" height="6.005" rx="3.001" />
                            <rect y="384.103" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="384.103" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="384.103" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="384.103" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="384.103" width="6.002" height="6.005" rx="3.001" />
                            <rect y="408.117" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="408.117" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="408.117" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="408.117" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="408.117" width="6.002" height="6.005" rx="3.001" />
                            <rect y="432" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="432" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="432" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="432" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="432" width="6.002" height="6.005" rx="3.001" />
                            <rect y="456.015" width="6.002" height="6.005" rx="3.001" />
                            <rect x="31.002" y="456.015" width="6.002" height="6.005" rx="3.001" />
                            <rect x="62.003" y="456.015" width="6.002" height="6.005" rx="3.001" />
                            <rect x="93.005" y="456.015" width="6.002" height="6.005" rx="3.001" />
                            <rect x="124.007" y="456.015" width="6.002" height="6.005" rx="3.001" />
                        </g>
                    </svg>
                </div>
                <div class="flex-center flex relative z-30 flex-col justify-center justify-items-center px-4 md:pr-12">
                    <img class="w-2/5 shadow-xl" src="../assets/logo.gif"/>
                    <h1 class="pt-5 text-5xl sm:text-6xl md:text-5xl text-gray-50 text-opacity-90 font-bold text-center leading-tight">课业帮扶系统</h1>
                </div>
                <div class="absolute right-0 bottom-0">
                    <svg width="236px" height="234px" viewBox="0 0 236 234" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <polygon id="path-1" points="0 4.54747351e-13 236 4.54747351e-13 236 234 0 234"></polygon>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Sign-In-5" transform="translate(-487.000000, -790.000000)">
                                <g id="Group-464" transform="translate(605.000000, 907.000000) rotate(-180.000000) translate(-605.000000, -907.000000) translate(487.000000, 790.000000)">
                                    <mask id="mask-2" fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-450"></g>
                                    <path d="M1,234 C-128.785798,234 -234,128.785798 -234,-1 C-234,-130.785798 -128.785798,-236 1,-236 C130.788182,-236 236,-130.785798 236,-1 C236,128.785798 130.788182,234 1,234 Z" id="Stroke-449" stroke="#7F9CF5" stroke-width="0.704" mask="url(#mask-2)"></path>
                                    <path d="M-0.5,217 C-120.620637,217 -218,119.175305 -218,-1.5 C-218,-122.175305 -120.620637,-220 -0.5,-220 C119.623015,-220 217,-122.175305 217,-1.5 C217,119.175305 119.623015,217 -0.5,217 Z" id="Stroke-451" stroke="#7F9CF5" stroke-width="0.688" mask="url(#mask-2)"></path>
                                    <path d="M0.998808246,199 C-110.010672,199 -200,109.010672 -200,-1.99880825 C-200,-113.008289 -110.010672,-203 0.998808246,-203 C112.008289,-203 202,-113.008289 202,-1.99880825 C202,109.010672 112.008289,199 0.998808246,199 Z" id="Stroke-452" stroke="#7F9CF5" stroke-width="0.672" mask="url(#mask-2)"></path>
                                    <path d="M0.5,182 C-100.843661,182 -183,99.3959421 -183,-2.5 C-183,-104.395942 -100.843661,-187 0.5,-187 C101.843661,-187 184,-104.395942 184,-2.5 C184,99.3959421 101.843661,182 0.5,182 Z" id="Stroke-453" stroke="#7F9CF5" stroke-width="0.657" mask="url(#mask-2)"></path>
                                    <path d="M1,166 C-91.2307802,166 -166,91.2307802 -166,-1 C-166,-93.2307802 -91.2307802,-168 1,-168 C93.2331631,-168 168,-93.2307802 168,-1 C168,91.2307802 93.2331631,166 1,166 Z" id="Stroke-454" stroke="#7F9CF5" stroke-width="0.641" mask="url(#mask-2)"></path>
                                    <path d="M1.49881277,149 C-81.0661515,149 -148,81.6208238 -148,-1.49880483 C-148,-84.6184335 -81.0661515,-152 1.49881277,-152 C84.0661515,-152 151,-84.6184335 151,-1.49880483 C151,81.6208238 84.0661515,149 1.49881277,149 Z" id="Stroke-455" stroke="#7F9CF5" stroke-width="0.625" mask="url(#mask-2)"></path>
                                    <path d="M1,131 C-72.4538047,131 -132,71.4538047 -132,-2 C-132,-75.4538047 -72.4538047,-135 1,-135 C74.4538047,-135 134,-75.4538047 134,-2 C134,71.4538047 74.4538047,131 1,131 Z" id="Stroke-456" stroke="#7F9CF5" stroke-width="0.609" mask="url(#mask-2)"></path>
                                    <path d="M-0.5,115 C-64.840925,115 -117,62.840925 -117,-1.5 C-117,-65.840925 -64.840925,-118 -0.5,-118 C63.840925,-118 116,-65.840925 116,-1.5 C116,62.840925 63.840925,115 -0.5,115 Z" id="Stroke-457" stroke="#7F9CF5" stroke-width="0.593" mask="url(#mask-2)"></path>
                                    <path d="M0.99880991,98 C-53.6762956,98 -98,53.6762956 -98,-0.99880991 C-98,-55.6762956 -53.6762956,-100 0.99880991,-100 C55.6762956,-100 100,-55.6762956 100,-0.99880991 C100,53.6762956 55.6762956,98 0.99880991,98 Z" id="Stroke-458" stroke="#7F9CF5" stroke-width="0.578" mask="url(#mask-2)"></path>
                                    <path d="M0.5,82 C-45.061559,82 -82,45.0639523 -82,-0.5 C-82,-46.0639523 -45.061559,-83 0.5,-83 C46.0639523,-83 83,-46.0639523 83,-0.5 C83,45.0639523 46.0639523,82 0.5,82 Z" id="Stroke-459" stroke="#7F9CF5" stroke-width="0.562" mask="url(#mask-2)"></path>
                                    <path d="M1,63 C-34.898786,63 -64,33.898786 -64,-2 C-64,-37.898786 -34.898786,-67 1,-67 C36.898786,-67 66,-37.898786 66,-2 C66,33.898786 36.898786,63 1,63 Z" id="Stroke-460" stroke="#7F9CF5" stroke-width="0.546" mask="url(#mask-2)"></path>
                                    <path d="M1.49880102,46 C-25.2864453,46 -47,24.2864453 -47,-2.49880102 C-47,-29.2840474 -25.2864453,-51 1.49880102,-51 C28.2840474,-51 50,-29.2840474 50,-2.49880102 C50,24.2864453 28.2840474,46 1.49880102,46 Z" id="Stroke-461" stroke="#7F9CF5" stroke-width="0.53" mask="url(#mask-2)"></path>
                                    <path d="M1,30 C-16.1194383,30 -30,16.1194383 -30,-1 C-30,-18.1218042 -16.1194383,-32 1,-32 C18.1218042,-32 32,-18.1218042 32,-1 C32,16.1194383 18.1218042,30 1,30 Z" id="Stroke-462" stroke="#7F9CF5" stroke-width="0.514" mask="url(#mask-2)"></path>
                                    <path d="M1.5,13 C-6.50652174,13 -13,6.50894649 -13,-1.5 C-13,-9.50894649 -6.50652174,-16 1.5,-16 C9.50894649,-16 16,-9.50894649 16,-1.5 C16,6.50894649 9.50894649,13 1.5,13 Z" id="Stroke-463" stroke="#7F9CF5" stroke-width="0.498" mask="url(#mask-2)"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex justify-center bg-white transition-all">
                <div class="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 flex flex-col justify-center px-5 sm:px-10 py-16">
                    <div class="px-2 sm:px-6">
                        <h3 class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">选择您的身份</h3>
                    </div>
                    <div class="mt-8 w-full px-2 sm:px-6">

                        <Listbox as="div" v-model="selected">
                            <ListboxLabel class="sr-only">
                                Change published status
                            </ListboxLabel>
                            <div class="relative">
                                <div class="inline-flex shadow-sm rounded-md divide-x divide-blue-600">
                                    <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-blue-600">
                                        <div class="relative inline-flex items-center bg-blue-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            <p class="ml-2.5 text-sm font-medium">{{ selected.title }}</p>
                                        </div>
                                        <ListboxButton class="relative inline-flex items-center bg-blue-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500">
                                            <span class="sr-only">Change published status</span>
                                            <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
                                        </ListboxButton>
                                    </div>
                                </div>

                                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <ListboxOption as="template" v-for="option in publishingOptions" :key="option.title" :value="option" v-slot="{ active, selected }">
                                            <li @click="select()" :class="[active ? 'text-white bg-blue-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
                                                <div class="flex flex-col">
                                                    <div class="flex justify-between">
                                                        <p :class="selected ? 'font-semibold' : 'font-normal'">
                                                            {{ option.title }}
                                                        </p>
                                                        <span v-if="selected" :class="active ? 'text-white' : 'text-blue-500'">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                                                    </div>
                                                    <p :class="[active ? 'text-blue-200' : 'text-gray-500', 'mt-2']">
                                                        {{ option.description }}
                                                    </p>
                                                </div>
                                            </li>
                                        </ListboxOption>
                                    </ListboxOptions>
                                </transition>
                            </div>
                        </Listbox>

                        <div v-if="!showInput" class="">
                            <button @click="this.$router.push(`/sign-up`)" class="focus:outline-none w-full sm:w-auto bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-700 rounded text-white px-8 py-3 text-sm mt-6">注册</button>
                        </div>

                        <div v-if="showInput" class="flex flex-col mt-8">
                            <label for="uid" class="text-lg font-semibold leading-tight">{{inputTitle}}</label>
                            <input v-model="uid" id="uid" class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 border-gray-300 border shadow" type="text" />
                        </div>
                    </div>
                    <div v-if="showInput" class="px-2 sm:px-6">
                        <button @click="signIn()" class="focus:outline-none w-full sm:w-auto bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-700 rounded text-white px-8 py-3 text-sm mt-6">登陆</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
    import { ref } from 'vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
    import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
    import { ExclamationIcon } from '@heroicons/vue/outline'
    import Modals from "../components/overlays/modals";
    import Notifications from "../components/overlays/notifications";
    import api from '../http/index'
    import TeacherSidebar from "../components/sidebar/teacher-sidebar";

    const publishingOptions = [
        { title: '请选择', description: '选择您的身份', current: true },
        { title: '学生', description: '用学号登陆', current: false },
        { title: '老师', description: '用工号登陆', current: false },
    ]

    export default {
        components: {
            Listbox,
            ListboxButton,
            ListboxLabel,
            ListboxOption,
            ListboxOptions,
            CheckIcon,
            ChevronDownIcon,
            Notifications,
            Modals, TeacherSidebar,
            Dialog,
            DialogOverlay,
            DialogTitle,
            TransitionChild,
            TransitionRoot,
            ExclamationIcon,
        },
        data: function () {
            return {
                uid: '',
                inputTitle: '',
                showInput: false,
                modals: {
                    modals: '错误',
                    open: false,
                    remind: '',
                    confirm: '修改',
                    cancel: '取消'
                },
            }
        },
        setup() {
            const selected = ref(publishingOptions[0])
            const open = ref(true)
            return {
                publishingOptions,
                selected,
                open,
            }
        },
        created() {
            // this.signInHandler('123456', 'teacher')
            // this.signInHandler('18085132', 'student')
        },

        methods: {
            select() {
                setTimeout(() => {
                    // console.log(this.selected.title)
                    if (this.selected.title === '学生') {
                        this.inputTitle = '请输入学号：'
                        this.showInput = true
                    }
                    else if (this.selected.title === '老师') {
                        this.inputTitle = '请输入工号：'
                        this.showInput = true
                    } else {
                        this.inputTitle = ''
                        this.showInput = false
                    }
                }, 100)
            },

            signIn() {
                if (this.selected.title === '学生') {
                    this.signInHandler(this.uid, 'student')
                }
                else if (this.selected.title === '老师') {
                    this.signInHandler(this.uid, 'teacher')
                } else {
                    console.error("SELECT TYPE ERROR")
                    this.showError('选择身份不存在')
                }
            },

            signInHandler(uid, type) {
                return api.signIn(uid, type).then(res => {
                    if (res.length !== 0) {
                        console.log('Login success')
                        this.$store.commit('type', type)
                        this.$store.commit('init', res[0])
                        this.updateHandler(type)
                        this.$router.push(`/${type}/home-page`)
                    } else {
                        console.log('Login Failed')
                        this.showError('学号/工号错误 或 身份不匹配')
                        //this.updateHandler(type)
                    }
                })
            },

            showError(remind) {
                this.modals.remind = remind
                this.modals.open = false
                setTimeout(() => {
                    this.modals.open = true
                }, 0)
            },

            updateHandler(type) {
                let id = this.$store.state.id
                if (type === 'student') {
                    this.updateStudent(id)
                }
                else if (type === 'teacher') {
                    this.updateTeacher(id)
                }
            },

            updateStudent(id) {
                api.update(id, 'student').then(info => {
                    console.log(info)
                    this.$store.commit('joinedCourse', info[0])
                    this.$store.commit('joinedTutorial', info[1])
                    this.$store.commit('courseSelect', info[2])
                    this.$store.commit('tutorialSelect', info[3])
                    this.$store.dispatch('courseSelecting')
                    this.$store.dispatch('tutorialFormat')
                    this.$store.dispatch('tutorialSelecting')
                    console.log(this.$store.state)
                })
            },

            updateTeacher(id) {
                api.update(id, 'teacher').then(info => {
                    console.log(info)
                    this.$store.commit('course', info[0])
                    this.$store.commit('tutorial', info[1])
                    this.$store.dispatch('courseList')
                    this.$store.dispatch('tutorialActivity')
                    this.$store.dispatch('tutorialData')
                    this.$store.dispatch('tutorialCollect')
                    // console.log(this.$store.state)
                })
            },
            showState() {
                console.log(this.$store.state)
            }
        }
    }
</script>

<style scoped>
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
