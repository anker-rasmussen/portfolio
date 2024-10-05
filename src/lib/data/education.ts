import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BSc(Hons), Computer Science',
		description: 'Ongoing',
		location: 'London',
		logo: Assets.City,
		name: 'education',
		organization: 'City University',
		period: { from: new Date(2023, 9, 1), to: new Date(2024, 10, 1) },
		shortDescription: 'Currently ongoing study at City University',
		slug: 'education',
		subjects: ['Programming in Java', 'Introduction to algorithms', 'Data structures and Algorithms', 'Databases', 'Mathematics', 'Systems Architecture', 'Operating Systems']
	},
];

export const title = 'Education';
