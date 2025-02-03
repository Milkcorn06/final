import React, { useEffect } from 'react';
import Header from '@/components/header';
import { Outlet, useLocation } from 'react-router';

const App: React.FC = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-white'>
			<Header />
			<main className='flex w-full grow flex-col items-center pt-20'>
				<div
					className='w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'
					key={location.pathname}
				>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default App;
