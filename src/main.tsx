import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layouts/Layout';
import './main.css';
import Error from './pages/Error/Error';
import LongBreak from './pages/LongBreak/LongBreak';
import Pomodoro from './pages/Pomodoro/Pomodoro';
import ShortBreak from './pages/ShortBreak/ShortBreak';

//Роутинг
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
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
	{
		path: '*',
		element: <Error />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
