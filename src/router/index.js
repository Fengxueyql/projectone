import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'
Vue.use(VueRouter)

//配置路由
//每一个路由是一个对象
//3个基础属性 path:路径 name：名字 compoment：渲染的组件
const routes = [{
        // /代表根路径 没有任何的路径
        // 都代表首页
        path: '',
        //这是登录页面
        component: layout,
        children: [{
                path: '',
                name: 'Home', //这是登录后的首页
                // 除了首页 其他路由的component都用路由懒加载的方式
                component: home,

                meta: {
                    title: '首页'
                }
            },
            {
                path: '/published',
                name: 'publish', //这是已发布页面
                component: () =>
                    import ('../views/published/published'),
                meta: {
                    title: '已发布'
                }
            },
            {
                path: '/count',
                name: 'count', //这是统计页面
                component: () =>
                    import ('../views/count/count'),
                meta: {
                    title: '统计页面'
                }
            },
            {
                path: '/article',
                name: 'article', //这是发表文章页面
                component: () =>
                    import ('../views/article/article'),
                meta: {
                    title: '发表文章'
                }
            },
            {
                path: '/tab',
                name: 'tab', //这是标签页面
                component: () =>
                    import ('../views/tab/tab'),
                meta: {
                    title: '标签页'
                }
            },
            {
                path: '/exceal',
                name: 'exceal', //这是导出excel页面
                component: () =>
                    import ('../views/exceal/exceal'),
                meta: {
                    title: '导出excel'
                }
            },
            {
                path: '/picture',
                name: 'picture', //这是图片上传页面
                component: () =>
                    import ('../views/pictureupload/pictureupload'),
                meta: {
                    title: '图片上传'
                }
            },
            {
                path: '/quit',
                name: 'quit', //这是退出系统页面
                component: () =>
                    import ('../views/quit/quit.vue'),
                meta: {
                    title: '退出'
                }

            },
        ]
    },
    {
        path: '/login',
        name: 'login', //这是登录页面
        component: () =>
            import ('../views/login/login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/zhuce',
        name: 'zhuce', //这是注册系统页面
        component: () =>
            import ('../views/login/zhuce'),
        meta: {
            title: '注册'
        }
    },
    //所有路由之后最后 配置一个错误路由
    {
        path: "*", //如果我之前的都没有匹配到,就会匹配到这个*的路由
        component: () =>
            import ('../views/404/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    let user = localStorage.getItem('user')
    if (to.path === '/login' || to.path === '/zhuce') { next() } else {
        console.log(user);
        user ? next() : (next('/login') || next('/zhuce'))
    }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router