<template>
    <!-- Card is full width. Use in 12 col grid for best view. -->
    <!-- Card code block start -->
    <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
        <div class="bg-white rounded shadow pl-6 px-2 py-6 flex items-center">
            <div class="p-4 divcolor rounded">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-discount"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#fff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="9" y1="15" x2="15" y2="9" />
                    <circle cx="9.5" cy="9.5" r=".5" />
                    <circle cx="14.5" cy="14.5" r=".5" />
                    <path
                            d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1"
                    />
                </svg>
            </div>
            <div class="ml-4">
                <h3 class="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                    {{activity}}
                </h3>
                <p
                        class="text-gray-600 text-sm tracking-normal font-normal leading-5"
                >
                    帮扶活动
                </p>
            </div>
        </div>
        <div class="bg-white rounded shadow pl-6 px-2 py-6 flex items-center">
            <div class="p-4 divcolor rounded text-white">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-click"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="3" y1="12" x2="6" y2="12" />
                    <line x1="12" y1="3" x2="12" y2="6" />
                    <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                    <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                    <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
            </div>
            <div class="ml-4">
                <h3 class="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                    {{single}}
                </h3>
                <p class="text-gray-600 text-sm tracking-normal font-normal leading-5">
                    单独帮扶
                </p>
            </div>
        </div>
        <div class="bg-white rounded shadow pl-6 px-2 py-6 flex items-center">
            <div class="p-4 divcolor rounded text-white">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-user"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                </svg>
            </div>
            <div class="ml-4">
                <h3 class="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                    {{total}}
                </h3>
                <p
                        class="text-gray-600 text-sm tracking-normal font-normal leading-5"
                >
                    帮扶人数
                </p>
            </div>
        </div>
        <div class="bg-white rounded shadow pl-6 px-2 py-6 flex items-center">
            <div class="p-4 divcolor rounded text-white">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-credit-card"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
            </div>
            <div class="ml-4">
                <h3 class="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                    {{course}}
                </h3>
                <p
                        class="text-gray-600 text-sm tracking-normal font-normal leading-5"
                >
                    课程数目
                </p>
            </div>
        </div>
    </div>
    <!-- Card code block end -->
</template>

<script>
    export default {
        name: "teacher-header",
        props: {
            activity: Number,
            single: Number,
            total: Number,
            course: Number
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    body {
        font-family: "Lato", sans-serif;
    }
    /* shows controls on hover */
    .controls {
        opacity: 0;
    }
    .trigger:hover .controls {
        opacity: 1;
    }
    .trigger:hover .overlay {
        --bg-opacity: 0.75;
    }
    /* Checkbox */
    .checkbox:checked {
        /* Apply class right-0*/
        right: 0;
    }
    .checkbox:checked + .toggle-label {
        /* Apply class bg-indigo-700 */
        background-color: #4299e1;
    }

    .divcolor {
        background-color: #4299e1;
    }
    .buttoncolor {
        background-color: #667eea;
    }
    .text-color {
        color: #4a5568;
    }
    .height {
        height: 0.313rem;
    }
</style>
