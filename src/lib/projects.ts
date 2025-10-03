import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';
import DeviconPlainAmazonwebservices from '~icons/devicon-plain/amazonwebservices';
import DeviconPlainDocker from '~icons/devicon-plain/docker';
import DeviconPlainElasticsearch from '~icons/devicon-plain/elasticsearch';
import DeviconPlainJavascript from '~icons/devicon-plain/javascript';
import DeviconPlainJest from '~icons/devicon-plain/jest';
import DeviconPlainJunit from '~icons/devicon-plain/junit';
import DeviconPlainKubernetes from '~icons/devicon-plain/kubernetes';
import DeviconPlainNestjs from '~icons/devicon-plain/nestjs';
import DeviconPlainNumpy from '~icons/devicon-plain/numpy';
import DeviconPlainOpenapi from '~icons/devicon-plain/openapi';
import DeviconPlainPostgresql from '~icons/devicon-plain/postgresql';
import DeviconPlainSpring from '~icons/devicon-plain/spring';
import DeviconPlainSvelte from '~icons/devicon-plain/svelte';
import DeviconPlainTerraform from '~icons/devicon-plain/terraform';
import DeviconPlainTypescript from '~icons/devicon-plain/typescript';
import MdiArrowLeftThin from '~icons/mdi/arrow-left-thin';
import MdiHammer from '~icons/mdi/hammer';
import MdiHumanMaleBoard from '~icons/mdi/human-male-board';
import SimpleIconsAnsible from '~icons/simple-icons/ansible';
import SimpleIconsFastapi from '~icons/simple-icons/fastapi';
import SimpleIconsFigma from '~icons/simple-icons/figma';
import SimpleIconsFlask from '~icons/simple-icons/flask';
import SimpleIconsGithub from '~icons/simple-icons/github';
import SimpleIconsGithubactions from '~icons/simple-icons/githubactions';
import SimpleIconsGunicorn from '~icons/simple-icons/gunicorn';
import SimpleIconsHtml5 from '~icons/simple-icons/html5';
import SimpleIconsJupyter from '~icons/simple-icons/jupyter';
import SimpleIconsNginx from '~icons/simple-icons/nginx';
import SimpleIconsOpenjdk from '~icons/simple-icons/openjdk';
import SimpleIconsPrecommit from '~icons/simple-icons/precommit';
import SimpleIconsPython from '~icons/simple-icons/python';
import SimpleIconsTailwindcss from '~icons/simple-icons/tailwindcss';
import SimpleIconsTensorflow from '~icons/simple-icons/tensorflow';
import SimpleIconsUml from '~icons/simple-icons/uml';

export type Icon = Component<SVGAttributes<SVGSVGElement>>;

export type Project = {
	name: string;
	description: string;
	image: string;
	type?: 'Academic' | 'Private' | 'Deprecated';
	urls: { name: string; url: string; icon: Icon }[];
	badges: { name: string; icons: { name: string; icon: Icon }[] }[];
};

