<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar></teacher-sidebar>
    <slide-overs
            :open="slide.open"
            :time="slide.time"
            :date="slide.date"
            :duration_time="slide.duration_time"
            :title="slide.title"
            :attendees="slide.attendees"
            :describe="slide.describe"
            :location="slide.location"
            :wallpaper="slide.wallpaper"
            :teacher_id="slide.teacher_id"
            :teacher_name="slide.teacher_name"
            :teacher_phone="slide.teacher_phone"
            :teacher_email="slide.teacher_email"
            :teacher_avatar="slide.teacher_avatar"
    />
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">

      <div class="w-full rounded shadow bg-white mb-6">
        <div
          class="w-full bg-white py-3 md:py-6 px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between md:shadow rounded"
        >
          <h2 class="text-gray-800 text-xl">帮扶活动</h2>
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

      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            帮扶活动
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">{{tutorialData.activity}}</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            单独帮扶
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">{{tutorialData.single}}</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            帮扶人数
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">{{tutorialData.total}}</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            课程数目
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">{{tutorialData.course}}</h2>
        </div>
      </div>

      <div class="mx-auto container bg-white shadow rounded mt-8">
        <!--
        <div
          class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full"
        >
          <div
            class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center"
          >
            <div class="flex items-center">
              <a
                class="text-gray-600 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon cursor-pointer icon-tabler icon-tabler-edit"
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
              </a>
              <a
                class="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon cursor-pointer icon-tabler icon-tabler-settings"
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
              <a
                class="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
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
                    d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"
                  />
                </svg>
              </a>
              <a
                class="text-gray-600 mr-2 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-copy"
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
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path
                    d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
                  />
                </svg>
              </a>
              <a
                class="text-red-500 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon cursor-pointer icon-tabler icon-tabler-trash"
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
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end"
          >
            <div
              class="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6"
            >
              <p class="text-base text-gray-600" id="page-view">
                Viewing 1 - 20 of 60
              </p>
              <a
                class="text-gray-600 ml-2 border-transparent border cursor-pointer rounded"
                onclick="pageView(false)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
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
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </a>
              <a
                class="text-gray-600 border-transparent border rounded focus:outline-none cursor-pointer"
                onclick="pageView(true)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </a>
            </div>
            <div
              class="flex items-center lg:border-r border-gray-300 pb-3 lg:pb-0 lg:px-6"
            >
              <div class="relative w-32 z-10">
                <div
                  class="pointer-events-none text-gray-600 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                <select
                  aria-label="Selected tab"
                  class="focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 appearance-none bg-transparent"
                >
                  <option>List View</option>
                  <option>Grid View</option>
                </select>
              </div>
            </div>

            <div class="lg:ml-6 flex items-center">
              <button
                class="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm"
              >
                Download All
              </button>
              <div
                class="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray buttoncolor transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        -->
        <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table class="min-w-full bg-white">
            <thead>
              <tr class="w-full h-16 border-gray-300 border-b py-8">
                <th
                  class="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  <input
                    type="checkbox"
                    class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none"
                    id="input"
                    v-model="selectAll"
                  />
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  课程
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  描述
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  日期
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  状态
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  <div
                    class="opacity-0 w-2 h-2 rounded-full bg-indigo-400"
                  ></div>
                </th>
                <td
                  class="text-gray-600 font-normal pr-8 text-left text-sm tracking-normal leading-4"
                >
                  编辑
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activity in tutorialActivity" @click="showSlide(activity)" class="cursor-pointer h-24 border-gray-300 border-b" :key="activity.id">
                <td class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 tracking-normal leading-4">
                  <input
                    v-model="selected" :value="activity.id" number
                    type="checkbox"
                    class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none"
                  />
                </td>
                <td class="pr-6 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="h-8 w-8">
                      <img
                        :src=avatar
                        alt=""
                        class="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                    <p class="ml-2 text-gray-800 tracking-normal leading-4 text-sm">
                      {{ activity.title }}
                    </p>
                  </div>
                </td>
                <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                  {{ activity.describe }}
                </td>
                <td class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                  {{ activity.day }}
                </td>
                <td v-if="activity.active" class="text-sm pr-6 whitespace-no-wrap text-green-400 tracking-normal leading-4">
                  进行中
                </td>
                <td v-else class="text-sm pr-6 whitespace-no-wrap text-red-400 tracking-normal leading-4">
                  已结束
                </td>
                <td v-if="activity.active" class="pr-6">
                  <div class="w-2 h-2 rounded-full bg-green-400"></div>
                </td>
                <td v-else class="pr-6">
                  <div class="w-2 h-2 rounded-full bg-red-400"></div>
                </td>
                <td class="pr-8 relative">
                  <div class="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                    <ul class="bg-white shadow rounded py-1">
                      <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                        Edit
                      </li>
                      <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                        Delete
                      </li>
                      <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                        Duplicate
                      </li>
                    </ul>
                  </div>
                  <a @click="deleteTutorial(activity.id)" class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                    <div class="cursor-pointer text-red-500 flex items-center">
                      <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-trash"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path
                                d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                        ></path>
                        <path
                                d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                        ></path>
                      </svg>
                      <p class="ml-2 text-gray-600">删除</p>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherSidebar from "../../components/sidebar/teacher-sidebar";
