<template>
    <div class="flex items-center justify-between w-full mt-4 sm:mt-0">
        <div class="w-full rounded shadow bg-white">
            <div
                    class="w-full bg-white py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 sm:px-10 sm:shadow rounded-t"
            >
                <h2 class="text-gray-800 text-lg font-bold mb-4 sm:mb-0">
                    {{date}}
                </h2>
                <button @click="createTutorial()"
                        class="flex items-center justify-center sm:justify-start font-normal divcolor transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none rounded text-white px-6 py-2 text-sm"
                >
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-2 mt-1 icon icon-tabler icon-tabler-refresh"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke=" currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
                    </svg>
                    发起帮扶活动
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        date: String
    },
    methods: {
        createTutorial() {
            this.$router.push(`/teacher/create/tutorial`)
        },
    }
};
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
