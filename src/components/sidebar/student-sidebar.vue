<template>
    <!-- Sidebar starts -->
    <div
            class="w-64 min-h-screen sticky top-0 bg-blue-900 shadow md:h-full flex-col justify-between hidden sm:flex"
    >
        <div>
            <div class="flex-center h-16 w-full flex items-center justify-items-center px-8">
                <img src="../../assets/logo.gif" class="w-12" />
                <p class="pl-2 text-2xl sm:text-3xl md:text-2xl text-gray-50 text-opacity-90 font-bold text-center leading-tight">课业帮扶</p>
            </div>
            <ul class="mt-12">
                <router-link to="/student/home-page">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center py-3 px-8"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-grid"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <rect x="4" y="4" width="6" height="6" rx="1"/>
                                <rect x="14" y="4" width="6" height="6" rx="1"/>
                                <rect x="4" y="14" width="6" height="6" rx="1"/>
                                <rect x="14" y="14" width="6" height="6" rx="1"/>
                            </svg>
                            <span class="text-sm ml-2">概览</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/student/append/course">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-puzzle"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                                />
                            </svg>
                            <span class="text-sm ml-2">添加新课程</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/student/append/tutorial">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-compass"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                <circle cx="12" cy="12" r="9"/>
                            </svg>
                            <span class="text-sm ml-2">添加新的帮扶活动</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/student/course">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
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
                            <span class="text-sm ml-2">已参加的课程</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/student/tutorial">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-code"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <polyline points="7 8 3 12 7 16"/>
                                <polyline points="17 8 21 12 17 16"/>
                                <line x1="14" y1="4" x2="10" y2="20"/>
                            </svg>
                            <span class="text-sm ml-2">已参加的集体帮扶</span>
                        </div>
                    </li>
                </router-link>
<!--
                <router-link to="/student/teacher">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-puzzle"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                                />
                            </svg>
                            <span class="text-sm ml-2">课程老师</span>
                        </div>
                    </li>
                </router-link>
                <router-link to="/student/quest">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-compass"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                <circle cx="12" cy="12" r="9"/>
                            </svg>
                            <span class="text-sm ml-2">发出的帮扶请求</span>
                        </div>
                    </li>
                </router-link>
-->
                <router-link to="/student/settings">
                    <li
                            class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                    >
                        <div class="flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-settings"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <span class="text-sm ml-2">设置</span>
                        </div>
                    </li>
                </router-link>
            </ul>
        </div>

        <div>
            <div class="flex items-center mt-32 mb-4 px-8">
                <div class="w-10 h-10 bg-cover rounded-md mr-3">
                    <img
                            :src=avatar
                            alt
                            class="rounded-full h-full w-full overflow-hidden shadow"
                    />
                </div>
                <div>
                    <p class="text-gray-400 text-sm font-medium">{{name}}</p>
                    <p class="text-gray-400 text-xs">{{uid}}</p>
                </div>
            </div>
            <div class="px-8 bg-blue-800">
                <ul class="w-full flex items-center justify-between">
                    <router-link to="/student/quest">
                        <li class="cursor-pointer text-white pt-5 pb-3">
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
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                                />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                            </svg>
                        </li>
                    </router-link>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-messages"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
                            />
                            <path
                                    d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
                            />
                        </svg>
                    </li>
                    <router-link to="/student/settings">
                        <li class="cursor-pointer text-white pt-5 pb-3">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-settings"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </li>
                    </router-link>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-archive"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="3" y="4" width="18" height="4" rx="2"/>
                            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/>
                            <line x1="10" y1="12" x2="14" y2="12"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div
            class="w-56 z-40 absolute sm:relative md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
            id="mobile-nav"
    >
        <div
                id="closeSideBar"
                class="h-10 hidden w-10 bg-indigo-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
                v-on:click="sidebarHandler()"
        >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        </div>
        <div class="flex">
            <div id="menuList" class="bg-indigo-900 hidden">
                <div class="">
                    <div class="flex-center h-16 w-full flex items-center justify-items-center px-8">
                        <img src="../../assets/logo.gif" class="w-12" />
                        <p class="pl-2 text-2xl sm:text-3xl md:text-2xl text-gray-50 text-opacity-90 font-bold text-center leading-tight">课业帮扶</p>
                    </div>
                    <ul class="mt-12">
                        <router-link to="/student/home-page">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center py-3 px-8"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-grid"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <rect x="4" y="4" width="6" height="6" rx="1"/>
                                        <rect x="14" y="4" width="6" height="6" rx="1"/>
                                        <rect x="4" y="14" width="6" height="6" rx="1"/>
                                        <rect x="14" y="14" width="6" height="6" rx="1"/>
                                    </svg>
                                    <span class="text-sm ml-2">概览</span>
                                </div>
                            </li>
                        </router-link>
                        <router-link to="/student/append/course">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-puzzle"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                                        />
                                    </svg>
                                    <span class="text-sm ml-2">添加新课程</span>
                                </div>
                            </li>
                        </router-link>
                        <router-link to="/student/append/tutorial">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-compass"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                        <circle cx="12" cy="12" r="9"/>
                                    </svg>
                                    <span class="text-sm ml-2">添加新的帮扶活动</span>
                                </div>
                            </li>
                        </router-link>
                        <router-link to="/student/course">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
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
                                    <span class="text-sm ml-2">已参加的课程</span>
                                </div>
                            </li>
                        </router-link>
                        <router-link to="/student/tutorial">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-code"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <polyline points="7 8 3 12 7 16"/>
                                        <polyline points="17 8 21 12 17 16"/>
                                        <line x1="14" y1="4" x2="10" y2="20"/>
                                    </svg>
                                    <span class="text-sm ml-2">已参加的集体帮扶</span>
                                </div>
                            </li>
                        </router-link>
