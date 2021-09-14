<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar/>
    <modals :title="modals.title" :open="modals.open" :remind="modals.remind" :confirm="modals.confirm" :cancel="modals.cancel" />
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full bg-white py-5 px-5 sm:px-10 sm:shadow rounded">
        <h2 class="text-gray-700 text-2xl mb-4 sm:mb-0">创建课程</h2>
        <div class="w-full mx-auto mt-6 mb-4">
          <div
            id="progress_bar"
            class="bg-gray-200 h-2 flex items-center justify-between"
          >
            <!-- bg-blue-500 -->
            <div
              v-bind:class="{ 'bg-gray-200': step1, 'bg-blue-500': !step1 }"
              class="w-1/2 h-2 flex items-center justify-between"
            >
              <div
                v-bind:class="{ 'bg-white': step1, 'bg-blue-500': !step1 }"
                class="cursor-pointer h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2"
              >
                <span
                  v-if="step1"
                  class="h-3 w-3 bg-blue-500 rounded-full"
                ></span>
                <svg
                  v-if="!step1"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <div
                v-bind:class="{
                  'bg-white': step1,
                  'bg-blue-500': step2,
                  'bg-blue-500': step3,
                }"
                class="relative -mr-2 cursor-pointer bg-white h-6 w-6 rounded-full shadow flex items-center justify-center"
              >
                <span
                  v-bind:class="{ 'bg-white': step1, 'bg-blue-500': step2 }"
                  class="h-3 w-3 rounded-full"
                ></span>
                <span
                  v-if="step3"
                  class="h-3 w-3 rounded-full bg-blue-500"
                ></span>
                <svg
                  v-if="step3"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check -ml-5"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <div
                  id="tooltip"
                  class="hidden absolute bg-blue-500 shadow-lg px-2 py-1 rounded right-0 top-0 mt-8 -mr-20 w-48 flex justify-center"
                >
                  <svg
                    class="absolute top-0 -mt-1 w-full right-0 left-0"
                    width="16px"
                    height="8px"
                    viewBox="0 0 16 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Progress-Bars"
                        transform="translate(-322.000000, -198.000000)"
                        fill="#4299e1"
                      >
                        <g
                          id="Group-4"
                          transform="translate(310.000000, 198.000000)"
                        >
                          <polygon
                            id="Triangle"
                            points="20 0 28 8 12 8"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p class="text-white text-xs font-bold">
                    Step 2: Personal Information
                  </p>
                </div>
              </div>
            </div>
            <div class="w-1/2 flex justify-end">
              <div
                class="cursor-pointer bg-white h-6 w-6 rounded-full shadow flex items-center justify-center"
              >
                <span
                  v-if="step3 === true"
                  class="h-3 w-3 bg-blue-500 rounded-full"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step1" id="step_1">
        <form id="form" class="mt-8 shadow bg-white rounded">
          <div class="container mx-auto">
            <div class="xl:w-full border-b border-gray-300 py-5">
              <div class="flex items-center w-11/12 mx-auto">
                <p class="text-lg text-gray-800 font-bold">详情（名称/描述）</p>
                <div
                  class="relative md:mt-0"
                  onmouseover="showTooltip(true)"
                  onmouseout="showTooltip(false)"
                >
                  <div
                    id="tooltip"
                    role="tooltip"
                    class="z-20 transition duration-150 ease-in-out bottom-0 mb-8 opacity-0 absolute shadow-lg lg:pt-4 lg:pr-2 lg:pl-3 lg:pb-5 bg-white text-gray-600 rounded w-40"
                  >
                    <svg
                      width="16px"
                      height="8px"
                      viewBox="0 0 16 8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Tooltips-"
                          transform="translate(-84.000000, -203.000000)"
                          fill="#FFFFFF"
                        >
                          <g
                            id="Group-3-Copy"
                            transform="translate(76.000000, 145.000000)"
                          >
                            <polygon
                              class="shadow"
                              id="Triangle"
                              transform="translate(16.000000, 62.000000) rotate(-180.000000) translate(-16.000000, -62.000000) "
                              points="16 58 24 66 8 66"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p class="text-xs text-gray-600 leading-4">
                      让我们知道你是谁
                    </p>
                  </div>
                  <div class="ml-2 cursor-pointer">
                    <svg
                      aria-haspopup="true"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-info-circle"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#A0AEC0"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                      <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-11/12 mx-auto">
              <!--课程名称-->
              <div class="flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <br>
                <label
                  for="username"
                  class="pb-2 text-sm font-bold text-gray-800"
                  >课程名称</label
                >
                <input v-model="course.name"
                  type="text"
                  maxlength="10"
                  id="username"
                  name="username"
                  class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                  placeholder="请填写课程名称"
                  required
                />
              </div>
              <!--描述-->
              <div class="mt-8 flex flex-col xl:w-3/5 lg:w-3/5 w-full">
                <label for="about" class="pb-2 text-sm font-bold text-gray-800"
                  >描述</label
                >
                <textarea v-model="course.describe"
                  maxlength="50"
                  id="about"
                  name="about"
                  class="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 resize-none text-gray-800"
                  placeholder="请填写该课程的详细描述"
                  rows="5"
                  required
                ></textarea>
                <p class="w-full text-right text-xs text-gray-500 pt-1">
                  字数限制: 50
                </p>
              </div>
            </div>
          </div>
          <div class="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br">
            <button
              type="button"
              class="btn text-sm focus:outline-none text-gray-600 border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
            >
              上一步
            </button>
            <button
              type="button"
              v-on:click="handleSteps('1')"
              class="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
            >
              下一步
            </button>
          </div>
        </form>
      </div>
      <div v-if="step2" id="step_2">
        <form class="mt-8 container mx-auto bg-white shadow rounded">
          <div class="xl:w-full border-b border-gray-300 py-5">
            <div class="flex items-center w-11/12 mx-auto">
              <p class="text-lg text-gray-800 font-bold">
                课程信息
              </p>
              <div class="ml-2 cursor-pointer text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-11/12 mx-auto">
            <div class="container mx-auto">
              <div class="my-8 mx-auto xl:w-full xl:mx-0">
                <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                  <!--学年-->
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Year"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >学年</label
                    >
                    <div
                      class="border border-gray-300 shadow-sm rounded flex relative"
                    >
                      <select v-model="course.year"
                        type="text"
                        name="year"
                        required
                        id="Year"
                        class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500 text-gray-800 rounded"
                      >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                      <div
                        class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0"
                      >
                        <svg
                          tabindex="0"
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!--学期-->
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Term"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >学期</label
                    >
                    <div
                      class="border border-gray-300 shadow-sm rounded flex relative"
                    >
                      <select v-model="course.term"
                        type="text"
                        name="term"
                        required
                        id="Term"
                        class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500 text-gray-800 rounded"
                      >
                        <option value="上学期">上学期</option>
                        <option value="下学期">下学期</option>
                      </select>
                      <div
                        class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0"
                      >
                        <svg
                          tabindex="0"
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-down"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!--人数限制-->
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="limit"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >人数限制</label
                    >
                    <input v-model="course.limit"
                      type="number"
                      id="limit"
                      name="limit"
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder="填写人数限制，没有限制请留空"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br"
          >
            <button
              type="button"
              v-on:click="backSteps('2')"
              class="btn text-sm focus:outline-none text-gray-600 border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
            >
              上一步
            </button>
            <button
              type="button"
              v-on:click="handleSteps('2')"
              class="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
            >
              下一步
            </button>
          </div>
        </form>
      </div>
      <div v-if="step3" id="step_3">
        <div class="mt-8 container mx-auto bg-white shadow rounded">
          <div class="xl:w-full border-b border-gray-300 py-5">
            <div class="flex items-center w-11/12 mx-auto">
              <div class="container mx-auto">
                <div class="mx-auto xl:w-full">
                  <p class="text-sm text-gray-500 pt-1">课程名</p>
                  <p class="text-lg text-gray-800 font-bold">{{ course.name }}</p>
                  <p class="text-sm text-gray-500 pt-1">描述</p>
                  <p class="text-lg text-gray-800 font-bold">{{ course.describe }}</p>
                  <p class="text-sm text-gray-500 pt-1">学期</p>
                  <p class="text-lg text-gray-800 font-bold">{{ course.year }}-{{ course.term }}</p>
                  <p class="text-sm text-gray-500 pt-1">人数限制</p>
                  <p class="text-lg text-gray-800 font-bold">{{ course.limit }}</p>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div
              class="w-full py-4 sm:px-12 px-4 bg-gray-100 flex justify-end rounded-bl rounded-br"
            >
              <button
                type="button"
                v-on:click="backSteps('3')"
                class="btn text-sm focus:outline-none text-gray-600 border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
              >
                上一步
              </button>
              <button @click="createCourseCheck()"
                type="button"
                class="bg-blue-500 focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm"
              >
                创建
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherSidebar from "../../../components/sidebar/teacher-sidebar";
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
import Modals from "../../../components/overlays/modals";
import Notifications from "../../../components/overlays/notifications";
import api from "../../../http";

