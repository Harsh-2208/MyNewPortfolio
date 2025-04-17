"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
	const downloadNote = () => toast("Download Sucessfully  !!! ", { theme: "dark", type: "success" });
	return (
		<section>
			<div className="max-sm:h-[100vh-100px] sm:h-[calc(100vh-140px)] grid grid-cols-1 sm:grid-cols-12 lg:ms-8">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
					className="max-sm:order-2 max-sm:mt-4 col-span-7 place-self-center text-center sm:text-left lg:ps-4"
				>
					<div className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
						<h2 className="text-transparent bg-clip-text bg-gradient-to-br from-white via-red-500  to-black mb-2">
							Hello, I'm {""}                        
						</h2>
						<div className="m-2 "  />
						<TypeAnimation
							sequence={[
								"Harsh Upadhyay",
								1000,
								"Web Developer",
								1000,
								"Front-End Developer",
								1000,
								"UI Designer",
								1000,
							]}
							wrapper="h1"
							speed={50}
							repeat={Infinity}
						/>
					</div>
					<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
						Motivated Web Developer, eager to showcase skills and passion for learning.
					</p>
					<div>
						<a href="tel:+919870953485">
							<button className="px-6 py-3 rounded-full mr-4 text-white w-full sm:w-fit bg-gradient-to-br from-white via-red-500  to-black sm:hover:bg-gradient-to-br from-white via-red-500
							 sm:hover:to-white">
								Hire Me
							</button>
						</a>
						<button
							onClick={downloadNote}
							className="px-1 py-1 w-full sm:w-fit rounded-full mt-3  text-white bg-gradient-to-br from-white via-amber-700 sm:hover:bg-gradient-to-br from-white via-red-500
							 sm:hover:to-white"
						>
							<a
								href="Harsh-Upadhyay.pdf"
								download
							>
								<span className="block sm:hover:bg-transparent rounded-full px-5 py-2">Download CV </span>
							</a>
						</button>
						<ToastContainer
							position="top-right"
							autoClose={2000}
							closeOnClick
							theme="colored"
						/>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
					className="max-sm:order-1 col-span-5 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/Images/hero-img.png"
							alt="Hero Image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
							loading="eager"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
