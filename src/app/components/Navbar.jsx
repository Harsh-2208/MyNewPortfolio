"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<nav className="sticky top-0 opacity-90 z-10 bg-[#121212] px-8">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4">
				<Link
					href={"/"}
					className="text-3xl md:text-4xl text-white font-semibold"
				>
					<Image
						src={"/Images/logo.png"}
						alt="logo"
						width={80}
						height={80}
						loading="eager"
					/>
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navOpen ? (
						<button
							onClick={() => setNavOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:bg-white hover:text-black"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:bg-white hover:text-black"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div
					className="menu hidden md:block md:w-auto"
					id="navbar"
				>
					<ul className="flex gap-4">
						<li>
							<Link
								href="#about"
								className="block py-2 pl-3 pr-4 text-[#EF4444] sm:text-xl rounded md:p-0 hover:text-white"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="#projects"
								className="block py-2 pl-3 pr-4 text-[#EF4444] sm:text-xl rounded md:p-0 hover:text-white"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								className="block py-2 pl-3 pr-4 text-[#EF4444] sm:text-xl rounded md:p-0 hover:text-white"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{navOpen && <MenuOverlay />}
		</nav>
	);
};

export default Navbar;
