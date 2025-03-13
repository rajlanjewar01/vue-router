// import createWebHistory and createRouter from vue-router package/library
import {  createRouter, createWebHistory } from 'vue-router';

// import the component that you want to route through
import aboutPage from '@/components/pages/AboutPage';
import notFound from '@/components/pages/NotFound';
import dynamicPage from '@/components/pages/DynamicPage';
import reviewPage from '@/components/pages/ReviewPage';
import terminatorCard from '@/components/TerminatorCard';

// define route constant
const routes = [
	{ path: '/', component: terminatorCard },
	{
		path: '/about',
		component: aboutPage,
		children: [
			{
				path: 'review',
				component: reviewPage
			}
		]
	},
	{ path: '/page/:id', component: dynamicPage },
	{ path: '/:pathMatch(.*)*', component: notFound }
];

// configure your route
export const router = createRouter({
	history: createWebHistory(),
	routes
});
