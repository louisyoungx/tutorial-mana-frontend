import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Teacher/Home'
import SignIn from '../views/Sign-in'
const  SignUp = () => import('../views/Sign-up')
const  TeacherHome = () => import('../views/Teacher/Home')
const  TeacherQuest = () => import('../views/Teacher/Quest')
const  TeacherSettings = () => import('../views/Teacher/Settings')
const  TeacherStudent = () => import('../views/Teacher/Student')
const  TeacherCourse = () => import('../views/Teacher/Course')
const  TeacherTutorial = () => import('../views/Teacher/Tutorial')
const  CreateCourse = () => import('../views/Teacher/Create/CreateCourse')
const  CreateTutorial = () => import('../views/Teacher/Create/CreateTutorial')
const  StudentHome = () => import('../views/Student/Home')
const  StudentQuest = () => import('../views/Student/Quest')
const  StudentSettings = () => import('../views/Student/Settings')
const  StudentTeacher = () => import('../views/Student/Teacher')
const  StudentCourse = () => import('../views/Student/Course')
const  StudentTutorial = () => import('../views/Student/Tutorial')
const  AppendCourse = () => import('../views/Student/Append/AppendCourse')
const  AppendTutorial = () => import('../views/Student/Append/AppendTutorial')

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
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
    path: '/teacher/course',
    name: 'TeacherCourse',
    component: TeacherCourse
  },
  {
    path: '/teacher/tutorial',
    name: 'TeacherTutorial',
    component: TeacherTutorial
  },
  {
    path: '/teacher/create/course',
    name: 'CreateCourse',
    component: CreateCourse
  },
  {
    path: '/teacher/create/tutorial',
    name: 'CreateTutorial',
    component: CreateTutorial
  },
  {
    path: '/student/home-page',
    name: 'StudentHome',
    component: StudentHome
  },
  {
    path: '/student/quest',
    name: 'StudentQuest',
    component: StudentQuest
  },
  {
    path: '/student/settings',
    name: 'StudentSettings',
    component: StudentSettings
  },
  {
    path: '/student/teacher',
    name: 'StudentTeacher',
    component: StudentTeacher
  },
  {
    path: '/student/course',
    name: 'StudentCourse',
    component: StudentCourse
  },
  {
    path: '/student/tutorial',
    name: 'StudentTutorial',
    component: StudentTutorial
  },
  {
    path: '/student/append/course',
    name: 'AppendCourse',
    component: AppendCourse
  },
  {
    path: '/student/append/tutorial',
    name: 'AppendTutorial',
    component: AppendTutorial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
