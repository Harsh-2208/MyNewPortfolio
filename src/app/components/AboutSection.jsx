"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { Tab_Data } from "../data/TabData";

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => setTab(id));
	};
	return (
		<section
			id="about"
			className="text-white"
		>
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={"/Images/about-img.png"}
					alt="About-Image"
					width={500}
					height={500}
				/>

				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="max-sm:text-center text-4xl font-bold mb-4 text-white">About Me</h2>
					<p className="text-base lg:text-lg">
						I'm a Front End developer with a passion for creating interactive and responsive web applications. I have
						experience working with Next js, React js, TypeScript, JavaScript, Redux-Toolkit, HTML, CSS, and Git. I am a
						quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am
						excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row mt-8 justify-around">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{""}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{""}
						</TabButton>
					</div>
					<div className="mt-6">{Tab_Data.find((e) => e.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
