import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import teacher from "./teacher/index";
import course from "./teacher/course";
import tutorial from "./teacher/tutorial";
import student from "./student/index"
import joinedCourse from "./student/joinedCourse";
import joinedTutorial from "./student/joinedTutorial";

export default createStore({
    state: {
        type: undefined,
        id:undefined,
        uid: undefined,
        avatar: undefined,
        email: undefined,
        name: undefined,
        phone: undefined,
        location: undefined,
        wechat_id: undefined
    },
    mutations: {
        type(state, type) {
            state.type = type
        },
        init(state, data) {
            console.log(state, data)
            state.id = data.id
            state.uid = data.uid
            state.avatar = data.avatar
            state.email = data.email
            state.name = data.name
            state.phone = data.phone
            state.location = data.location
            state.wechat_id = data.wechat_id
        },
    },
    actions: {
        update(context) {

        }
    },
    modules: {
        teacher,
        course,
        tutorial,
        student,
        joinedCourse,
        joinedTutorial
    },
    plugins:[
        createPersistedState()
    ],
})
