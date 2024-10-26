import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const RootLayout = lazy(() => import('@/components/layouts/RootLayout'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));

const publicRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

export { publicRouter };
