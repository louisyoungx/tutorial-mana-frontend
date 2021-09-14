<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar></teacher-sidebar>
    <modals :title="modals.title" :open="modals.open" :remind="modals.remind" :confirm="modals.confirm" :cancel="modals.cancel" />
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full bg-white py-5 px-5 sm:px-10 sm:shadow rounded">
        <h2 class="text-gray-700 text-2xl mb-4 sm:mb-0">设置</h2>
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
                <p class="text-lg text-gray-800 font-bold">基本信息</p>
              </div>
            </div>
            <div class="w-11/12 mx-auto">
              <div
                class="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative mt-6 shadow mb-8"
              >
                <img
                  src="http://www.louisyoung.site:8002/TutorialManage/avatar.jpg"
                  alt=""
                  class="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                />
                <div
                  class="bg-white h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
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
                    <path
                      d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                    />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </div>
              </div>
              <div class="flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label
                  for="uid"
                  class="pb-2 text-sm font-bold text-gray-800"
                  >工号</label
                >
                <input v-model="user.uid"
                  disabled
                  type="number"
                  id="uid"
                  name="uid"
                  maxlength="10"
                  class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                  placeholder="请填写您的工号"
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br"
          >
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
                详细信息
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
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="name"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >名字</label
                    >
                    <input v-model="user.name"
                      type="text"
                      maxlength="6"
                      name="name"
                      required
                      id="name"
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder="请填写您的姓名"
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="phone"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >手机号</label
                    >
                    <input v-model="user.phone"
                      type="number"
                      maxlength="11"
                      id="phone"
                      name="phone"
                      required
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder="请填写您的手机号"
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="email"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >电子邮箱</label
                    >
                    <div class="relative">
                      <div
                        class="absolute text-gray-600 flex items-center px-4 border-r h-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-mail"
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
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <polyline points="3 7 12 13 21 7" />
                        </svg>
                      </div>
                      <input v-model="user.email"
                        id="email"
                        name="email"
                        required
                        class="w-full text-gray-800 focus:outline-none focus:border focus:border-blue-500 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div
                      class="flex justify-between items-center pt-1 text-green-400"
                    >
                      <p class="text-xs">邮箱填写成功！</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path
                          class="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                                0 1-1.4
                                                0l-2-2a1 1 0 0 1 1.4-1.42z"
                          stroke="currentColor"
                          stroke-width="0.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="academy"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >学院</label
                    >
                    <div
                      class="border border-gray-300 shadow-sm rounded flex relative"
                    >
                      <select v-model="user.academy"
                        type="text"
                        name="academy"
                        required
                        id="academy"
                        class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500 text-gray-800 rounded"
                      >
                        <option value="测试与光电工程学院" selected="selected">测试与光电工程学院</option>
                      </select>
                      <div
                        class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0"
                      >
                        <svg
                          tabindex="0"
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-chevron-up"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                        </svg>
                      </div>
                    </div>
                  </div>
