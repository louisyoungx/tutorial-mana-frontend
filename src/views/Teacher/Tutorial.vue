<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar></teacher-sidebar>
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full rounded shadow bg-white mb-6">
        <div
          class="w-full bg-white py-3 md:py-6 px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between md:shadow rounded"
        >
          <h2 class="text-gray-800 text-xl">Tickets</h2>
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
            Total Tickets
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">200</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            New Tickets
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">23</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            Urgent
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">02</h2>
        </div>
        <div
          class="bg-white rounded flex items-center justify-between px-5 relative shadow"
        >
          <div class="absolute w-2 h-4 divcolor left-0"></div>
          <h3 class="py-6 leading-4 text-gray-800 font-normal text-base">
            Pending
          </h3>
          <h2 class="text-gray-800 text-2xl leading-normal">08</h2>
        </div>
      </div>

      <div class="mx-auto container bg-white shadow rounded mt-8">
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
                  Assigned Agent
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Last Comment
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Date
                </th>
                <th
                  class="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Status
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
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" class="h-24 border-gray-300 border-b" :key="user.id">
                <td
                  class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 tracking-normal leading-4"
                >
                  <input
                    v-model="selected" :value="user.id" number
                    type="checkbox"
                    class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none"
                  />
                </td>
                <td class="pr-6 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="h-8 w-8">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
                        alt=""
                        class="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                    <p
                      class="ml-2 text-gray-800 tracking-normal leading-4 text-sm"
                    >
                      {{ user.name }}
                    </p>
                  </div>
                </td>
                <td
                  class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
                >
                  You can access the webapp through here
                </td>
                <td
                  class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
                >
                  02.03.20
                </td>
                <td
                  class="text-sm pr-6 whitespace-no-wrap text-green-400 tracking-normal leading-4"
                >
                  Active
                </td>
                <td class="pr-6">
                  <div class="w-2 h-2 rounded-full bg-green-400"></div>
                </td>
                <td class="pr-8 relative">
                  <div
                    class="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32"
                  >
                    <ul class="bg-white shadow rounded py-1">
                      <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                      >
                        Edit
                      </li>
                      <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                      >
                        Delete
                      </li>
                      <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                      >
                        Duplicate
                      </li>
                    </ul>
                  </div>
                  <button
                    class="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onclick="dropdownFunction(this)"
                      class="icon icon-tabler icon-tabler-dots"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </button>
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
export default {
  name: "HelloWorld",
  components: {TeacherSidebar},
  data: function () {
    return {
      menu: true,
      check: false,
      users: [
        {
          id: "1",
          name: "Shad Jast",
          lastComment: "You can access the webapp through here",
        },
        {
          id: "2",
          name: "Duane Metz",
          lastComment: "You can access the webapp through here",
        },
        {
          id: "3",
          name: "Myah Kris",
          lastComment: "You can access the webapp through here",
        },
        {
          id: "4",
          name: "Dr. Kamron Wunsch",
          lastComment: "You can access the webapp through here",
        },
      ],
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
  methods: {
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
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
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

