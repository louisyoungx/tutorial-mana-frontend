import api from '../../http/index'
const joinedCourse = {
    state: {
        joinedCourse: []
    },
    mutations: {
        joinedCourse(state, data) {
            state.joinedCourse = data
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedCourse
