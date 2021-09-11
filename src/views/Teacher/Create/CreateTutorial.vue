<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <teacher-sidebar></teacher-sidebar>
    <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      <div class="w-full bg-white py-5 px-5 sm:px-10 sm:shadow rounded">
        <h2 class="text-gray-700 text-2xl mb-4 sm:mb-0">创建帮扶活动</h2>
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
                <p class="text-lg text-gray-800 font-bold">详情</p>
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
                      Let your colleagues know who you are
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
              <div
                class="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative mt-6 shadow mb-8"
              >
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
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
                  for="username"
                  class="pb-2 text-sm font-bold text-gray-800"
                  >课程/描述/开始时间/持续时长/地点</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                  placeholder="@example"
                  required
                />
              </div>
              <div class="mt-8 flex flex-col xl:w-3/5 lg:w-3/5 w-full">
                <label for="about" class="pb-2 text-sm font-bold text-gray-800"
                  >About</label
                >
                <textarea
                  id="about"
                  name="about"
                  class="border border-gray-300 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 resize-none text-gray-800"
                  placeholder="Let the world know who you are"
                  rows="5"
                  required
                ></textarea>
                <p class="w-full text-right text-xs text-gray-500 pt-1">
                  Character Limit: 200
                </p>
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
              Back
            </button>
            <button
              type="button"
              v-on:click="handleSteps('1')"
              class="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div v-if="step2" id="step_2">
        <form class="mt-8 container mx-auto bg-white shadow rounded">
          <div class="xl:w-full border-b border-gray-300 py-5">
            <div class="flex items-center w-11/12 mx-auto">
              <p class="text-lg text-gray-800 font-bold">
                Personal Information
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
                      for="FirstName"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >First Name</label
                    >
                    <input
                      type="text"
                      name="firstName"
                      required
                      id="FirstName"
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder=""
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="LastName"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="LastName"
                      name="lastName"
                      required
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder=""
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="email2"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Email</label
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
                      <input
                        id="email2"
                        name="email"
                        required
                        class="w-full text-gray-800 focus:outline-none focus:border focus:border-blue-500 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div
                      class="flex justify-between items-center pt-1 text-green-400"
                    >
                      <p class="text-xs">Email submission success!</p>
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
                      for="City"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >City</label
                    >
                    <div
                      class="border border-gray-300 shadow-sm rounded flex relative"
                    >
                      <select
                        type="text"
                        name="city"
                        required
                        id="City"
                        class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500 text-gray-800 rounded"
                      >
                        <option value="Switzerland">Switzerland</option>
                        <option value="America">America</option>
                        <option value="Australia">Australia</option>
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
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 15 12 9 18 15" />
                        </svg>
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
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="StreetAddress"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Street Address</label
                    >
                    <input
                      type="text"
                      id="StreetAddress"
                      name="streetAddress"
                      required
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder=""
                    />
                  </div>
                  <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      for="Country"
                      class="pb-2 text-sm font-bold text-gray-800"
                      >Country</label
                    >
                    <input
                      type="text"
                      id="Country"
                      name="country"
                      required
                      class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                      placeholder="California"
                    />
                  </div>
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    for="State/Province"
                    class="pb-2 text-sm font-bold text-gray-800"
                    >State/Province</label
                  >
                  <input
                    type="text"
                    id="State/Province"
                    name="state"
                    required
                    class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                    placeholder="California"
                  />
                </div>
                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <div class="flex items-center pb-2">
                    <label for="ZIP" class="text-sm font-bold text-gray-800"
                      >ZIP/Postal Code</label
                    >
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

                  <input
                    type="text"
                    id="ZIP"
                    name="zip"
                    class="border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-500 text-gray-800"
                    placeholder="e.g 86745"
                  />
                  <div
                    class="flex justify-between items-center pt-1 text-red-400"
                  >
                    <p class="text-xs">Incorrect Zip Code</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-x-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
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
              Back
            </button>
            <button
              type="button"
              v-on:click="handleSteps('2')"
              class="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
            >
              Next
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
                  <p class="text-lg text-gray-800 font-bold">Alerts</p>
                  <p class="text-sm text-gray-500 pt-1">
                    Get updates of any new activity or features. Turn on/off
                    your preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div class="container mx-auto bg-white py-6 w-11/12">
              <div class="flex items-center mb-8 text-gray-800">
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
                <p class="text-sm font-bold ml-2 text-gray-800">Via Email</p>
              </div>

              <div class="flex justify-between items-center mb-8">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Comments</p>
                  <p class="text-sm text-gray-500">
                    Get notified when a post or comment is made
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="email_comments"
                    id="toggle1"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle1"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
              <div class="flex justify-between items-center mb-8">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Job Applications</p>
                  <p class="text-sm text-gray-500">
                    Get notified when a candidate applies to a job posting
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="email_job_application"
                    id="toggle2"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle2"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Product Updates</p>
                  <p class="text-sm text-gray-500">
                    Get notifitied when there is a new product feature or
                    upgrades
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="email_product_update"
                    id="toggle3"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle3"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
              <div class="flex items-center mb-8 mt-12 text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell"
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
                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                  />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <p class="text-sm font-bold ml-2 text-gray-800">
                  Push Notifications
                </p>
              </div>
              <div class="flex justify-between items-center mb-8">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Comments</p>
                  <p class="text-sm text-gray-500">
                    Get notified when a post or comment is made
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="notification_comment"
                    id="toggle4"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle4"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
              <div class="flex justify-between items-center mb-8">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Job Applications</p>
                  <p class="text-sm text-gray-500">
                    Get notified when a candidate applies to a job posting
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="notification_application"
                    id="toggle5"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle5"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
              <div class="flex justify-between items-center mb-8">
                <div class="w-9/12">
                  <p class="text-sm text-gray-800 pb-1">Product Updates</p>
                  <p class="text-sm text-gray-500">
                    Get notifitied when there is a new product feature or
                    upgrades
                  </p>
                </div>
                <div class="cursor-pointer rounded-full relative shadow-sm">
                  <input
                    type="checkbox"
                    name="notification_updates"
                    id="toggle6"
                    class="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle6"
                    class="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
            <div
              class="w-full py-4 sm:px-12 px-4 bg-gray-100 flex justify-end rounded-bl rounded-br"
            >
              <button
                type="button"
                v-on:click="backSteps('3')"
                class="btn text-sm focus:outline-none text-gray-600 border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
              >
                Back
              </button>
              <button
                type="button"
                class="bg-blue-500 focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm"
              >
                Save
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
export default {
  name: "HelloWorld",
  components: {TeacherSidebar},
  data: function () {
    return {
      menu: true,
      step1: true,
      step2: false,
      step3: false,
    };
  },
  methods: {
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

