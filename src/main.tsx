import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layouts/Layout';
import './main.css';
import LongBreak from './pages/LongBreak/LongBreak';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import ShortBreak from './pages/ShortBreak/ShortBreak';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/pomodoro',
				element: <Pomodoro />,
			},
			{
				path: '/short-break',
				element: <ShortBreak />,
			},
			{
				path: '/long-break',
				element: <LongBreak />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
