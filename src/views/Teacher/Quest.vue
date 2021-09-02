<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar/>
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full bg-white py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 sm:px-10 sm:shadow rounded">
        <h2 class="text-gray-700 text-2xl mb-4 sm:mb-0">Posts</h2>
        <router-link to="create-post"
          ><button
            class="flex items-center justify-center sm:justify-start font-normal bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none rounded text-white px-4 py-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 icon icon-tabler icon-tabler-plus"
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
            Create Post
          </button></router-link
        >
      </div>
      <div
        class="shadow border border-gray-300 rounded mt-8 w-full overflow-x-scroll lg:overflow-hidden"
      >
        <table class="min-w-full bg-white rounded">
          <thead>
            <tr class="w-full h-16 border-gray-300 border-b py-8">
              <th
                class="pl-8 text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                Post title
              </th>
              <th
                class="text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                Created on
              </th>
              <th
                class="text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                Enagement
              </th>
              <th
                class="text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                Images
              </th>
              <th
                class="text-gray-700 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="h-24 border-gray-300 border-t border-b hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr
              class="h-24 border-gray-300 border-b border-t hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td class="pl-8 pr-6 text-left whitespace-no-wrap">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  How to train your dragon for noobs
                </p>
                <div class="flex items-center mt-1">
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Life
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Habits
                  </p>
                  <div class="bg-gray-400 w-1 h-1 rounded-full mx-1"></div>
                  <p class="text-xs text-gray-600 tracking-normal leading-4">
                    Productivity
                  </p>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  21 Jan 2020
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  by James Doe
                </p>
              </td>
              <td class="pr-6">
                <p class="text-sm text-gray-700 tracking-normal leading-4">
                  256 views
                </p>
                <p class="text-xs text-gray-600 tracking-normal leading-4">
                  92 comments
                </p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center flex-no-wrap">
                  <div class="w-12 h-12 bg-cover bg-center rounded-md">
                    <img
                      src="../../assets/images/posts-1.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md -ml-2">
                    <img
                      src="../../assets/images/posts-2.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                  <div class="w-12 h-12 bg-cover rounded-md bg-center -ml-2">
                    <img
                      src="../../assets/images/posts-3.png"
                      alt=""
                      class="h-full w-full overflow-hidden object-cover rounded-md border-2 border-white shadow"
                    />
                  </div>
                </div>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"
              >
                <div class="flex items-center">
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
                    <div class="cursor-pointer text-gray-600 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-edit"
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
                        <path
                          d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                        ></path>
                        <path
                          d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                        ></path>
                        <line x1="16" y1="5" x2="19" y2="8"></line>
                      </svg>
                      <p class="ml-2">Edit</p>
                    </div>
                  </a>
                  <p class="mx-3">|</p>
                  <a
                    class="rounded border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                    href="javascript: void(0)"
                  >
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
                      <p class="ml-2 text-gray-600">Delete</p>
                    </div>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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