const projects: Project[] = [
	{
		name: 'JakPrzyjade',
		type: 'Academic',
		description:
			'Microservice-based public transit system implemented as a proof-of-knowledge project for Software System' +
			' Design course at Wrocław Univeristy of Applied Science. App consists of four services and a single' +
			' sidecart that handle multiple aspects of public transport ticketing, such as buying tickets, validating' +
			' them, checking stops and lines, and also reporting accidents.',
		image:
			'https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign/blob/main/documentation/course/e1/images/Stop1.png?raw=true',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign',
				icon: SimpleIconsGithub
			}
		],

		badges: [
			{
				name: 'Services',
				icons: [
					{ name: 'Java', icon: SimpleIconsOpenjdk },
					{ name: 'Typescript', icon: DeviconPlainTypescript },
					{ name: 'PostgreSQL', icon: DeviconPlainPostgresql },
					{ name: 'Spring', icon: DeviconPlainSpring },
					{ name: 'NestJS', icon: DeviconPlainNestjs }
				]
			},
			{
				name: 'Tools',
				icons: [
					{ name: 'Figma', icon: SimpleIconsFigma },
					{ name: 'GitHub', icon: SimpleIconsGithub },
					{ name: 'GitHub Actions', icon: SimpleIconsGithubactions },
					{ name: 'OpenAPI', icon: DeviconPlainOpenapi },
					{ name: 'Jest', icon: DeviconPlainJest },
					{ name: 'JUnit', icon: DeviconPlainJunit },
					{ name: 'UML', icon: SimpleIconsUml }
				]
			},
			{
				name: 'Technologies',
				icons: [
					{ name: 'AWS', icon: DeviconPlainAmazonwebservices },
					{ name: 'Docker', icon: DeviconPlainDocker },
					{ name: 'Kubernetes', icon: DeviconPlainKubernetes },
					{ name: 'Terraform', icon: DeviconPlainTerraform }
				]
			}
		]
	},
	{
		name: 'workflow-predictor',
		type: 'Academic',
		description:
			'Machine learning based service for predicting execution times for a certain node or nodes in directed' +
			' acyclic graph of dependent tasks. App consists of model creation and verification part and also Flask' +
			' backend that exposes service to clients. Implemented for Credit Suisse as a Team Engineering Project' +
			' at Wrocław Univeristy of Applied Science.',
		image:
			'https://opengraph.githubassets.com/cc76070f5851b5ed8642f4952bc2d3bb61ed76b8b1d8c0a9667be0c9ea5a8bbf/mlodybercik/workflow-predictor',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/mlodybercik/workflow-predictor',
				icon: SimpleIconsGithub
			},
			{
				name: 'Presentation (PL)',
				url: 'https://docs.google.com/presentation/d/e/2PACX-1vQUAM-MWpULXNabZ8_ASwfgURyAjYWDoZekuzhNts8DTr64yFveFfHx0V4qVQK-mRqFWfH01yjsi3AI/pub?start=false&loop=true&delayms=10000',
				icon: MdiHumanMaleBoard
			}
		],

		badges: [
			{
				name: 'Solutions',
				icons: [
					{ name: 'Python', icon: SimpleIconsPython },
					{ name: 'Flask', icon: SimpleIconsFlask },
					{ name: 'Tensorflow', icon: SimpleIconsTensorflow },
					{ name: 'Numpy', icon: DeviconPlainNumpy },
					{ name: 'Gunicorn', icon: SimpleIconsGunicorn },
					{ name: 'Docker', icon: DeviconPlainDocker }
				]
			},
			{
				name: 'Tools',
				icons: [
					{ name: 'Notebooks', icon: SimpleIconsJupyter },
					{ name: 'GitHub', icon: SimpleIconsGithub },
					{ name: 'pre-commit', icon: SimpleIconsPrecommit }
				]
			}
		]
	},
	{
		name: 'dev.bercik.xyz',
		type: 'Private',
		description:
			'Simple HTML5 webpage made in SvelteKit to showcase some projects made by me. Page is hosted raw on' +
			' mikr.us and maintained by Ansible and GitHub Actions scripts. Nginx serves a page which is being' +
			' forwarded by Cloudflare via IPv6 proxy. VPS it is being hosted on has 256MB of RAM.',
		image: '/dev.bercik.xyz.webp',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/mlodybercik/dev.bercik.xyz',
				icon: SimpleIconsGithub
			}
		],

		badges: [
			{
				name: 'Solutions',
				icons: [
					{ name: 'Typescript', icon: DeviconPlainTypescript },
					{ name: 'SvelteKit', icon: DeviconPlainSvelte },
					{ name: 'Bare metal', icon: MdiHammer },
					{ name: 'HTML', icon: SimpleIconsHtml5 },
					{ name: 'Tailwind CSS', icon: SimpleIconsTailwindcss },
					{ name: 'nginx', icon: SimpleIconsNginx }
				]
			},
			{
				name: 'Tools',
				icons: [
					{ name: 'Ansible', icon: SimpleIconsAnsible },
					{ name: 'GitHub', icon: SimpleIconsGithub },
					{ name: 'GitHub Actions', icon: SimpleIconsGithubactions }
				]
			}
		]
	},
	{
		name: 'Image Steganography',
		type: 'Academic',
		description:
			'Web-based tool for experimenting with various image steganography techniques, enabling users to hide' +
			' data in digital images and extract it from them. Implemented mainly using TypeScript, Angular, and' +
			' Rust, it supports methods like Least Significant Bit (LSB), Discrete Cosine Transform (DCT), wavelet' +
			' transform, visual cryptography, and metadata manipulation for PNG and JPEG formats.',
		image: 'https://github.com/PWR-ACS-SE-24/EoSaKAfDaD/blob/main/docs/images/vc.png?raw=true',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/PWR-ACS-SE-24/EoSaKAfDaD/',
				icon: SimpleIconsGithub
			},
			{
				name: 'Demo (PL)',
				url: 'https://pwr-acs-se-24.github.io/EoSaKAfDaD/',
				icon: MdiArrowLeftThin
			}
		],

		badges: [
			{
				name: 'Implementation',
				icons: [
					{ name: 'Typescript', icon: DeviconPlainTypescript },
					{ name: 'SvelteKit', icon: DeviconPlainSvelte },
					{ name: 'HTML', icon: SimpleIconsHtml5 },
					{ name: 'Tailwind CSS', icon: SimpleIconsTailwindcss },
					{ name: 'Python', icon: SimpleIconsPython },
					{ name: 'FastAPI', icon: SimpleIconsFastapi },
					{ name: 'Elasticsearch', icon: DeviconPlainElasticsearch },
					{ name: 'PostgreSQL', icon: DeviconPlainPostgresql }
				]
			},
			{
				name: 'Tools',
				icons: [
					{ name: 'GitHub', icon: SimpleIconsGithub },
					{ name: 'Docker', icon: DeviconPlainDocker }
				]
			}
		]
	},

	{
		name: 'ArXiv search',
		type: 'Academic',
		description:
			'Database and Elasticsearch based system for searching scientific papers from open-access repository' +
			' arXiv. It allows for searching based on article’s name, authors, category and published date. Project' +
			' consists of FastAPI, Elasticsearch repository, SQL database and frontend made in Svelte. Implemented' +
			' for Information Retrieval Systems course at Wrocław Univeristy of Applied Science.',
		image: 'https://github.com/PWR-ACS-SE-24/InformationRetrievalSystems/blob/main/docs/img/main-page.png?raw=true',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/PWR-ACS-SE-24/InformationRetrievalSystems/',
				icon: SimpleIconsGithub
			}
		],

		badges: [
			{
				name: 'Implementation',
				icons: [
					{ name: 'Typescript', icon: DeviconPlainTypescript },
					{ name: 'SvelteKit', icon: DeviconPlainSvelte },
					{ name: 'HTML', icon: SimpleIconsHtml5 },
					{ name: 'Tailwind CSS', icon: SimpleIconsTailwindcss },
					{ name: 'Python', icon: SimpleIconsPython },
					{ name: 'FastAPI', icon: SimpleIconsFastapi },
					{ name: 'Elasticsearch', icon: DeviconPlainElasticsearch },
					{ name: 'PostgreSQL', icon: DeviconPlainPostgresql }
				]
			},
			{
				name: 'Tools',
				icons: [
					{ name: 'GitHub', icon: SimpleIconsGithub },
					{ name: 'Docker', icon: DeviconPlainDocker }
				]
			}
		]
	},

	{
		name: 'tekstowo',
		type: 'Deprecated',
		description:
			'Small and old library for parsing and downloading data from polish website about song lyrics and its' +
			' translations with the same name. Library was made as my first bigger project. It used beautifulsoup to ' +
			' scrap data from the Web, tidy it up and present results as objects.',
		image: 'https://raw.githubusercontent.com/krzesu0/tekstowo/dev/misc/py.png',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/mlodybercik/tekstowo',
				icon: SimpleIconsGithub
			}
		],

		badges: [
			{
				name: 'Scraping with',
				icons: [
					{ name: 'Python', icon: SimpleIconsPython },
					{ name: 'Beautifulsoup', icon: SimpleIconsPython },
					{ name: 'Requests', icon: SimpleIconsPython },
					{ name: 'HTML', icon: SimpleIconsHtml5 }
				]
			}
		]
	},

	{
		name: 'betterplan + bercikAPI',
		type: 'Deprecated',
		description:
			'Once upon a time, back in the middleschool times I had an somewhat weird problem of not being able to ' +
			" see what rooms were occupied by what teacher at what times. I've made a project that would parse" +
			' schedules provided by school and would generate occupancy timetables for every room. To present the' +
			" data to users I've also made a page that would dynamically show every plan any user requested. Frontend" +
			' does not use any library. Everything was raw and written by hand.',
		image: '/bercik.tk.webp',

		urls: [],

		badges: [
			{
				name: 'Backend made with',
				icons: [
					{ name: 'Python', icon: SimpleIconsPython },
					{ name: 'Flask', icon: SimpleIconsFlask },
					{ name: 'Beautifulsoup', icon: SimpleIconsPython },
					{ name: 'Requests', icon: SimpleIconsPython }
				]
			},
			{
				name: 'Website made with',
				icons: [
					{ name: 'HTML', icon: SimpleIconsHtml5 },
					{ name: 'Javascript', icon: DeviconPlainJavascript }
				]
			}
		]
	}
];

export default projects;
