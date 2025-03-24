import Categories from '@/components/Categories';
import ContactTab from '@/components/ContactTab';
import { writeups } from '@/lib/constants';
import { getWriteup } from '@/lib/database';
import { WriteUp } from '@/lib/mixin';
import { neon } from '@neondatabase/serverless';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { notFound } from 'next/navigation';

const Overview = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	if (!id) return <h1>Loading...</h1>;

	try {
		const writeup = await getWriteup(id);
		return (
			<article>
				<div className='flex justify-between mb-2 text-blue-900 font-semibold'>
					<span>{writeup?.author}</span>
					<span>{writeup?.published.toDateString()}</span>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-2xl text-[#FC2713] border-t-4 border-gray-600 py-6'>
						{writeup?.title}
					</h1>
					<div className='text-center py-4 border-y-2 border-gray-300'>
						<Categories categories={writeup?.categories ?? []} />
					</div>
					<p className='py-4'>{writeup?.content}</p>
					<ContactTab />
				</div>
			</article>
		);
	} catch (error) {
		return (
			<p>
				Error loading write-up with id ${id}: {(error as Error).message}
			</p>
		);
	}
};

// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext
// ) => {
// 	const { id } = context.params as { id: string };
// 	const sql = neon(process.env.DATABASE_URL || '');

// 	try {
// 		const res = await sql`SELECT * from write-Ups WHERE id=${id}`;
// 		const writeup: WriteUp = await res[0].json();
// 		return { props: { writeup } };
// 	} catch (error) {
// 		return { notFound: true };
// 	}
// };

export default Overview;
