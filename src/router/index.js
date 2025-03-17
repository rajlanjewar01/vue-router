// import createWebHistory and createRouter from vue-router package/library
import {  createRouter, createWebHistory } from 'vue-router';

// import the component that you want to route through
import homePage from '@/components/pages/HomePage';
import notFound from '@/components/pages/NotFound';
import dynamicPage from '@/components/pages/DynamicPage';
// import reviewPage from '@/components/pages/ReviewPage';
import terminatorDB from '@/components/TerminatorCard';
import terminatorT1000 from '@/components/pages/terminatorDB/TerminatorT1000';
import terminatorTRev9 from '@/components/pages/terminatorDB/TerminatorRev9';
import terminatorT800 from '@/components/pages/terminatorDB/TerminatorT800';
import terminatorT3000 from '@/components/pages/terminatorDB/TerminatorT3000';
import terminatorTx from '@/components/pages/terminatorDB/TerminatorTx';

// define route constant
const routes = [
	{ path: '/', component: homePage },
	{
		path: '/terminatorDB',
		component: terminatorDB
	},
	{ path: '/page/:id', component: dynamicPage },
	{ path: '/:pathMatch(.*)*', component: notFound },
	{ path: '/terminatorDB/t1000', component: terminatorT1000 },
	{ path: '/terminatorDB/rev9', component: terminatorTRev9 },
	{ path: '/terminatorDB/t800', component: terminatorT800 },
	{ path: '/terminatorDB/tx', component: terminatorTx },
	{ path: '/terminatorDB/t3000', component: terminatorT3000 }
];

// configure your route
export const router = createRouter({
	history: createWebHistory(),
	routes
});
