# 7.4.2023 Filip
[] v router nemusite importovat kazdu page na zaciatku, kludne to mozte urobit priamo v route, je to tak prehladnejsie a hned vidite aka page je ktory vue file, tu je priklad:
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/HomePage.vue')
	},