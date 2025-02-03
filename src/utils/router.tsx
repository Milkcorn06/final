import { Routes, Route } from 'react-router';
import App from '@/layout/app';
import Home from '@/pages/home';
import Pricing from '@/pages/pricing';
import Gallery from '@/pages/gallery';
import About from '@/pages/about';
import Auth from '@/pages/auth';
import Error from '@/pages/error';

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<App />}>
				<Route index element={<Home />} />
				<Route path='pricing' element={<Pricing />} />
				<Route path='gallery' element={<Gallery />} />
				<Route path='about' element={<About />} />
				<Route path='login' element={<Auth />} />
				<Route path='*' element={<Error />} />
			</Route>
		</Routes>
	);
};
