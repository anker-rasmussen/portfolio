import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Student',
		description: 'Creating individual projects to show my passion with technology, be it writing bash scripts in the CLI, or creating websites, or small games. I have tried to familiarize myself with a diverse set of languages/interfaces, and have developed a keen sense of googling to resolve issues within my code.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023,8,1),to: new Date() },
		skills: getSkills('ts', 'js', 'html','svelte','linux','office','MacOS','windows'),
		name:'Student',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating games and small-scale web development'
	},
];

export const title = 'Experience';
