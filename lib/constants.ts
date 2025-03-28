import { Contact, WriteUp } from './mixin';

export const writeups: WriteUp[] = [
	{
		id: '1',
		published: new Date(2025, 0, 30),
		thumbnail: '/pusd.png',
		title:
			'Poll: With More Than Half the Public Saying They or a Family Member Have Been Covered by Medicaid, Large Majorities Don’t Want Cuts, Including Most Trump Voters and Rural Residents',
		author: 'Leonardo da Vinci',
		categories: ['Technology', 'Emotional Well-being', 'Mental Health'],
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ipsum non consequat aliquet. Fusce nisl risus, porta vel egestas sit amet, vehicula a lacus. Cras erat lacus, convallis in nulla sit amet, volutpat cursus est. Morbi mollis aliquam tellus hendrerit dictum. Aliquam erat volutpat. Vestibulum vitae placerat dui, eget molestie nibh. In hac habitasse platea dictumst. Curabitur ornare, elit ultrices ornare sollicitudin, elit risus tempor lectus, quis convallis leo lorem eu turpis.\nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sit amet lacinia ipsum, nec tristique ipsum. Aenean eu ullamcorper odio, a condimentum mi. Sed efficitur mi erat, cursus lacinia turpis feugiat vel. Phasellus aliquet risus felis, at dictum mauris lobortis sed. In tincidunt orci a lectus malesuada lacinia. Nulla pretium libero non justo maximus feugiat. Nulla facilisi. Nunc ultricies porta diam quis luctus. Sed sit amet dictum urna. Morbi a ultrices libero. Donec mattis dui vitae ligula lobortis, in tempor nunc placerat. Nullam sed sem a nisl interdum congue. Curabitur libero est, mollis ut leo eget, porttitor condimentum lacus. Cras fringilla posuere dapibus. Pellentesque quis erat vel ipsum vulputate sodales gravida at lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ligula elit, finibus ut lorem quis, laoreet facilisis turpis. Morbi lacinia risus non ex bibendum, quis ultricies metus gravida. Suspendisse metus mauris, placerat tristique nisl at, volutpat maximus magna. Morbi auctor enim sit amet mattis molestie. Integer vehicula odio at rhoncus tempus. Quisque sed rhoncus tortor. Integer commodo sit amet massa sed aliquam.',
		sources: ['source1.com', 'source2.com'],
	},
	{
		id: '2',
		published: new Date(2025, 1, 5),
		thumbnail: '/pusd.png',
		title: 'Article #2',
		author: 'John Smith',
		categories: ['Nutrition'],
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum laudantium sequi, quam suscipit provident molestias enim fugit reiciendis laboriosam recusandae perferendis odio dolorum debitis fuga illo tempora harum repudiandae doloribus.',
		sources: ['source1.com', 'source2.com'],
	},
	{
		id: '3',
		published: new Date(2025, 1, 22),
		thumbnail: '/pusd.png',
		title: 'Article #3',
		author: 'Jane Doe',
		categories: ['Curriculum', 'Testing'],
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum laudantium sequi, quam suscipit provident molestias enim fugit reiciendis laboriosam recusandae perferendis odio dolorum debitis fuga illo tempora harum repudiandae doloribus.',
		sources: ['source1.com', 'source2.com'],
	},
	{
		published: new Date(2025, 2, 3),
		id: '4',
		thumbnail: '/pusd.png',
		title: 'Article #4',
		author: 'Neville Longbottom',
		categories: ['School Budget', 'Teacher Training'],
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum laudantium sequi, quam suscipit provident molestias enim fugit reiciendis laboriosam recusandae perferendis odio dolorum debitis fuga illo tempora harum repudiandae doloribus.',
		sources: ['source1.com', 'source2.com'],
	},
	{
		id: '5',
		published: new Date(2025, 2, 14),
		thumbnail: '/pusd.png',
		title: 'Article #5',
		author: 'Hermione Granger',
		categories: ['Financial Aid'],
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum laudantium sequi, quam suscipit provident molestias enim fugit reiciendis laboriosam recusandae perferendis odio dolorum debitis fuga illo tempora harum repudiandae doloribus.',
		sources: ['source1.com', 'source2.com'],
	},
];

export const contacts: Contact[] = [
	{
		id: 'board-member-1',
		name: 'Jennifer Hall Lee',
		phone: '626-720-2425',
		email: 'example@gmail.com',
		district: 'District 2',
		image: '/jenniferlee.jpg',
	},
	{
		id: 'board-member-2',
		name: 'Tina Fredericks',
		phone: '626-720-2484',
		email: 'example@gmail.com',
		district: 'District 6',
		image: '/tinafredericks.jpg',
	},
	{
		id: 'board-member-3',
		name: 'Dr. Yarma Velázquez',
		phone: '626-720-2470',
		email: 'example@gmail.com',
		district: 'District 7',
		image: '/dryarma.jpg',
	},
];
