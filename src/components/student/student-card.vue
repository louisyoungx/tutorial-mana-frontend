<template>
    <div
            class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-2.png"
                 alt="student" />
        </div>
        <h5 class="mt-4 mb-2 text-gray-800">Carrie Mathison</h5>
        <p class="text-xs text-gray-600">Advertising Manager</p>
        <div class="flex items-start my-8">
            <div class="">
                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                    08
                </h2>
                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
            </div>
            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                    12
                </h2>
                <p class="text-gray-800 text-xs leading-5">Assignments</p>
            </div>
            <div class="">
                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                    03
                </h2>
                <p class="text-gray-800 text-xs leading-5">Projects</p>
            </div>
        </div>
        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
        <div class="w-full h-1 bg-gray-200 rounded relative">
            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
        </div>
        <button
                class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
            Send Message
        </button>
    </div>
</template>

<script>
    export default {
        name: "student-card"
    }
</script>

<style scoped>

</style>
