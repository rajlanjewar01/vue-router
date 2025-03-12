// import createWebHistory and createRouter from vue-router package/library
import {  createRouter, createWebHistory } from 'vue-router';

// import the component that you want to route through
import homePage from '@/components/pages/HomePage';
import aboutPage from '@/components/pages/AboutPage';
import notFound from '@/components/pages/NotFound';
import dynamicPage from '@/components/pages/DynamicPage';

// define route constant
const routes = [
		{ path: '/', component: homePage },
		{ path: '/about', component: aboutPage },
		{ path: '/page/:id', component: dynamicPage },
		{ path: '/:pathMatch(.*)*', component: notFound }
	];

// configure your route
export const router = createRouter({
	history: createWebHistory(),
	routes,
});
