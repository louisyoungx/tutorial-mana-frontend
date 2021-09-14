import api from '../../http/index'
const student = {
    state: {
        courseSelect: [],
        courseSelected: [],
        courseUnSelected: [],

        tutorialSelect: [],
        tutorialSelected: [],
        tutorialUnSelected: [],

        tutorialData: {
            activity: undefined,
            single: undefined,
            total: undefined,
            course: undefined,
        },
    },
    mutations: {
        courseSelect(state, data) {
            state.courseSelect = data
        },

        tutorialSelect(state, data) {
            state.tutorialSelect = data
        }
    },

    actions: {
        courseSelecting({ state, commit, rootState }) {
            state.courseSelected = []
            state.courseUnSelected = []
            state.courseSelect.forEach(course => {
                course.academy = '测试与光电工程学院'
                if (rootState.joinedCourse.joinedCourseDict[course.id] !== undefined) {
                    course.select_id = Number(rootState.joinedCourse.joinedCourseDict[course.id].id)
                    state.courseSelected.push(course)
                } else {
                    course.select_id = -1
                    state.courseUnSelected.push(course)
                }
            })
        },

        tutorialFormat({ state, commit, rootState }) {
            let tutorialSelect = []
            state.tutorialSelect.forEach(tutorial => {
                if (tutorial.is_delete === false) {
                    let start_time = transformTimestamp(tutorial.start_time)
                    let now_time = new Date()
                    let active = true
                    if (now_time > new Date(tutorial.start_time)) {
                        active = false
                    }
                    let each_tutorial = {
                        id: tutorial.id,
                        course_id: tutorial.course_id,
                        day: start_time.dayString,
                        time: start_time.timeString,
                        duration_time: tutorial.duration_time,
                        date: start_time.dateString,
                        active: active,
                        title: tutorial.course_name + '-' + tutorial.teacher_name,
                        course_name: tutorial.course_name,
                        teacher_id: tutorial.teacher_id,
                        teacher_name: tutorial.teacher_name,
                        teacher_email: tutorial.teacher_email,
                        teacher_phone: tutorial.teacher_phone,
                        teacher_avatar: tutorial.teacher_avatar,
                        describe: tutorial.describe,
                        attendees: tutorial.joined_num,
                        location: tutorial.place,
                        wallpaper: tutorial.wallpaper,
                        avatar: [
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                        ]
                    }
                    tutorialSelect.push(each_tutorial)
                }
            })

            commit('tutorialSelect', tutorialSelect)

            function transformTimestamp(timestamp){
                //将“2021-07-06T06:23:57.000+00:00” ，转换为2021-07-06 14:23:57
                let a = new Date(timestamp).getTime()
                const date = new Date(a)
                const Y = date.getFullYear() + '-'
                const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
                const D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
                const h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':'
                const m = (date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes()) + ':'
                const s = (date.getSeconds() <10 ? '0'+date.getSeconds() : date.getSeconds())
                const dayString = Y + M + D
                const timeString = h + m + s
                const dateString = dayString + '  ' + timeString
                // console.log('dateString', dateString) // > dateString 2021-07-06 14:23:57
                return {dayString, timeString, dateString}
            }
        },

        tutorialSelecting({ state, commit, rootState }) {
            let tutorialSelected = []
            let tutorialUnSelected = []
            state.tutorialSelect.forEach(tutorial => {
                if (rootState.joinedCourse.joinedCourseDict[tutorial.course_id] !== undefined) {
                    if (rootState.joinedTutorial.joinedTutorialDict[tutorial.id] !== undefined) {
                        tutorial.select_id = Number(rootState.joinedTutorial.joinedTutorialDict[tutorial.id].id)
                        tutorialSelected.push(tutorial)
                    } else {
                        tutorial.select_id = -1
                        tutorialUnSelected.push(tutorial)
                    }
                } else {
                    state.tutorialSelect.pop(tutorial)
                }
            })
            state.tutorialSelected = tutorialSelected
            state.tutorialUnSelected = tutorialUnSelected
        },

        tutorialCollect({ state, commit, rootState }) {
            let tutorialData = {}
            tutorialData.activity = state.tutorialSelected.length
            tutorialData.single = 0
            tutorialData.total = tutorialData.activity + tutorialData.single
            tutorialData.course = state.courseSelected.length
            state.tutorialData = tutorialData
        },

    },
    modules: {
    }
}
export default student
