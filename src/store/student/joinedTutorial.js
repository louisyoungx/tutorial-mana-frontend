import api from '../../http/index'
const joinedTutorial = {
    state: {
        joinedTutorial: []
    },
    mutations: {
        joinedTutorial(state, data) {
            state.joinedTutorial = data
        }
    },
    actions: {
    },
    modules: {
    }
}
export default joinedTutorial
