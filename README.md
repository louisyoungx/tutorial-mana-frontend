# TutorialManaFrontend

## 介绍

##### 学生课业帮扶系统

- 教师端
  - 可以导入课程和学生列表
  - 根据课程发起群体辅导邀约，可以看到接受邀约的学生列表和具体信息
  - 可以看到教师帮扶的人数，以及每门课帮扶的人数
  - （待完成）可以接受学生单独邀约

- 学生端
  - 可以看到参加课程的群体辅导邀约，并决定是否确认
  - （待完成）可以对某课程单独向教师发起单独辅导邀约

## 预览

![mobile-page](./docs/mobile-page.png)

![login-page](./docs/login-page.png)

![截屏2021-09-11 下午10.43.47](./docs/home-page.png)

![tutorial-page](./docs/tutorial-page.png)

## 软件架构

##### 前端 Vue3 / Vue-Cli / VueX / Vue-Router

##### 后端 Django / Rest Framework

##### 数据库mysql

![前端架构 - TutorialManage](./docs/TutorialManage.jpg)

## 后续更新

### v1.0.0
#### v1.0.0-alpha-bug
student.settings的sidebar是teacher的
提示框显示只有1/2
帮扶活动页面avatar被压竖
#### v1.0.0-a1-feat
主页帮扶详情slide
登录状态保持
未登录全局跳转登录
#### v1.0.0-beta-feat
帮扶详情slide按钮可用
#### v1.0.0-stable
课程详情页（slide移植）
#### v1.0.1
帮扶详情页（slide移植）
#### v1.0.2
student搜索查询
#### v1.0.3
student分类查询
#### v1.0.4
tutorial列表批量操作
#### v1.0.5
teacher显示tutorial学生列表

### v1.1.0
#### v1.1.0
tutorial加入人数与确认人数分离
tutorial添加状态，waiting/padding/done/undo
#### v1.1.1
student.tutorial页面增加对超时项目的确认按钮
tutorial未到时间waiting
tutorial时间已过padding
tutorial已完成done
tutorial未完成undo
#### v1.1.2
tutorial活动开始teacher端显示SecretCode
student端填入SecretCode进行签到

### v1.2.0
#### v1.2.0
student发起单独帮扶请求，将结果推送到按钮teacher.home-page
#### v1.2.1
支持消息队列
#### v1.2.2
teacher确定请求
teacher要求更改时间/地点
将回复推送到student
#### v1.2.3
双方可查看Query状态列表
#### v1.2.4
未读消息队列每周发送邮箱

### v2.0.0
#### v2.0.0
微信公众号登录
头像加载
#### v2.0.1
上传课程封面页

## 安装教程

1.  git clone
2.  yarn
3.  yarn start

## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
