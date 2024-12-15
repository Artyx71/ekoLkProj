import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '../components/Contracts.vue'
import Home from '../views/Home.vue'

const routes = [
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