import api from "../../http";
import SlideOvers from "../../components/overlays/slide-overs";
export default {
  name: "TeacherTutorial",
  components: {SlideOvers, TeacherSidebar},
  data: function () {
    return {
      menu: true,
      check: false,
      tutorialActivity: [],
      slide: {
        open: false,
        time: undefined,
        date: undefined,
        duration_time: undefined,
        title: undefined,
        describe: undefined,
        attendees: undefined,
        location: undefined,
        wallpaper: undefined,
        teacher_id: undefined,
        teacher_name: undefined,
        teacher_phone: undefined,
        teacher_email: undefined,
        teacher_avatar: undefined,
      },
      tutorialData:
      {
          activity: 0,
          single: 0,
          total: 0,
          course: 0
      },
      selected: [],
    };
  },
  computed: {
    selectAll: {
      get: function () {
        return this.users ? this.selected.length == this.users.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.users.forEach(function (user) {
            selected.push(user.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  created() {
    this.avatar = this.$store.state.avatar;
    this.tutorialData = this.deepClone(this.$store.state.tutorial.tutorialData)
    this.tutorialActivity = this.deepClone(this.$store.state.tutorial.tutorialActivity)
    // this.updateTeacher()
  },
  methods: {
    showSlide(activity) {
      this.slide = activity
      this.slide.open = false
      console.log(this.slide, activity)
      setTimeout(() => {
        this.slide.open = true;
      }, 0)
    },

    sidebarHandler() {
      this.menu = !this.menu;
      let single = document.getElementById("menuList");
      single.classList.toggle("hidden");
    },

    deepClone(obj) {
      return JSON.parse(JSON.stringify(obj))
    },

    deleteTutorial(id) {
      api.deleteTutorial(id).then(res => {
        if (res === 'success') {
          this.updateTeacher()
        }
      })
    },

    createTutorial() {
      this.$router.push(`/teacher/create/tutorial`)
    },

    updateTeacher() {
      api.update(this.$store.state.id, 'teacher').then(info => {
        console.log(info)
        this.$store.commit('course', info[0])
        this.$store.commit('tutorial', info[1])
        this.$store.dispatch('courseList')
        this.$store.dispatch('tutorialActivity')
        this.$store.dispatch('tutorialData')
        this.avatar = this.$store.state.avatar;
        this.tutorialData = this.deepClone(this.$store.state.tutorial.tutorialData)
        this.tutorialActivity = this.deepClone(this.$store.state.tutorial.tutorialActivity)
        console.log(this.tutorialActivity)
        // console.log(this.$store.state)
      })
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

.divcolor {
  background-color: #4299e1;
}
.buttoncolor {
  background-color: #667eea;
}
</style>

