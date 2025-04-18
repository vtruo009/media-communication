const Categories = ({ categories }: { categories: string[] }) => {
	return (
		<>
			{categories.map((category, i) => (
				<span key={category}>
					<span className='text-xs font-bold uppercase text-blue-900 p-2'>
						{category}
					</span>
					{i !== categories.length - 1 && <span>|</span>}
				</span>
			))}
		</>
	);
};

export default Categories;
