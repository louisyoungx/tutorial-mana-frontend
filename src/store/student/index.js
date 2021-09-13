import api from '../../http/index'
const student = {
    state: {
        courseSelect: [],
        courseSelected: [],
        courseUnSelected: [],

        tutorialSelect: [],
        tutorialSelected: [],
        tutorialUnSelected: []
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
                if (rootState.joinedCourse.joinedCourseDict[course.id] !== undefined) {
                    course.select_id = Number(rootState.joinedCourse.joinedCourseDict[course.id].id)
                    state.courseSelected.push(course)
                } else {
                    course.select_id = -1
                    state.courseUnSelected.push(course)
                }
            })
        },

        tutorialSelecting({ state, commit, rootState }) {
            state.tutorialSelected = []
            state.tutorialUnSelected = []
            state.tutorialSelect.forEach(tutorial => {
                if (rootState.joinedCourse.joinedCourseDict[tutorial.course_id] !== undefined) {
                    if (rootState.joinedTutorial.joinedTutorialDict[tutorial.id] !== undefined) {
                        tutorial.select_id = Number(rootState.joinedTutorial.joinedTutorialDict[tutorial.id].id)
                        state.tutorialSelected.push(tutorial)
                    } else {
                        tutorial.select_id = -1
                        state.tutorialUnSelected.push(tutorial)
                    }
                } else {
                    state.tutorialSelect.pop(tutorial)
                }
            })
        }

    },
    modules: {
    }
}
export default student
