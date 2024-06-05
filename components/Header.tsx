import Image from 'next/image'
import React from 'react'
import logo from '../images/linkedin.png'
import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'

function Header() {
	return (
		<div className='flex items-center p-2 max-w-6xl mx-auto'>
			<Image
				className='rounded-lg'
				src={logo}
				alt="profile"
				width={40}
				height={40}
			/>

			<div className='flex-1'>
				<form className='flex items-center space-x-1 bg-gray-100 rounded-md flex-1 p-2 mx-2'>
					<SearchIcon className='h-4 text-gray-600' />
					<input type="text" placeholder='Search' className='bg-transparent flex-1 outline-none' />
				</form>
			</div>

			<div className='flex items-center space-x-4 px-6'>
				<Link href="" className='icon'>
					<HomeIcon className='h-5' />
					<p>Home</p>
				</Link>

				<Link href="" className='icon hidden md:flex'>
					<UsersIcon className='h-5' />
					<p>Network</p>
				</Link>

				<Link href="" className='icon hidden md:flex'>
					<Briefcase className='h-5' />
					<p>Jobs</p>
				</Link>

				<Link href="" className='icon hidden md:flex'>
					<MessageSquare className='h-5' />
					<p>Message </p>
				</Link>

				{/* User button if signed in  */}
				<SignedIn>
					<UserButton></UserButton>

				</SignedIn>

				{/* Sign in Button if not signed in */}
				<SignedOut>
					<Button>
						<SignedOut />
					</Button>
				</SignedOut>
			</div>

		</div>
	)
}

export default Header