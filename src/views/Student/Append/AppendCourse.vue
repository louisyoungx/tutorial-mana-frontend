<template>
    <container-body>

        <student-sidebar/>

        <container-content>

            <content-full>
                <content-container>
                    <h1 class="font-medium text-gray-900 text-3xl mb-6">新课程</h1>
                    <div class="flex flex-col lg:flex-row w-full lg:items-center lg:w-2/3">
                        <div class="w-full relative mb-4 lg:mb-0 lg:mr-4 lg:w-1/3">
                            <div class="absolute text-gray-600 flex items-center pl-3 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="18" height="18"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </div>
                            <label for="search" class="hidden"></label>
                            <input id="search"
                                   class="bg-gray-100 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border"
                                   placeholder="搜索（课程名）" />
                        </div>
                        <div class="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
                            <div class="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                                     width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            <select aria-label="Selected tab"
                                    class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                                <option class="text-sm text-gray-600">
                                    Headers and Titles
                                </option>
                                <option class="text-sm text-gray-600">
                                    Authors and Tutors
                                </option>
                                <option selected class="text-sm text-gray-600">
                                    Topics & Skills
                                </option>
                            </select>
                        </div>
                        <div class="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
                            <div class="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                                     width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            <select aria-label="Selected tab"
                                    class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                                <option class="text-sm text-gray-600">Name</option>
                                <option class="text-sm text-gray-600">Size</option>
                                <option selected class="text-sm text-gray-600">Duration</option>
                            </select>
                        </div>
                        <div
                                class="relative w-full lg:w-1/5 cursor-pointer z-0 border focus:border-gray-800 border-gray-300 rounded p-2">
                            <div class="z-0 w-10 pl-2 absolute inset-0 m-auto z-0 mr-0 flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-calendar-event"
                                     width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="5" width="16" height="16" rx="2" />
                                    <line x1="16" y1="3" x2="16" y2="7" />
                                    <line x1="8" y1="3" x2="8" y2="7" />
                                    <line x1="4" y1="11" x2="20" y2="11" />
                                    <rect x="8" y="15" width="2" height="2" />
                                </svg>
                                <input type="date" class="absolute right-0 z-10 opacity-0 cursor-pointer" />
                            </div>
                            <p class="text-sm text-gray-600">By Dates</p>
                        </div>
                    </div>
                </content-container>
            </content-full>

            <content-full>

                <div class="">
                    <div class="w-full shadow bg-white p-8 mb-8">
                        <h2 class="text-color text-lg font-bold">
                            课程列表
                        </h2>
                        <div class="md:flex items-center mt-6 flex-wrap">
                            <course-card style="width: 30vw"
                                    v-for="course in courses"
                                    :academy="course.academy"
                                    :name="course.name"
                                    :describe="course.describe"
                                    :term="course.term"
                                    :limit="course.limit"
                                    :teacher="course.teacher_name"
                                    :phone="course.teacher_phone"
                                    :avatar="course.teacher_avatar"
                                    :showButton="true"
                                    @accept="accept(course.id)"
                                    @cancel="cancel(course.id)"
                            />
                        </div>

                    </div>

                </div>
            </content-full>

        </container-content>
    </container-body>
</template>

<script>
    import StudentSidebar from "../../../components/sidebar/student-sidebar";
    import CourseCard from "../../../components/course/course-card";
    import ContainerBody from "../../../components/container/container-body";
    import ContainerContent from "../../../components/container/container-content";
    import ContentFull from "../../../components/container/content-full";
    import ContentContainer from "../../../components/container/content-container";
    import api from "../../../http";

    export default {
        name: "AppendCourse",
        components: {
            ContentContainer,
            ContentFull,
            ContainerContent,
            ContainerBody,
            CourseCard,
            StudentSidebar
        },
        data: function () {
            return {
                courses: [],
            }
        },
        created() {
            this.courses = this.deepClone(this.$store.state.student.courseUnSelected)
        },
        methods: {
            deepClone(obj) {
                return JSON.parse(JSON.stringify(obj))
            },
            accept(id) {
                console.log(id)
                let data = {
                    "student_id": this.$store.state.id,
                    "course_id": id,
                }
                api.appendCourse(data).then(res => {
                    this.updateStudent()
                })
            },
            cancel(id) {
                console.log(id)
            },
            updateStudent() {
                api.update(this.$store.state.id, 'student').then(info => {
                    console.log(info)
                    this.$store.commit('joinedCourse', info[0])
                    this.$store.commit('joinedTutorial', info[1])
                    this.$store.commit('courseSelect', info[2])
                    this.$store.commit('tutorialSelect', info[3])
                    this.$store.dispatch('courseSelecting')
                    this.$store.dispatch('tutorialFormat')
                    this.$store.dispatch('tutorialSelecting')
                    this.$store.dispatch('tutorialCollect')
                    this.courses = this.deepClone(this.$store.state.student.courseUnSelected)
                    console.log(this.$store.state)
                })
            },
        }
    }
</script>
