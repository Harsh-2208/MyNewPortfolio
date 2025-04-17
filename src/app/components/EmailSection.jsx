'use client';
import Link from 'next/link';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Image from 'next/image';
import { useForm } from '@formspree/react';

const EmailSection = () => {
	const [state, handleSubmit] = useForm('mrgnbjad');
	if (state.succeeded) {
		alert('Sent successfully');
	}
	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 md:my-12 py-12 gap-6 items-center relative'
		>
			<div className='md:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700 to-transparent rounded-full h-52 w-52 z-0 blur-lg absolute top-3/4 -left-10 transform -translate-x-1/2 -translate-1/2'></div>
			<div className='ms-8 z-10 max-md:mb-10 '>
				<h3 className='text-xl font-bold text-[#EF4444] my-2'>Lets Connect</h3>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{''} I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just
					want to say hi, I will try my best to get back to you!{' '}
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link
						href='https://github.com/Harsh-2208/'
						target='_blank'
					>
						<Image
							src={GithubIcon}
							alt='Github Icon'
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/harsh-upadhyay-5aa0a6216/'
						target='_blank'
					>
						<Image
							src={LinkedinIcon}
							alt='Linkedin Icon'
						/>
					</Link>
				</div>
			</div>
			<div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-3'
				>
					<label
						htmlFor='name'
						className='text-white block text-sm font-medium'
					>
						Name
					</label>
					<input
						name='name'
						type='text'
						id='name'
						placeholder='John Doe'
						required
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					/>
					<label
						htmlFor='email'
						className='text-white block text-sm font-medium'
					>
						Your Email
					</label>
					<input
						name='email'
						type='email'
						id='email'
						placeholder='example@email.com'
						required
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-3'
					/>
					<label
						htmlFor='message'
						className='text-white block text-sm font-medium'
					>
						Message
					</label>
					<textarea
						name='message'
						id='message'
						required
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
						placeholder='Leave your message here'
					/>
					<button
						type='submit'
						className='text-white bg-gradient-to-br from-white via-red-500  to-black sm:hover:bg-gradient-to-br from-white via-red-500
							 sm:hover:to-white py-2.5 px-5 rounded-lg w-full'
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};
export default EmailSection;
