const ProgectButton = ({ name, onClick, isSelected }) => {
	const selectedStyles = isSelected ? "border-[#EF4444]" : "text-[#ADB7BE] border-slate-700 hover:border-white";
	return (
		<div>
			<button
				onClick={() => onClick(name)}
				className={`rounded-full border-2 px-5 py-2 text-[0.8rem] sm:text-xl ${selectedStyles}`}
			>
				{name}
			</button>
		</div>
	);
};
export default ProgectButton;
