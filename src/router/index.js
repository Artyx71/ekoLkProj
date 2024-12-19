import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '../components/Contracts.vue'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
	{
		path: '/',
		redirect: '/login', // перенаправляем на /login при заходе на корень
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '',
				name: 'Contracts',
				component: Contracts,
			},
		],
	},
	,
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
