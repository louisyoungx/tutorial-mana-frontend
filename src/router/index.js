import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Teacher/Home'
import SignIn from '../views/Sign-in'
const  TeacherHome = () => import('../views/Teacher/Home')
const  TeacherQuest = () => import('../views/Teacher/Quest')
const  TeacherSettings = () => import('../views/Teacher/Settings')
const  TeacherStudent = () => import('../views/Teacher/Student')
const  TeacherTutorial = () => import('../views/Teacher/Tutorial')

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/teacher/home-page',
    name: 'TeacherHome',
    component: TeacherHome
  },
  {
    path: '/teacher/quest',
    name: 'TeacherQuest',
    component: TeacherQuest
  },
  {
    path: '/teacher/settings',
    name: 'TeacherSettings',
    component: TeacherSettings
  },
  {
    path: '/teacher/student',
    name: 'TeacherStudent',
    component: TeacherStudent
  },
  {
    path: '/teacher/tutorial',
    name: 'TeacherTutorial',
    component: TeacherTutorial
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
