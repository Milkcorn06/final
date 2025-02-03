import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faLock,
	faArrowRight,
	faEye,
	faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router';
import toast from 'react-hot-toast';

interface LoginFormData {
	email: string;
	password: string;
}

const Auth: React.FC = () => {
	const [formData, setFormData] = useState<LoginFormData>({
		email: '',
		password: '',
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.email.includes('@')) {
			toast.error('Please enter a valid email address');
			return;
		}

		if (formData.password.length < 6) {
			toast.error('Password must be at least 6 characters long');
			return;
		}

		const loginPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					formData.email === 'conm@gmail.com' &&
					formData.password === '123456'
				) {
					resolve('Login successful');
				} else {
					reject(new Error('Invalid credentials'));
				}
			}, 2000);
		});

		toast.promise(loginPromise, {
			loading: 'Signing in...',
			success: 'Welcome back!',
			error: 'Invalid email or password',
		});

		try {
			await loginPromise;
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='flex min-h-[80vh] w-full items-center justify-center px-4'>
			<div className='w-full max-w-md space-y-8'>
				<div className='text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
						Welcome back
					</h2>
					<p className='mt-2 text-sm text-gray-600'>
						Dont have an account?{' '}
						<NavLink
							to='/register'
							className='font-medium text-black underline underline-offset-2 hover:text-gray-800'
							tabIndex={-1}
						>
							Sign up
						</NavLink>
					</p>
				</div>

				<form onSubmit={handleSubmit} className='mt-8 space-y-6'>
					<div className='space-y-4'>
						<div>
							<label htmlFor='email' className='sr-only'>
								Email address
							</label>
							<div className='relative'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
									<FontAwesomeIcon
										icon={faEnvelope}
										className='h-5 w-5 text-gray-400'
									/>
								</div>
								<input
									id='email'
									name='email'
									type='email'
									required
									autoFocus
									tabIndex={1}
									value={formData.email}
									onChange={handleChange}
									className='block w-full rounded-lg border-2 border-gray-200 py-3 pr-4 pl-12 text-black placeholder:text-gray-500 focus:border-black focus:ring-0 focus:outline-none'
									placeholder='Email address'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<div className='relative'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
									<FontAwesomeIcon
										icon={faLock}
										className='h-5 w-5 text-gray-400'
									/>
								</div>
								<input
									id='password'
									name='password'
									type={showPassword ? 'text' : 'password'}
									required
									tabIndex={2}
									value={formData.password}
									onChange={handleChange}
									className='block w-full rounded-lg border-2 border-gray-200 py-3 pr-12 pl-12 text-black placeholder:text-gray-500 focus:border-black focus:ring-0 focus:outline-none'
									placeholder='Password'
								/>
								<button
									type='button'
									onClick={togglePasswordVisibility}
									tabIndex={-1}
									className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4'
								>
									<FontAwesomeIcon
										icon={showPassword ? faEyeSlash : faEye}
										className='h-5 w-5 text-gray-400 hover:text-gray-600'
									/>
								</button>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-end'>
						<NavLink
							to='/forgot-password'
							className='text-sm font-medium text-black underline underline-offset-2 hover:text-gray-800'
							tabIndex={-1}
						>
							Forgot password?
						</NavLink>
					</div>

					<button
						type='submit'
						tabIndex={3}
						className='group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-900 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none'
					>
						<span className='relative flex items-center gap-2'>
							Sign in
							<FontAwesomeIcon
								icon={faArrowRight}
								className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
							/>
						</span>
					</button>

					<div className='text-center text-sm text-gray-500'>
						<p>correct account:</p>
						<p className='font-mono'>Email: conm@gmail.com</p>
						<p className='font-mono'>Password: 123456</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
