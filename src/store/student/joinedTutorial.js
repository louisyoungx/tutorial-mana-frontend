import api from '../../http/index'
const joinedTutorial = {
    state: {
        joinedTutorial: [],
        joinedTutorialList: [],
        joinedTutorialDict: {},
    },
    mutations: {
        joinedTutorial(state, data) {
            state.joinedTutorial = data
            state.joinedTutorialList = []
            state.joinedTutorialDict = {}
            data.forEach(joinedTutorial => {
                if (joinedTutorial.is_delete === false) {
                    state.joinedTutorialDict[joinedTutorial.tutorial_id] = joinedTutorial
                    state.joinedTutorialList.push(joinedTutorial)
                }
            })
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedTutorial
