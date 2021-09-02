<template>
    <div class="w-full rounded shadow bg-white p-8 mb-8">
        <h2 class="text-color text-lg font-bold">Task progress</h2>
        <div class="my-4 flex items-center">
            <p class="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
            <div class="w-full height bg-gray-200 rounded relative">
                <div class="w-11/12 bg-green-400 height rounded">
                    <div class="absolute right-0 bottom-0 mb-2">
                        <div class="relative py-1 rounded">
                            <p class="text-green-400 text-xs font-bold">98%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4 flex items-center">
            <p class="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
            <div class="w-full height bg-gray-200 rounded relative">
                <div class="w-1/2 bg-blue-500 height rounded">
                    <div class="absolute right-0 bottom-0 mb-2">
                        <div class="relative py-1 rounded">
                            <p class="text-blue-500 text-xs font-bold">55%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4 flex items-center">
            <p class="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
            <div class="w-full height bg-gray-200 rounded relative">
                <div class="w-1/5 bg-red-400 height rounded">
                    <div class="absolute right-0 bottom-0 mb-2">
                        <div class="relative py-1 rounded">
                            <p class="text-red-400 text-xs font-bold">17%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4 flex items-center">
            <p class="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
            <div class="w-full height bg-gray-200 rounded relative">
                <div class="w-10/12 bg-blue-500 height rounded">
                    <div class="absolute right-0 bottom-0 mb-2">
                        <div class="relative py-1 rounded">
                            <p class="text-blue-500 text-xs font-bold">89%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-4 flex items-center">
            <p class="mr-3 text-gray-600 font-normal tracking-normal">W2</p>
            <div class="w-full height bg-gray-200 rounded relative">
                <div class="w-1/4 bg-orange-400 height rounded">
                    <div class="absolute right-0 bottom-0 mb-2">
                        <div class="relative py-1 rounded">
                            <p class="text-orange-400 text-xs font-bold">25%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dash-task"
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
