import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{ 
		slug: 'java platformer game',
		color: '#90d5ff',
		description: 
			'This java platformer was built from the ground up, on a 2d physics engine as part of my first year in BSc (Hons) Computer science at City University. This got the grade of a 1st.',
		shortDescription:
			'A short platformer game with three levels, where the player has to move and shoot concurrently.',
		links:[{to:'https://youtu.be/qcEQDyNvogU', label: 'Youtube'}],
		logo: Assets.Robo,
		name: 'Circuit Clash',
		period:{
			from: new Date(2023,12,1), to: new Date(2024,4,1)
		},
		skills: getSkills('java'),
		type: 'Java Game',
		screenshots: [
			{ src: '/screenshots/cclash1.png', label: 'Shooting reference' },
			{ src: '/screenshots/cclash2.png', label: 'Portal for level reference'},
			{ src: '/screenshots/cclash3.png', label: 'Boss and powerup reference'}
		]
	},
	{
		slug: 'csharp game',
		color: '#5e95e3',
		description:
			'This was a game I developed in my free time, reminiscent of old arcade style games, where the player is on a rail, and has to score maximum points during a given period of time. The player had control ',
		shortDescription:
			'A short-form rail based 3D shooter reminiscent of arcade games of old.',
		links: [{ to: 'https://youtu.be/RqMsz4l-zCE', label: 'YouTube' }],
		logo: Assets.Be,
		name: 'Beryllium Bash',
		period: {
			from: new Date(2023,3,1), to: new Date(2023,6,1)
		},
		skills: getSkills('csharp'),
		type: 'Unity (C#) Game'
	},
];

export const title = 'Projects';
