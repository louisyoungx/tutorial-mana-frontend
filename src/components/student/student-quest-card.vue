<template>
    <div class="relative bg-gray-100 flex rounded mx-4 lg:mx-8 mb-4">
        <div
                class="border-r border-gray-200 flex items-center justify-center"
        >
            <div class="w-20 h-20 px-4 py-5">
                <img
                        class="w-full h-full overflow-hidden object-cover rounded"
                        :src=avatar
                        alt="master-card"
                />
            </div>
        </div>
        <div class="flex pl-4 py-4 lg:py-3 justify-between w-full">
            <div class="flex flex-col h-full justify-center">
                <h4 class="mb-2 lg:mb-1 text-sm leading-3 font-bold text-gray-800">
                    {{uid}} - {{name}}
                </h4>
                <div class="flex flex-col lg:flex-row items-start lg:items-center">
                    <p class="text-xs leading-5 font-normal text-gray-800">
                        手机: {{tel}}
                    </p>
                </div>
                <div class="flex flex-col lg:flex-row items-start lg:items-center">
                    <p class="text-xs leading-5 font-normal text-gray-800">
                        邮箱: {{email}}
                    </p>
                </div>
                <div class="flex flex-col lg:flex-row items-start lg:items-center">
                    <p class="text-xs leading-5 font-normal text-gray-800">
                        期望时间-{{expectTime}}
                    </p>
                </div>
            </div>
        </div>
        <div
                class="w-5 h-5 absolute inset-0 m-auto mt-3 lg:mt-4 mr-2 lg:mr-4 text-gray-600 hover:text-indigo-600 cursor-pointer"
        >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                        d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "student-quest-card",
        props: {
            uid: String,
            name: String,
            tel: String,
            email: String,
            expectTime: String,
            avatar: String
        }
    }
</script>

<style scoped>

</style>
