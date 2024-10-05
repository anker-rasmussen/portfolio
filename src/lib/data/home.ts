import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Anker';

export const lastName = 'Rasmussen';

export const description =
	'Welcome to my online portfolio/CV.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/anker-rasmussen' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/anker-rasmussen-a6b45a330/'
	},
	{
		platform: Platform.Email,
		link: 'anker.rasmussen09@gmail.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'cpp', 'svelte', 'ts','office','linux');
