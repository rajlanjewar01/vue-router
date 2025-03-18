import {  createRouter, createWebHistory } from 'vue-router';

import homePage from '@/components/pages/HomePage';
import notFound from '@/components/pages/NotFound';
import terminatorDB from '@/components/TerminatorCard';
import terminatorT1000 from '@/components/pages/terminatorDB/TerminatorT1000';
import terminatorTRev9 from '@/components/pages/terminatorDB/TerminatorRev9';
import terminatorT800 from '@/components/pages/terminatorDB/TerminatorT800';
import terminatorT3000 from '@/components/pages/terminatorDB/TerminatorT3000';
import terminatorTx from '@/components/pages/terminatorDB/TerminatorTx';

const routes = [
	{ path: '/', component: homePage },
	{ path: '/terminatorDB', component: terminatorDB },
	/** 404 Not Found */
	{ path: '/:pathMatch(.*)*', component: notFound }, // Catch-all for 404 Not Found,
	/*
	{
		path: '/some-other-page',
		redirect: '/', // 302 Redirect from /home to /
	},
	*/
	{ path: '/terminatorDB/:terminator?name=raj', component: terminatorT1000 }, // with parameter
	{ path: '/terminatorDB/:terminator', component: terminatorTRev9 },
	{ path: '/terminatorDB/:terminator', component: terminatorT800 },
	{ path: '/terminatorDB/:terminator', component: terminatorTx },
	{ path: '/terminatorDB/:terminator', component: terminatorT3000 }
];

export const router = createRouter({
	history: createWebHistory(),
	routes
});