<!--                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">-->
<!--                    <label-->
<!--                      for="wechat_id"-->
<!--                      class="pb-2 text-sm font-bold text-gray-800"-->
<!--                      >微信号</label-->
<!--                    >-->
<!--                    <input-->
<!--                      type="text"-->
<!--                      id="wechat_id"-->
<!--                      name="wechat_id"-->
<!--                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"-->
<!--                      placeholder="微信号：可以不填"-->
<!--                    />-->
<!--                  </div>-->
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="location"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >默认辅导地点</label
                    >
                    <input v-model="user.location"
                      type="text"
                      id="location"
                      name="location"
                      required
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder="请填写默认辅导地点"
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
                  <p class="text-sm text-gray-500 pt-1">工号-姓名</p>
                  <p class="text-lg text-gray-800 font-bold">{{ user.uid }} - {{ user.name }}</p>
                  <p class="text-sm text-gray-500 pt-1">手机号</p>
                  <p class="text-lg text-gray-800 font-bold">{{ user.phone }}</p>
                  <p class="text-sm text-gray-500 pt-1">邮箱</p>
                  <p class="text-lg text-gray-800 font-bold">{{ user.email }}</p>
                  <p class="text-sm text-gray-500 pt-1">学院</p>
                  <p class="text-lg text-gray-800 font-bold">{{ user.academy }}</p>
                  <p class="text-sm text-gray-500 pt-1">默认辅导地点</p>
                  <p class="text-lg text-gray-800 font-bold">{{ user.location }}</p>
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
              <button @click="changeUserCheck()"
                type="button"
                class="bg-blue-500 focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm"
              >
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherSidebar from "../../components/sidebar/teacher-sidebar";
import api from "../../http";
import Modals from "../../components/overlays/modals";
export default {
  name: "TeacherSettings",
  components: {Modals, TeacherSidebar},
  data: function () {
    return {
      user: {
        id: '',
        uid: '',
        name: '',
        phone: '',
        email: '',
        academy: '',
        location: '',
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

  created() {
    this.user.id = this.$store.state.id
    this.user.uid = this.$store.state.uid
    this.user.name = this.$store.state.name
    this.user.phone = this.$store.state.phone
    this.user.email = this.$store.state.email
    this.user.academy = "测试与光电工程学院"
    this.user.location = this.$store.state.location
  },

  methods: {
    changeUserCheck() {
      let tag = false
      this.modals.remind = ''
      if (this.user.uid === '') {
        this.modals.remind += '工号不能为空\r\n'
        tag = true
      }
      if (this.user.name === '') {
        this.modals.remind += '姓名不能为空\r\n'
        tag = true
      }
      if (this.user.phone === '') {
        this.modals.remind += '手机号不能为空\r\n'
        tag = true
      }
      if (this.user.email === '') {
        this.modals.remind += '邮箱不能为空\r\n'
        tag = true
      }
      if (this.user.academy === '') {
        this.modals.remind += '学院不能为空\r\n'
        tag = true
      }
      if (this.user.location === '') {
        this.modals.remind += '默认辅导地点不能为空\r\n'
        tag = true
      }

      if (tag === true) {
        this.modals.open = true
      } else {
        this.changeUserHandler()
      }
    },

    changeUserHandler() {
      let data = {
        "id": this.user.id,
        "uid": this.user.uid,
        "name": this.user.name,
        "avatar": "http://www.louisyoung.site:8002/TutorialManage/avatar.jpg",
        "wechat_id": null,
        "phone": this.user.phone,
        "email": this.user.email,
        "location": this.user.location
      }
      api.changeUser(data, 'teacher').then(res => {
        if (res.name === this.user.name) {
          console.log("修改成功：", res.name)
          this.signInHandler(this.user.uid, 'teacher')
        } else {
          this.modals.remind += ''
          for (let item in res) {
            this.modals.remind += res[item] + '\r\n'
          }
          this.modals.open = true
        }
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

    signInHandler(uid, type) {
      return api.signIn(uid, type).then(res => {
        if (res.length !== 0) {
          console.log('Login success')
          this.$store.commit('type', type)
          this.$store.commit('init', res[0])
          this.updateHandler(type)
          this.$router.push(`/${type}/home-page`)
        } else {
          console.log('Login Failed')
          this.updateHandler(type)
        }
      })
    },

    updateHandler(type) {
      let id = this.$store.state.id
      if (type === 'student') {
        this.updateStudent(id)
      }
      else if (type === 'teacher') {
        this.updateTeacher(id)
      }
    },

    updateStudent(id) {
      api.update(id, 'student').then(info => {
        console.log(info)
        this.$store.commit('joinedCourse', info[0])
        this.$store.commit('joinedTutorial', info[1])
        this.$store.commit('courseSelect', info[2])
        this.$store.commit('tutorialSelect', info[3])
        this.$store.dispatch('courseSelecting')
        this.$store.dispatch('tutorialFormat')
        this.$store.dispatch('tutorialSelecting')
        console.log(this.$store.state)
      })
    },

    updateTeacher(id) {
      api.update(id, 'teacher').then(info => {
        console.log(info)
        this.$store.commit('course', info[0])
        this.$store.commit('tutorial', info[1])
        this.$store.dispatch('courseList')
        this.$store.dispatch('tutorialActivity')
        this.$store.dispatch('tutorialData')
        this.$store.dispatch('tutorialCollect')
        // console.log(this.$store.state)
      })
    },
    showState() {
      console.log(this.$store.state)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trigger:hover .controls {
  opaacademy: 1;
}
.trigger:hover .overlay {
  --bg-opaacademy: 0.75;
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

