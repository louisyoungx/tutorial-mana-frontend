<template>
    <container-body>

        <teacher-sidebar/>

        <container-content>
            <!--日期-->
            <header-data :date="'2020-09-20'"/>
            <!--帮扶数据-->
            <teacher-header :activity=tutorialData.activity :single=tutorialData.single :total=tutorialData.total :course=tutorialData.course />

            <!--现有帮扶活动-->
            <content-full>
                <content-container title="发起的帮扶活动">
                    <tutorial-activity-card
                            v-for="active in tutorialActivity"
                            :time="active.time"
                            :date="active.date"
                            :title="active.title"
                            :attendees="active.attendees"
                            :describe="active.describe"
                            :location="active.location"
                            :wallpaper="active.wallpaper"
                            :avatar="active.avatar"
                            :type="'teacher'"
                    />
                </content-container>
            </content-full>

            <content-half>

                <div>
                    <content-container title="创建的课程">
                        <course-card
                                v-for="course in courses"
                                :academy="course.academy"
                                :name="course.name"
                                :describe="course.describe"
                                :term="course.term"
                                :limit="course.limit"
                                :teacher="course.teacher"
                                :phone="course.phone"
                                :avatar="course.avatar"
                        />
                    </content-container>

                </div>

                <div>
                    <content-container title="学生请求帮扶">
                        <student-quest-card
                                v-for="quest in studentQuest"
                                :uid="quest.uid"
                                :name="quest.name"
                                :tel="quest.tel"
                                :email="quest.email"
                                :expectTime="quest.expectTime"
                                :avatar="quest.avatar"
                        />
                    </content-container>
                    <content-container title="帮扶日程">
                        <tutorial-accept-card/>
                    </content-container>
                </div>

            </content-half>

        </container-content>
    </container-body>
</template>

<script>

    import TeacherSidebar from "../../components/sidebar/teacher-sidebar";
    import HeaderData from "../../components/header/header-data";
    import TeacherHeader from "../../components/header/teacher-header";
    import DashModes from "../../components/dash/dash-modes";
    import DashTask from "../../components/dash/dash-task";
    import DashTrending from "../../components/dash/dash-trending";
    import CourseCard from "../../components/course/course-card";
    import TutorialActivityCard from "../../components/tutorial/tutorial-activity-card";
    import ContainerBody from "../../components/container/container-body";
    import ContainerContent from "../../components/container/container-content";
    import ContentFull from "../../components/container/content-full";
    import ContentHalf from "../../components/container/content-half";
    import ContentContainer from "../../components/container/content-container";
    import StudentQuestCard from "../../components/student/student-quest-card";
    import TutorialAcceptCard from "../../components/tutorial/tutorial-accept-card";

    export default {
        name: "TeacherHome",
        components: {
            TutorialAcceptCard,
            StudentQuestCard,
            ContentContainer,
            ContentHalf,
            ContentFull,
            ContainerContent,
            ContainerBody,
            TutorialActivityCard, CourseCard, DashTrending, DashTask, DashModes, TeacherHeader, HeaderData, TeacherSidebar
        },
        data: function () {
            return {
                tutorialData: {
                    activity: 0,
                    single: 0,
                    total: 0,
                    course: 0
                },
                tutorialActivity: [
                    {
                        time: '19:00:00',
                        date: '2021-09-01  19:00:00',
                        title: '高等数学 - 赵老师',
                        describe: '高等数学，线性代数',
                        attendees: 10,
                        location: 'A教学楼',
                        wallpaper: 'https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png',
                        avatar: [
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg',
                        ]
                    },
                    {
                        time: '19:00:00',
                        date: '2021-09-01  19:00:00',
                        title: '高等数学 - 赵老师',
                        describe: '高等数学，线性代数',
                        attendees: 10,
                        location: 'A教学楼',
                        wallpaper: 'https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png',
                        avatar: [
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg',
                            'https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg',
                        ]
                    },
                ],
                courses: [
                    {
                        academy: '测试与光电工程学院',
                        name: '高等数学',
                        describe: '',
                        term: '2020上学期',
                        limit: 10,
                        teacher: 'Louis',
                        phone: '17369661665',
                        avatar: 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png',
                    },
                    {
                        academy: '测试与光电工程学院',
                        name: '高等数学',
                        describe: '',
                        term: '2020上学期',
                        limit: 10,
                        teacher: 'Louis',
                        phone: '17369661665',
                        avatar: 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png',
                    },
                ],
                studentQuest: [
                    {
                        uid: '18085132',
                        name: '曾建雄',
                        tel: '18278654592',
                        email: '1382736598@qq.com',
                        expectTime: '2021/09/21-19:00',
                        avatar: 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png'
                    },
                    {
                        uid: '18085132',
                        name: '曾建雄',
                        tel: '18278654592',
                        email: '1382736598@qq.com',
                        expectTime: '2021/09/21-19:00',
                        avatar: 'https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png'
                    },
                ],
            };
        },
        methods: {},
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    body {
        font-family: "Lato", sans-serif;
    }

</style>

