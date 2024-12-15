import { createRouter, createWebHistory } from 'vue-router'

// import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
