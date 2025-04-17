import { motion } from "framer-motion";

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? "text-[#EF4444] font-semibold" : "text-[#ADB7BE]";
	return (
		<button onClick={selectTab}>
			<p className={`mr-4 pr-6 text-xl hover:text-white ${buttonClasses}`}>{children}</p>
			<motion.div
				variants={variants}
				animate={active ? "active" : "default"}
				className="h-1 bg-[#EF4444] mt-1"
			></motion.div>
		</button>
	);
};

export default TabButton;
