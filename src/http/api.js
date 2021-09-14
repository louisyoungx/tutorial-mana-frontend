class API {
    DEBUG = true
    front = '/api'

    constructor() {
        if (this.DEBUG) {
            console.log('===== API Loaded =====')
        }
    }


    GET(url, data) {
        url = '/api' + url
        if (url.substr(url.length-1,1) === '/' ) {
            url = url + this.urlParams(data)
        } else {
            url = url + '/' + this.urlParams(data)
        }
        // Default options are marked with *
        return fetch(url, {
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Louis Fetch',
                'content-type': 'application/json'
            },
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => { // parses response to JSON
                let res = response.json()
                if (this.DEBUG) console.log(res)
                return res
            })
            .catch(error => {
                if (this.DEBUG) console.error(error)
                console.error(error)
            })
    }

    POST(url, data) {
        url = '/api' + url
        if (url.substr(url.length-1,1) !== '/' ) {
            url = url + '/'
        }
        // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => { // parses response to JSON
                return response.json().then(res => {
                    if (this.DEBUG) console.log(res)
                    return res
                })
            })
            .catch(error => {
                if (this.DEBUG) console.error(error)
                console.error(error)
            })
    }

    PUT(url, data) {
        url = '/api' + url
        if (url.substr(url.length-1,1) !== '/' ) {
            url = url + '/'
        }
        // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => { // parses response to JSON
                return response.json().then(res => {
                    if (this.DEBUG) console.log(res)
                    return res
                })
            })
            .catch(error => {
                if (this.DEBUG) console.error(error)
                console.error(error)
            })
    }

    DELETE(url, data) {
        url = '/api' + url
        if (url.substr(url.length-1,1) !== '/' ) {
            url = url + '/'
        }
        // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => { // parses response to JSON
                return response.json().then(res => {
                    if (this.DEBUG) console.log(res)
                    return res
                })
            })
            .catch(error => {
                if (this.DEBUG) console.error(error)
                console.error(error)
            })
    }

    urlParams() {
        let obj = arguments[0];
        let prefix = arguments[1];
        if (typeof obj !== "object") return "";
        const attrs = Object.keys(obj);
        return attrs.reduce((query, attr, index) => {
            // 判断是否是第一层第一个循环
            if (index === 0 && !prefix) query += "?";
            if (typeof obj[attr] === "object") {
                const subPrefix = prefix ? `${prefix}[${attr}]` : attr;
                query += this.urlParams(obj[attr], subPrefix);
            } else {
                if (prefix) {
                    query += `${prefix}[${attr}]=${obj[attr]}`;
                } else {
                    query += `${attr}=${obj[attr]}`;
                }
            }
            // 判断是否是第一层最后一个循环
            if (index !== attrs.length - 1) query += "&";
            return query;
        }, "");
    }

    signIn(uid, type) {
        let url = '/' + type
        let data = {
            uid : uid
        }
        return this.GET(url, data)
    }

    signUp(data, type) {
        let url = '/' + type
        return this.POST(url, data)
    }

    changeUser(data, type) {
        let url = '/' + type + `/${data.id}/put`
        // let data = {
        //     "uid": "18085126",
        //     "name": "高级擀面杖",
        //     "avatar": "http://www.louisyoung.site:8002/TutorialManage/avatar.jpg",
        //     "wechat_id": "",
        //     "phone": "17369661665",
        //     "email": "1462648167@qq.com",
        //     "location": "A教学楼402"
        // }
        return this.PUT(url, data)
    }

    update(id, type) {
        if (type === 'teacher') {
            return this.updateTeacher(id)
        }
        else if (type === 'student') {
            return this.updateStudent(id)
        }
    }

    updateTeacher(id) {
        return Promise.all([this.course(id), this.tutorial(id)])
    }

    course(id) {
        let url = '/course/'
        let data = {
            teacher_id : id
        }
        return this.GET(url, data)
    }

    tutorial(id) {
        let url = '/tutorial/'
        let data = {
            teacher_id : id
        }
        return this.GET(url, data)
    }

    updateStudent(id) {
        return Promise.all([this.joinedCourse(id), this.joinedTutorial(id), this.courseSelect(), this.tutorialSelect()])
    }

    joinedCourse(id) {
        let url = '/join-course/'
        let data = {
            student_id : id
        }
        return this.GET(url, data)
    }

    joinedTutorial(id) {
        let url = '/join-tutorial/'
        let data = {
            student_id : id
        }
        return this.GET(url, data)
    }

    courseSelect() {
        let url = '/course/'
        return this.GET(url, {})
    }

    tutorialSelect() {
        let url = '/tutorial/'
        return this.GET(url, {})
    }

    appendCourse(data) {
        let url = '/join-course/'
        // let data = {
        //     "student_id": 1,
        //     "course_id": 8,
        // }
        return this.POST(url, data)
    }

    appendTutorial(data) {
        let url = '/join-tutorial/'
        // let data = {
        //     "student_id": 1,
        //     "tutorial_id": 6,
        // }
        return this.POST(url, data)
    }

    deleteJoinedCourse(id) {
        let url = `/join-course/${id}/delete/`
        return this.DELETE(url, {})
    }

    deleteJoinedTutorial(id) {
        let url = `/join-tutorial/${id}/delete/`
        return this.DELETE(url, {})
    }

    createCourse(data) {
        let url = '/course/'
        // let data = {
        //     "teacher_id": "1",
        //     "name": "近代史纲要",
        //     "wallpaper": "http://www.louisyoung.site:8002/TutorialManage/wallpaper.jpg",
        //     "describe": "没有描述",
        //     "term": "2020-上学期",
        //     "limit": 0
        // }
        return this.POST(url, data)
    }

    createTutorial(data) {
        let url = '/tutorial/'
        // let data = {
        //     "course_id": "8",
        //     "describe": "1808152",
        //     "start_time":"2021-09-05T00:26:00+08:00",
        //     "end_time": "2021-09-06T00:26:00+08:00",
        //     "place": "A栋"
        // }
        return this.POST(url, data)
    }

    deleteCourse(id) {
        let url = `/course/${id}/delete/`
        return this.DELETE(url, {})
    }

    deleteTutorial(id) {
        let url = `/tutorial/${id}/delete/`
        return this.DELETE(url, {})
    }


}

class StudentUrl {
    signIn = '/http/student'
}

class TeacherUrl {
    signIn = '/http/teacher'
}

const student = new StudentUrl()
const teacher = new TeacherUrl()

export default API
