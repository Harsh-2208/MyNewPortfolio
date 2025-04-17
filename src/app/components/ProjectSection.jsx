'use client';
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectButton from './ProjectButton';
import { motion, useInView } from 'framer-motion';
import { ProjectData } from '../data/ProjectData';

const cardVariants = {
	initial: { y: 50, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

const ProjectSection = () => {
	const [tag, setTag] = useState('All');
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = ProjectData.filter((project) => project.tag.includes(tag));
	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-2'>My Projects</h2>
			<div className='text-white flex flex-row justify-center items-center gap-4 py-6'>
				<ProjectButton
					name='All'
					isSelected={tag === 'All'}
					onClick={handleTagChange}
				/>
				<ProjectButton
					name='Code'
					isSelected={tag === 'Code'}
					onClick={handleTagChange}
				/>
				<ProjectButton
					name='UI Design'
					isSelected={tag === 'UI-Design'}
					onClick={handleTagChange}
				/>
			</div>
			<ul
				ref={ref}
				className='grid md:grid-cols-3 gap-8 md:gap-12'
			>
				{filteredProjects.reverse().map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial='initial'
						animate={isInView ? 'animate' : 'initial'}
						transition={{ duration: 0.4, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							imgUrl={project.image}
							title={project.title}
							description={project.description}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};
export default ProjectSection;
