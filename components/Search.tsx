'use cilent';

import { WriteUp } from '@/lib/mixin';
import { Button } from './ui/button';
import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from './ui/input';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({
	writeups,
	setFilteredWriteups,
}: {
	writeups: WriteUp[];
	setFilteredWriteups: Dispatch<SetStateAction<WriteUp[]>>;
}) => {
	const [searchText, setSearchText] = useState<string>('');

	const handleOnClick = () => {
		const filtered = writeups.filter((writeup) => {
			const lowercaseSearchText = searchText.toLowerCase();
			const inTitle = writeup.title.toLowerCase().includes(lowercaseSearchText);
			const inCategories = writeup.categories.some((category) =>
				category.toLowerCase().includes(lowercaseSearchText)
			);

			return inTitle || inCategories;
		});
		setFilteredWriteups(filtered);
	};

	return (
		<div className='flex flex-row items-center justify-evenly gap-x-4 mb-8'>
			<div className='w-[85%] flex flex-row items-center border-2 rounded-lg p-2 gap-x-2'>
				<SearchIcon />
				<Input
					className='border-0 focus-visible:ring-0 shadow-none py-0 px-2'
					placeholder='Search for issue...'
					value={searchText}
					onChange={(e) => setSearchText(e.currentTarget.value)}
				/>
			</div>
			<Button
				className='w-[15%] h-auto bg-blue-300 hover:bg-blue-400 text-2xl/relaxed cursor-pointer'
				onClick={handleOnClick}
			>
				Search
			</Button>
		</div>
	);
};

export default Search;
