<template>
    <div class="w-full rounded shadow bg-white p-8 mb-8">
        <h2 class="text-color text-lg font-bold mb-4">Trending Posts</h2>
        <div class="flex flex-col sm:flex-row sm:items-center py-4">
            <img
                    class="flex-shrink-0 rounded"
                    src="../../assets/images/post_1.png"
            />
            <div class="mt-4 sm:mt-0 sm:ml-6">
                <h4 class="text-blue-500 text-sm font-normal uppercase mb-2">
                    Food
                </h4>
                <p class="text-gray-800 text-base font-normal mb-1">
                    One of Saturn’s largest rings may be newer than anyone
                </p>
                <p class="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center py-4">
            <img
                    class="flex-shrink-0 rounded"
                    src="../../assets/images/post_2.png"
            />
            <div class="mt-4 sm:mt-0 sm:ml-6">
                <h4 class="text-blue-500 text-sm font-normal uppercase mb-2">
                    Galaxy
                </h4>
                <p class="text-gray-800 text-base font-normal mb-1">
                    One of Saturn’s largest rings may be newer than anyone
                </p>
                <p class="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center py-4">
            <img
                    class="flex-shrink-0 rounded"
                    src="../../assets/images/post_3.png"
            />
            <div class="mt-4 sm:mt-0 sm:ml-6">
                <h4 class="text-blue-500 text-sm font-normal uppercase mb-2">
                    Google
                </h4>
                <p class="text-gray-800 text-base font-normal mb-1">
                    One of Saturn’s largest rings may be newer than anyone
                </p>
                <p class="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center py-4">
            <img
                    class="flex-shrink-0 rounded"
                    src="../../assets/images/post_4.png"
            />
            <div class="mt-4 sm:mt-0 sm:ml-6">
                <h4 class="text-blue-500 text-sm font-normal uppercase mb-2">
                    Apple
                </h4>
                <p class="text-gray-800 text-base font-normal mb-1">
                    One of Saturn’s largest rings may be newer than anyone
                </p>
                <p class="text-gray-600 text-sm">May 13, 2019 by Allison Fox</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dash-trending"
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