<!--
                        <router-link to="/student/teacher">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-puzzle"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                                        />
                                    </svg>
                                    <span class="text-sm ml-2">课程老师</span>
                                </div>
                            </li>
                        </router-link>
                        <router-link to="/student/quest">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-compass"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                        <circle cx="12" cy="12" r="9"/>
                                    </svg>
                                    <span class="text-sm ml-2">发出的帮扶请求</span>
                                </div>
                            </li>
                        </router-link>
-->
                        <router-link to="/student/settings">
                            <li
                                    class="flex w-full justify-between text-gray-400 hover:text-gray-300 hover:bg-blue-800 cursor-pointer items-center px-8 py-3"
                            >
                                <div class="flex items-center">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-settings"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                    <span class="text-sm ml-2">设置</span>
                                </div>
                            </li>
                        </router-link>
                    </ul>
                    <div class="flex items-center mt-32 mb-4 px-8">
                        <div class="w-10 h-10 bg-cover rounded-md mr-3">
                            <img
                                    :src=avatar
                                    alt
                                    class="rounded-full h-full w-full overflow-hidden shadow"
                            />
                        </div>
                        <div>
                            <p class="text-gray-400 text-sm font-medium">{{name}}</p>
                            <p class="text-gray-400 text-xs">{{uid}}</p>
                        </div>
                    </div>
                </div>
                <div class="px-8 bg-blue-800">
                    <ul class="w-full flex items-center justify-between">
                        <router-link to="/student/quest">
                            <li class="cursor-pointer text-white pt-5 pb-3">
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
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                            d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                                    />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                </svg>
                            </li>
                        </router-link>
                        <li class="cursor-pointer text-white pt-5 pb-3">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-messages"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <path
                                        d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
                                />
                                <path
                                        d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
                                />
                            </svg>
                        </li>
                        <router-link to="/student/settings">
                            <li class="cursor-pointer text-white pt-5 pb-3">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-settings"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </li>
                        </router-link>
                        <li class="cursor-pointer text-white pt-5 pb-3">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-archive"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <rect x="3" y="4" width="18" height="4" rx="2"/>
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/>
                                <line x1="10" y1="12" x2="14" y2="12"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                    id="openSideBar"
                    class="h-10 w-10 bg-indigo-900 mt-2 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
                    v-on:click="sidebarHandler()"
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-adjustments"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#FFFFFF"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="6" cy="10" r="2"/>
                    <line x1="6" y1="4" x2="6" y2="8"/>
                    <line x1="6" y1="12" x2="6" y2="20"/>
                    <circle cx="12" cy="16" r="2"/>
                    <line x1="12" y1="4" x2="12" y2="14"/>
                    <line x1="12" y1="18" x2="12" y2="20"/>
                    <circle cx="18" cy="7" r="2"/>
                    <line x1="18" y1="4" x2="18" y2="5"/>
                    <line x1="18" y1="9" x2="18" y2="20"/>
                </svg>
            </div>
        </div>
    </div>
    <!--Mobile responsive sidebar-->
    <!-- Sidebar ends -->
</template>

<script>
    export default {
        name: "student-sidebar",
        data: function () {
            return {
                menu: false,
                avatar: '',
                name: '',
                uid: '',
            };
        },
        created() {
            this.avatar = this.$store.state.avatar
            this.name = this.$store.state.name
            this.uid = this.$store.state.uid
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


    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>


