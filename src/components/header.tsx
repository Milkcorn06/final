import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faTags,
	faImages,
	faInfoCircle,
	faUser,
	faChevronRight,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface NavItem {
	label: string;
	path: string;
	icon: IconDefinition;
}

const navItems: NavItem[] = [
	{ label: 'Home', path: '/', icon: faHome },
	{ label: 'Pricing', path: '/pricing', icon: faTags },
	{ label: 'My Gallery', path: '/gallery', icon: faImages },
	{ label: 'About', path: '/about', icon: faInfoCircle },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isMenuOpen]);

	return (
		<>
			<header
				className={`fixed top-0 right-0 left-0 z-50 flex justify-center transition-all duration-300 ${
					isScrolled
						? 'bg-white/95 shadow-lg backdrop-blur-sm'
						: 'bg-white'
				}`}
			>
				<div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between gap-8 md:h-20'>
						<div className='flex-shrink-0'>
							<NavLink
								to='/'
								className='group flex items-center space-x-2'
							>
								<div className='h-8 w-8 rounded-lg bg-black transition-transform group-hover:rotate-3 md:h-10 md:w-10'>
									<span className='flex h-full w-full items-center justify-center text-base font-bold text-white md:text-lg'>
										L
									</span>
								</div>
								<span className='text-lg font-bold text-black transition-colors group-hover:text-gray-600 md:text-xl'>
									LOGO
								</span>
							</NavLink>
						</div>

						<nav className='hidden items-center gap-8 md:flex'>
							{navItems.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									className={({ isActive }) =>
										`relative flex items-center gap-2 font-medium transition-all duration-200 ${
											isActive
												? 'text-black after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-black after:transition-all after:duration-300'
												: 'text-gray-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:text-black hover:after:w-full'
										}`
									}
								>
									<FontAwesomeIcon
										icon={item.icon}
										className='h-4 w-4'
									/>
									{item.label}
								</NavLink>
							))}
							<NavLink
								to='/login'
								className={({ isActive }) =>
									`group relative flex items-center gap-2 overflow-hidden rounded-lg px-6 py-2.5 transition-all duration-300 ${
										isActive
											? 'bg-black text-white'
											: 'bg-white text-black hover:text-white'
									}`
								}
							>
								<span className='relative z-10 flex items-center gap-2'>
									<FontAwesomeIcon
										icon={faUser}
										className='h-4 w-4'
									/>
									Login
								</span>
								<div className='absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover:translate-x-0'></div>
							</NavLink>
						</nav>

						<div className='md:hidden'>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className='group relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-black transition-all duration-300 hover:scale-105 hover:bg-black focus:outline-none active:scale-95'
								aria-label='Toggle menu'
							>
								<div className='relative h-4 w-6'>
									<span
										className={`absolute left-0 h-[2px] w-full transform bg-black transition-all duration-300 ease-in-out group-hover:bg-white ${
											isMenuOpen
												? 'top-1/2 -translate-y-1/2 rotate-45'
												: 'top-0'
										}`}
									></span>
									<span
										className={`absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 transform bg-black transition-all duration-300 ease-in-out group-hover:bg-white ${
											isMenuOpen
												? 'translate-x-3 opacity-0'
												: 'opacity-100'
										}`}
									></span>
									<span
										className={`absolute left-0 h-[2px] w-full transform bg-black transition-all duration-300 ease-in-out group-hover:bg-white ${
											isMenuOpen
												? 'top-1/2 -translate-y-1/2 -rotate-45'
												: 'bottom-0'
										}`}
									></span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
					isMenuOpen ? 'translate-y-0' : '-translate-y-full'
				}`}
				style={{ top: '64px' }}
			>
				<div className='flex h-full flex-col px-4 py-4'>
					<nav className='space-y-1'>
						{navItems.map((item) => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-all duration-200 ${
										isActive
											? 'scale-[1.02] transform bg-black text-white shadow-lg'
											: 'text-black hover:bg-black/5 active:bg-black/10'
									}`
								}
								onClick={() => setIsMenuOpen(false)}
							>
								<span className='flex items-center gap-3'>
									<FontAwesomeIcon
										icon={item.icon}
										className='h-4 w-4'
									/>
									{item.label}
								</span>
								<FontAwesomeIcon
									icon={faChevronRight}
									className='h-4 w-4 opacity-50'
								/>
							</NavLink>
						))}
					</nav>

					<div className='mt-auto pt-4'>
						<div className='relative'>
							<div className='absolute inset-0 -top-4 bg-gradient-to-t from-white via-white to-transparent'></div>
							<NavLink
								to='/login'
								className='relative flex w-full items-center justify-center gap-2 rounded-xl bg-black px-3 py-3 text-center text-base font-medium text-white shadow-lg transition-all duration-200 hover:bg-black/90 active:scale-[0.98]'
								onClick={() => setIsMenuOpen(false)}
							>
								<FontAwesomeIcon
									icon={faUser}
									className='h-4 w-4'
								/>
								Login
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
