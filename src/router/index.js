import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '../Pages/Contracts.vue'
import Counts from '../Pages/Counts.vue'
import Info from '../Pages/Info.vue'
import Mails from '../Pages/Mails.vue'
import Profile from '../Pages/Profile.vue'
import Services from '../Pages/Services.vue'
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
			{
				path: '/mail',
				name: 'Mails',
				component: Mails,
			},
			{
				path: '/services',
				name: 'Services',
				component: Services,
			},
			{
				path: '/counts',
				name: 'Counts',
				component: Counts,
			},
			{
				path: '/info',
				name: 'Info',
				component: Info,
			},
			{
				path: '/profile',
				name: 'profile',
				component: Profile,
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
