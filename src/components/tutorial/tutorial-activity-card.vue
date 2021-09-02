<template>
    <br>
    <div class="flex flex-col-reverse lg:flex-row w-full bg-white shadow rounded">
        <div class="w-full lg:w-1/2">
            <div class="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
                <div class="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
                    <h4 class="text-base text-blue-700 tracking-normal leading-4">
                        {{time}}
                    </h4>
                    <h4 class="lg:mt-3 lg:text-gray-600 text-blue-700 text-base font-normal">
                        {{date}}
                    </h4>
                </div>
                <h2 class="text-gray-800 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
                    {{title}}
                </h2>
                <p class="mb-6 font-normal text-gray-600 text-sm tracking-normal w-11/12 lg:w-9/12">
                    {{describe}}
                </p>
                <div class="flex lg:items-center items-start flex-col lg:flex-row">
                    <div class="flex items-center">
                        <div v-for="image in avatar" class="-ml-2 border-2 border-white shadow rounded-full w-6 h-6">
                            <img class="w-full h-full overflow-hidden object-cover rounded-full"
                                 :src=image
                                 alt="avatar" />
                        </div>
                        <p class="text-gray-600 text-xs font-normal ml-1">
                            {{attendees}}人报名
                        </p>
                    </div>
                    <div class="mt-4 lg:mt-0 ml-0 lg:ml-12 flex items-end">
                  <span class="mr-1 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20"
                         height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="11" r="3" />
                      <path
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                        <p class="text-gray-600 text-sm tracking-normal font-normal text-center">
                            {{location}}
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="type === 'student'" class="px-5 lg:px-5 md:px-10 py-3 lg:py-4 md:flex flex-row items-center justify-between border-t border-gray-300">
                <div class="flex items-center md:mb-0 mb-4">
                    <div class="flex items-center">
                        <div
                                class="bg-white border 2 border-black rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input checked type="radio" name="radio"
                                   class="checkbox appearance-none focus:outline-none border-none rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                            <div class="check-icon hidden bg-black rounded-full w-3 h-3 z-1"></div>
                        </div>
                        <p class="ml-3 text-base leading-4 font-normal text-gray-800">
                            Going
                        </p>
                    </div>
                    <div class="flex items-center ml-6">
                        <div
                                class="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative border-black border">
                            <input type="radio" name="radio"
                                   class="checkbox appearance-none focus:outline-none rounded-full absolute cursor-pointer w-full h-full checked:border-none" />
                            <div class="check-icon hidden bg-black rounded-full w-3 h-3 z-1"></div>
                        </div>
                        <p class="ml-3 text-base leading-4 font-normal text-gray-800">
                            Not Going
                        </p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="text-gray-600 hover:text-gray-700 cursor-pointer mr-4">
                        <svg class="feather feather-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <div class="text-blue-700 hover:text-blue-600 cursor-pointer">
                        <svg class="feather feather-share-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                             stroke-linejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
            <img class="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
                 :src=wallpaper alt="banner" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "tutorial-card",
        props: {
            time: String,
            date: String,
            title: String,
            describe: String,
            attendees: Number,
            location: String,
            wallpaper: String,
            avatar: Array,
            type: String
        }
    }
</script>

<style scoped>

</style>
