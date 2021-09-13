import api from '../../http/index'
const joinedCourse = {
    state: {
        joinedCourseList: [],
        joinedCourseDict: {},
    },
    mutations: {
        joinedCourse(state, data) {
            state.joinedCourseList = data
            state.joinedCourseDict = {}
            data.forEach(joinedCourse => {
                state.joinedCourseDict[joinedCourse.course_id] = joinedCourse
            })
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedCourse
