import {
	faArrowLeft,
	faArrowRight,
	faCompass,
	faFaceSadTear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router';

interface ErrorProps {
	message?: string;
}

const ErrorPage = ({ message = 'Chưa làm trang này' }: ErrorProps) => {
	const navigate = useNavigate();

	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-white p-4'>
			<div className='text-center'>
				<div className='flex items-center justify-center space-x-4'>
					<span className='animate-bounce text-9xl font-bold text-black'>
						4
					</span>
					<span className='animate-bounce text-9xl font-bold text-black'>
						<FontAwesomeIcon
							icon={faFaceSadTear}
							className='text-8xl'
						/>
					</span>
					<span className='animate-bounce text-9xl font-bold text-black'>
						4
					</span>
				</div>

				<h1 className='mt-8 flex items-center justify-center gap-3 text-2xl font-bold text-black'>
					<FontAwesomeIcon icon={faCompass} className='h-6 w-6' />
					{message}
				</h1>

				<div className='mt-8 flex items-center justify-center gap-4'>
					<button
						onClick={() => navigate(-1)}
						className='group relative flex w-44 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-white px-4 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none'
					>
						<span className='relative flex items-center gap-2'>
							<FontAwesomeIcon
								icon={faArrowLeft}
								className='h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1'
							/>
							Quay Về
						</span>
					</button>

					<Link
						to='/'
						className='group relative flex w-44 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-black px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-900 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none'
					>
						<span className='relative flex items-center gap-2'>
							Về Trang Chủ
							<FontAwesomeIcon
								icon={faArrowRight}
								className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
							/>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
