import api from '../../http/index'
const joinedCourse = {
    state: {
        joinedCourse: [],
        joinedCourseList: [],
        joinedCourseDict: {},
    },
    mutations: {
        joinedCourse(state, data) {
            state.joinedCourse = data
            state.joinedCourseList = []
            state.joinedCourseDict = {}
            data.forEach(joinedCourse => {
                if (joinedCourse.is_delete === false) {
                    state.joinedCourseDict[joinedCourse.course_id] = joinedCourse
                    state.joinedCourseList.push(joinedCourse)
                }
            })
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedCourse
