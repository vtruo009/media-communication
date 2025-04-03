'use client';

import { useDebouncedCallback } from 'use-debounce';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const Search = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleOnClick = () => {};

	const handleSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('query', term.toLowerCase());
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 500);

	return (
		<div className='flex flex-row items-center justify-evenly gap-x-4 mb-8'>
			<div className='w-[85%] flex flex-row items-center border-2 rounded-lg p-2 gap-x-2'>
				<SearchIcon className='hidden md:block' />
				<Input
					className='border-0 focus-visible:ring-0 shadow-none py-0 px-2'
					placeholder='Search for issue...'
					type='text'
					defaultValue={searchParams.get('query')?.toString()}
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</div>
			<Button
				className='w-20 h-14 bg-blue-300 hover:bg-blue-400 text-2xl/relaxed cursor-pointer md:w-[15%] md:h-auto'
				onClick={handleOnClick}
			>
				<SearchIcon className='size-8 md:hidden size' />
				<p className='hidden md:block'>Search</p>
			</Button>
		</div>
	);
};

export default Search;
