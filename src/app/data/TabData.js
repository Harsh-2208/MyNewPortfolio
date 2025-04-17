import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Tab_Data = [
	{
		title: "skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-8">
				<li>Next.js / React.js</li>
				<li>TypeScript / JavaScript</li>
				<li>Redux-Toolkit</li>
				<li>Tailwind css</li>
				<li>vuetify css</li>
				<li>Firebase</li>
				<li>HTML/CSS</li>
			</ul>
		),
	},
	{
		title: "Education & Certification",
		id: "education",
		content: (
			<ul className="list-disc pl-8">
				<li className="pb-1">
				javascript by NamasteDev
					<Link
						className="text-xs ms-2 text-[#EF4444]"
						target="_blank"
						href="https://namastedev.com/harshupadhyay2208/certificates/namaste-javascript"
					>
						[View]
					</Link>
				</li>
				<li className="pb-1">
					JavaScript Data Structure & Algorithm by freeCodeCamp
					<Link
						className="text-xs ms-2 text-[#EF4444]"
						target="_blank"
						href="https://namastedev.com/harshupadhyay2208/certificates/namaste-javascript"
					>
						[View]
					</Link>
				</li>
				<li className="pb-1">
					Version Control by Meta (Coursera)
					<Link
						className="text-xs ms-2 text-[#EF4444]"
						target="_blank"
						href=""
					>
						[View]
					</Link>
				</li>
				<li className="pb-1">
					HTML, CSS, and Javascript for Web Developers by John Hopkins University (Coursera)
					<Link
						className="text-xs ms-2 text-[#EF4444]"
						target="_blank"
						href="https://www.coursera.org/account/accomplishments/verify/JMG7C5JB7SCY"
					>
						[View]
					</Link>
				</li>
				<li>B.tech in Mechanical Engineering from SKIT, Jaipur</li>
				<li>Dimploma in Mechanical Engineering from SGVU, Jaipur</li>
			</ul>
		),
	},
];
