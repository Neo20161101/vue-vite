import { createRouter, createWebHistory } from 'vue-router'

// 引入组件
import home from "../view/home/index.vue";
const Login = () => import('../view/user/login.vue')
const notfound = () => import('../notfound/404.vue')

const routes = [
    {
        path: "/",
        component: home,
        children: [
            {
                // 当 /home 匹配成功，
                // UserProfile 会被渲染在 User 的 <index-view> 中
                path: 'home',
                component: () => import('../view/tacos/index.jsx')
            },
            // 重定向
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: '*',
                component: notfound
            }
        ]
    },
    {
        path: "/login",
        component: Login
    },
    // {
    //     path: '*',
    //     component: notfound
    // }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const index = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
export default index;