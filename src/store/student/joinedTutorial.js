import api from '../../http/index'
const joinedTutorial = {
    state: {
        joinedTutorialList: [],
        joinedTutorialDict: {},
    },
    mutations: {
        joinedTutorial(state, data) {
            state.joinedTutorialList = data
            state.joinedTutorialDict = {}
            data.forEach(joinedTutorial => {
                state.joinedTutorialDict[joinedTutorial.course_id] = joinedTutorial
            })
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedTutorial
