import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({name: 'Operating System', slug: 'operating-system'}),
	defineSkillCategory({name:'Software',slug:'software'}),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Medium level JavaScript development, skills learned through w3schools and other web based learning',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Medium level TypeScript development, skills learned through w3schools and other web based learning',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Advanced CSS knowledge through continued webdevelopment',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Advanced HTML knowledge through continued webdevelopment',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Basic svelte knowledge as demonstrated upon this website, mainly used as a way to familiarize myself with the offerings from this langauge.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug:'linux',
		color: 'yellow',
		description: 'Advanced linux (CLI) knowledge via using a distro at home as a NAS/Homesever.',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'operating-system'
	}),
	defineSkill({
		slug:'windows',
		color: 'light-blue',
		description: 'Advanced Windows knowledge - using as my primary desktop OS.',
		logo: Assets.Windows,
		name: 'Windows',
		category: 'operating-system'
	}),
	defineSkill({
		slug:'office',
		color:'purple',
		description:'Advanced knowledge of the Microsoft Office suite, including Excel (functions/VBA)',
		logo: Assets.Office,
		name: 'Office',
		category: 'Software'
	}),
	defineSkill({
		slug:'MacOS',
		color:'white',
		description:'Primary daily driver OS for my laptop.',
		logo: Assets.Mac,
		name:'MacOS',
		category:'operating-system'
	}),
	defineSkill({
		slug:'csharp',
		color:'purple',
		description:'Basic knowledge of programming in C# via unity development of games',
		logo: Assets.Csharp,
		name:'C#',
		category:'pro-lang'
	}),
	defineSkill({
		slug:'java',
		color:'purple',
		description:'Advanced knowledge of Java programming through my University module',
		logo: Assets.Java,
		name:'Java',
		category:'pro-lang'
	}),
	defineSkill({
		slug:'cpp',
		color:'blue',
		description:'Beginner knowledge of c++ as it is an ongoing module for me',
		logo: Assets.Cpp,
		name:'cpp',
		category:'pro-lang'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
