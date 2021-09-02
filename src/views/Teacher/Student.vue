<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar></teacher-sidebar>
    <div class="container mx-auto py-10 md:w-8/12 lg:w-4/5 w-11/12 px-6">
      <div class="w-full rounded shadow bg-white mb-6">
        <div
          class="w-full bg-white py-3 sm:py-6 px-4 sm:px-8 flex flex-col md:flex-row lg:items-center lg:justify-between sm:shadow rounded"
        >
          <h2 class="text-gray-800 text-xl mb-4 md:mb-2 lg:mb-0">Users</h2>
          <div
            class="flex flex-col lg:flex-row lg:items-center w-full sm:w-1/2 md:justify-end md:pl-16 lg:pl-0"
          >
            <div class="flex flex-col sm:mr-3 mb-4 md:mb-2 lg:mb-0">
              <label
                for="search"
                class="hidden text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >Search</label
              >
              <div class="relative">
                <div
                  class="absolute text-gray-600 flex items-center pl-4 h-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke=" currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </div>
                <input
                  id="search"
                  class="text-gray-600 focus:outline-none focus:border focus:border-blue-500 font-normal w-full sm:w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border bg-gray-100"
                  placeholder="Search employees"
                />
              </div>
            </div>
            <button
              class="flex items-center justify-center sm:justify-start font-normal bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none rounded text-white px-6 py-2 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-plus mr-2"
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add contacts
            </button>
          </div>
        </div>
      </div>
      <div class="w-full rounded shadow bg-white mb-6">
        <div class="w-full bg-white py-3 sm:py-6 px-4 sm:px-8 shadow rounded">
          <h2 class="text-gray-800 text-lg mb-8">Users</h2>
          <div
            class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-blue-500 font-normal text-xs">Management</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-1.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Steve Lazardis
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Senior Manager
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-blue-500 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G1
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-blue-700 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-indigo-500 font-normal text-xs">UX Design</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-2.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Ashley Wilson
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Senior UX Designer
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-indigo-500 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G3
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-indigo-700 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-gray-800 font-normal text-xs">Finance</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-3.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Clay Morrow
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Finance Analyst
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-gray-800 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G2
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-gray-800 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-red-400 font-normal text-xs">Marketing</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-4.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Carrie Matthison
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Marketing Manager
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="px-6 py-2 bg-red-400 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G1
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-red-400 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
          </div>
          <div
            class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8"
          >
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-indigo-500 font-normal text-xs">UX Design</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-5.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Dwayne Shaw
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  UX Researcher
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-indigo-500 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G3
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-indigo-500 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-purple-500 font-normal text-xs">Engineering</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-6.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Jackson Teller
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Principle Developer
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-purple-500 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G2
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-purple-500 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-blue-500 font-normal text-xs">Management</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-7.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Monica Geller
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Director Operations
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-blue-500 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G4
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-blue-500 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
            <div>
              <div
                class="bg-white shadow rounded border-gray-300 border border-solid"
              >
                <div class="pt-4 px-4 flex items-center justify-between pb-8">
                  <p class="text-gray-800 font-normal text-xs">UX Design</p>
                </div>
                <div class="flex justify-center w-full mb-3">
                  <div class="w-16 h-16 rounded border border-white shadow">
                    <img
                      class="w-full h-full overflow-hidden object-cover rounded"
                      src="../../assets/images/user-8.png"
                      alt="placeholder image"
                    />
                  </div>
                </div>
                <h5
                  class="mb-2 text-base text-gray-800 leading-4 font-normal tracking-normal text-center"
                >
                  Gunther Tribbiani
                </h5>
                <p
                  class="mb-4 text-sm text-gray-600 leading-3 font-normal tracking-normal text-center"
                >
                  Senior Manager
                </p>
                <div class="flex justify-center w-full mb-6">
                  <p
                    class="py-2 px-6 bg-gray-800 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white"
                  >
                    Level G1
                  </p>
                </div>
                <div class="flex items-center justify-center mb-2 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 text-center tracking-normal p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <div class="flex items-center justify-center mb-5 mx-4">
                  <div
                    class="bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    UX Research
                  </div>
                  <div
                    class="ml-2 bg-gray-200 rounded text-gray-600 text-xs leading-3 tracking-normal text-center p-2"
                  >
                    Product Strategy
                  </div>
                </div>
                <p
                  class="flex justify-center py-4 text-gray-600 cursor-pointer hover:bg-gray-800 rounded-b hover:text-white text-sm border-t border-gray-300 tracking-normal"
                >
                  View Profile
                </p>
              </div>
            </div>
          </div>
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
    };
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

