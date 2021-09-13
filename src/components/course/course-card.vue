<template>
    <a href="">
        <div class="shadow px-4 py-5 md:max-w-sm md:mr-5 mb-6  ">
            <h5 class="mb-2 text-sm text-gray-600">
                {{academy}}
            </h5>
            <h3 class="font-medium text-gray-900 mb-3">
                {{name}}
            </h3>
            <p class="text-gray-600 text-sm">
                {{describe}}
            </p>
            <ul class="mt-5">
                <li class="text-gray-600 flex items-center text-xs mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                         height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                    </svg>
                    <span class="mx-2">|</span>
                    <p>{{term}}</p>
                </li>
<!--                <li class="text-gray-600 flex items-center text-xs mb-4">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"-->
<!--                         width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"-->
<!--                         stroke-linecap="round" stroke-linejoin="round">-->
<!--                        <path stroke="none" d="M0 0h24v24H0z" />-->
<!--                        <path d="M16 5v4a1 1 0 0 0 1 1h4" />-->
<!--                        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />-->
<!--                    </svg>-->
<!--                    <span class="mx-2">|</span>-->
<!--                    <p>3 modules</p>-->
<!--                </li>-->
                <li class="text-gray-600 flex items-center text-xs mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                         height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <rect x="8" y="15" width="2" height="2" />
                    </svg>
                    <span class="mx-2">|</span>
                    <p>{{limit}}人</p>
                </li>
            </ul>
            <div class="mt-10 flex items-center">
                <div class="h-8 w-8">
                    <img :src=avatar alt=""
                         class="h-full w-full rounded-full overflow-hidden shadow" />
                </div>
                <div class="ml-2">
                    <h5 class="text-xs text-gray-800">{{teacher}}</h5>
                    <p class="text-xs text-gray-600">手机: {{phone}}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "course-card",
        props: {
            academy: String,
            name: String,
            describe: String,
            term: String,
            limit: Number,
            teacher: String,
            phone: String,
            avatar: String
        }
    }
</script>

<style scoped>

</style>
