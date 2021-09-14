import api from '../../http/index'
const tutorial = {
    state: {
        tutorial: [],
        tutorialDelete: [],
        tutorialData: {
            activity: undefined,
            single: undefined,
            total: undefined,
            course: undefined,
        },
        totalNum: 0,
        tutorialActivity: []
            // {
            //     time: '19:00:00',
            //     date: '2021-09-01  19:00:00',
            //     title: '高等数学 - 赵老师',
            //     describe: '高等数学，线性代数',
            //     attendees: 10,
            //     location: 'A教学楼',
            //     wallpaper: 'https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png',
            //     avatar: [
            //         'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg',
            //         'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg',
            //         'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg',
            //         'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg',
            //         'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg',
            //     ]
            // }

    },
    mutations: {
        tutorial(state, data) {
            state.tutorial = []
            state.tutorialDelete = []
            data.forEach(tutorial => {
                if (tutorial.is_delete === false) {
                    state.tutorial.push(tutorial)
                } else {
                    state.tutorialDelete.push(tutorial)
                }
            })
        },
        tutorialData(state, data) {
            state.tutorialData = data
        },
        totalNum(state, data) {
            state.totalNum = data
        },
        tutorialActivity(state, data) {
            state.tutorialActivity =data
        }
    },
    actions: {
        tutorialActivity({ state, commit, rootState }) {
            let tutorialActivity = []
            let totalNum = 0
            state.tutorial.forEach(activity => {
                if (activity.is_delete === false) {
                    totalNum += activity.joined_num
                    let start_time = transformTimestamp(activity.start_time)
                    let now_time = new Date()
                    let active = true
                    if (now_time > new Date(activity.start_time)) {
                        active = false
                    }
                    let each_activity = {
                        id: activity.id,
                        course_id: activity.course_id,
                        day: start_time.dayString,
                        time: start_time.timeString,
                        duration_time: activity.duration_time,
                        date: start_time.dateString,
                        active: active,
                        title: activity.course_name + '-' + activity.teacher_name,
                        course_name: activity.course_name,
                        teacher_id: activity.teacher_id,
                        teacher_name: activity.teacher_name,
                        teacher_email: activity.teacher_email,
                        teacher_phone: activity.teacher_phone,
                        teacher_avatar: activity.teacher_avatar,
                        describe: activity.describe,
                        attendees: activity.joined_num,
                        location: activity.place,
                        wallpaper: activity.wallpaper,
                        avatar: [
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                            'http://www.louisyoung.site:8002/TutorialManage/avatar.jpg',
                        ]
                    }
                    tutorialActivity.push(each_activity)
                }
            })
            commit('tutorialActivity', tutorialActivity)
            commit('totalNum', totalNum)

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

        tutorialData({ state, commit, rootState }) {
            let tutorialData = {}
            tutorialData.activity = state.tutorialActivity.length
            tutorialData.single = 0
            tutorialData.total = state.totalNum + state.tutorialData.single
            tutorialData.course = rootState.course.courseList.length
            commit('tutorialData', tutorialData)
        }
    },
    modules: {
    },
}
export default tutorial
