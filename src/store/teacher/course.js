import api from '../../http/index'
const course = {
    state: {
        course: [],
        courseDelete: [],
        courseList: []
        // each_course = {
        //     academy: '测试与光电工程学院',
        //     name: '高等数学',
        //     describe: '',
        //     term: '2020上学期',
        //     limit: 10,
        //     teacher: 'Louis',
        //     phone: '17369661665',
        //     avatar: 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png',
        // }
    },
    mutations: {
        course(state, data) {
            state.course = []
            state.courseDelete = []
            data.forEach(course => {
                if (course.is_delete === false) {
                    state.course.push(course)
                } else {
                    state.courseDelete.push(course)
                }
            })
        },
        courseList(state, data) {
            state.courseList = data
        }
    },
    actions: {
        courseList({ state, commit, rootState }) {
            let courseList = []
            state.course.forEach(course => {
                let each_course = {
                    academy: '测试与光电工程学院',
                    name: course.name,
                    describe: course.describe,
                    term: course.term,
                    limit: course.limit,
                    teacher: rootState.name,
                    phone: rootState.phone,
                    avatar: rootState.avatar,
                }
                courseList.push(each_course)
            })
            commit('courseList', courseList)
        }
    },
    modules: {
    }
}
export default course
