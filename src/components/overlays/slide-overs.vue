<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
      <div class="absolute inset-0 overflow-hidden">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="relative w-96">
              <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                    <span class="sr-only">Close panel</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="h-full bg-white p-8 overflow-y-auto">
                <div class="pb-16 space-y-6">
                  <div>
                    <div class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img :src="wallpaper" alt="" class="object-cover" />
                    </div>
                    <div class="mt-4 flex items-start justify-between">
                      <div>
                        <h2 class="text-lg font-medium text-gray-900">
                          <span class="sr-only">课程 </span>
                          {{ title }}
                        </h2>
                        <p class="text-sm font-medium text-gray-500">
                          {{ time }}
                        </p>
                      </div>
<!--                      <button type="button" class="ml-4 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">-->
<!--                        <HeartIcon class="h-6 w-6" aria-hidden="true" />-->
<!--                        <span class="sr-only">Favorite</span>-->
<!--                      </button>-->
                    </div>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">详情</h3>
                    <dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">课程</dt>
                        <dd class="text-gray-900">{{ title }}</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">时间</dt>
                        <dd class="text-gray-900">{{ time }}</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">时长</dt>
                        <dd class="text-gray-900">{{ duration_time }}小时</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">具体日期</dt>
                        <dd class="text-gray-900">{{ date }}</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">地点</dt>
                        <dd class="text-gray-900">{{ location }}</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">参加人数</dt>
                        <dd class="text-gray-900">{{ attendees }}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">描述</h3>
                    <div class="mt-2 flex items-center justify-between">
                      <p class="text-sm text-gray-500 italic">{{ describe }}</p>
<!--                      <button type="button" class="-mr-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">-->
<!--                        <PencilIcon class="h-5 w-5" aria-hidden="true" />-->
<!--                        <span class="sr-only">Add description</span>-->
<!--                      </button>-->
                    </div>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">授课老师</h3>
                    <ul role="list" class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      <li class="py-3 flex justify-between items-center">
                        <div class="flex items-center">
                          <img :src="teacher_avatar" alt="" class="w-8 h-8 rounded-full" />
                          <p class="ml-4 text-sm font-medium text-gray-900">{{ teacher_name }}</p>
                        </div>
                        <button type="button" class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          {{ teacher_name }}
                          <span class="sr-only"></span>
                        </button>
                      </li>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">手机号：</dt>
                        <dd class="text-gray-900">{{ teacher_phone }}</dd>
                      </div>
                      <div class="py-3 flex justify-between text-sm font-medium">
                        <dt class="text-gray-500">邮箱</dt>
                        <dd class="text-gray-900">{{ teacher_email }}</dd>
                      </div>
<!--                      <li class="py-2 flex justify-between items-center">-->
<!--                        <button type="button" class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500">-->
<!--                          <span class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">-->
<!--                            <PlusIcon class="h-5 w-5" aria-hidden="true" />-->
<!--                          </span>-->
<!--                          <span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">Share</span>-->
<!--                        </button>-->
<!--                      </li>-->
                    </ul>
                  </div>
                  <div class="flex">
                    <button type="button" class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      确定
                    </button>
                    <button type="button" class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      取消
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { HeartIcon, XIcon } from '@heroicons/vue/outline'
import { PencilIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    HeartIcon,
    PencilIcon,
    PlusIcon,
    XIcon,
  },
  props: {
    open: Boolean,
    time: String,
    date: String,
    duration_time: String,
    title: String,
    describe: String,
    attendees: Number,
    location: String,
    wallpaper: String,
    teacher_id: String,
    teacher_name: String,
    teacher_phone: String,
    teacher_email: String,
    teacher_avatar: String,
  }
}
</script>
