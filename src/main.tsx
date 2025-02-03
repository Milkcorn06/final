import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppRouter } from '@/utils/router';
import { Toaster } from 'react-hot-toast';
import '@/assets/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AppRouter />
			<Toaster
				position='top-right'
				toastOptions={{
					duration: 3000,
					style: {
						background: '#000',
						color: '#fff',
						border: '1px solid #fff',
					},
					success: {
						iconTheme: {
							primary: '#fff',
							secondary: '#000',
						},
					},
					error: {
						iconTheme: {
							primary: '#fff',
							secondary: '#000',
						},
					},
					loading: {
						iconTheme: {
							primary: '#fff',
							secondary: '#000',
						},
					},
				}}
			/>
		</BrowserRouter>
	</StrictMode>,
);