export default {
  name: "CreateCourse",
  components: {
    Notifications,
    Modals, TeacherSidebar,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  setup() {
    const open = ref(true)
    return {
      open,
    }
  },
  data: function () {
    return {
      course: {
        name: '',
        describe: '',
        year: '',
        term: '',
        limit: ''
      },
      modals: {
        modals: '错误',
        open: false,
        remind: '',
        confirm: '修改',
        cancel: '取消'
      },
      menu: true,
      step1: true,
      step2: false,
      step3: false,
    };
  },
  methods: {

    createCourseCheck() {
      let tag = false
      this.modals.remind = ''
      if (this.course.name === '') {
        this.modals.remind += '课程名不能为空\r\n'
        tag = true
      }
      if (this.course.describe === '') {
        this.modals.remind += '课程描述不能为空\r\n'
        tag = true
      }
      if (this.course.year === '') {
        this.modals.remind += '学年不能为空（例如：2021）\r\n'
        tag = true
      }
      if (this.course.term === '') {
        this.modals.remind += '学期不能为空（上学期/下学期)\r\n'
        tag = true
      }

      if (tag === true) {
        this.modals.open = true
      } else {
        this.createCourseHandler()
      }

    },

    createCourseHandler() {
      let teacher_id = this.$store.state.id
      let data = {
        "teacher_id": teacher_id,
        "name": this.course.name,
        "wallpaper": "http://www.louisyoung.site:8002/TutorialManage/wallpaper.jpg",
        "describe": this.course.describe,
        "term": this.course.year + '-' + this.course.term,
        "limit": Number(this.course.limit),
      }
      api.createCourse(data).then(res => {
        if (res.name === this.course.name) {
          console.log("创建成功：", res.name)
          this.updateTeacher()
          this.$router.push('/teacher/course')
        } else {
          this.modals.remind += ''
          for (let item in res) {
            this.modals.remind += res[item] + '\r\n'
          }
          this.modals.open = true
        }
      })
    },

    updateTeacher() {
      api.update(this.$store.state.id, 'teacher').then(info => {
        console.log(info)
        this.$store.commit('course', info[0])
        this.$store.commit('tutorial', info[1])
        this.$store.dispatch('courseList')
        this.$store.dispatch('tutorialActivity')
        this.$store.dispatch('tutorialData')
        // console.log(this.$store.state)
      })
    },

    handleSteps(id) {
      if (id === "1") {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
      } else if (id === "2") {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
      }
    },
    backSteps(back) {
      console.log(back);
      if (back === "2") {
        console.log(back);

        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
      } else if (back === "3") {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
      }
    },
    sidebarHandler() {
      this.menu = !this.menu;
      let single = document.getElementById("menuList");
      single.classList.toggle("hidden");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

