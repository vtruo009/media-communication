interface StatsProps {
	label: string;
	value: number;
	className?: string;
}

const Stats = ({ label, value, className }: StatsProps) => {
	return (
		<div
			className={`w-full h-full flex flex-col items-center justify-center ${className}`}
		>
			<h2 className='text-4xl font-bold'>{value}</h2>
			<p>{label.toUpperCase()}</p>
		</div>
	);
};

export default Stats;
