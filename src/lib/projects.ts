import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';
import DeviconPlainAmazonwebservices from '~icons/devicon-plain/amazonwebservices';
import DeviconPlainDocker from '~icons/devicon-plain/docker';
import DeviconPlainJest from '~icons/devicon-plain/jest';
import DeviconPlainJunit from '~icons/devicon-plain/junit';
import DeviconPlainKubernetes from '~icons/devicon-plain/kubernetes';
import DeviconPlainNestjs from '~icons/devicon-plain/nestjs';
import DeviconPlainNumpy from '~icons/devicon-plain/numpy';
import DeviconPlainOpenapi from '~icons/devicon-plain/openapi';
import DeviconPlainPostgresql from '~icons/devicon-plain/postgresql';
import DeviconPlainSpring from '~icons/devicon-plain/spring';
import DeviconPlainTerraform from '~icons/devicon-plain/terraform';
import DeviconPlainTypescript from '~icons/devicon-plain/typescript';
import SimpleIconsFigma from '~icons/simple-icons/figma';
import SimpleIconsFlask from '~icons/simple-icons/flask';
import SimpleIconsGithub from '~icons/simple-icons/github';
import SimpleIconsGithubactions from '~icons/simple-icons/githubactions';
import SimpleIconsGunicorn from '~icons/simple-icons/gunicorn';
import SimpleIconsJupyter from '~icons/simple-icons/jupyter';
import SimpleIconsOpenjdk from '~icons/simple-icons/openjdk';
import SimpleIconsPrecommit from '~icons/simple-icons/precommit';
import SimpleIconsPython from '~icons/simple-icons/python';
import SimpleIconsTensorflow from '~icons/simple-icons/tensorflow';
import SimpleIconsUml from '~icons/simple-icons/uml';

export type Project = {
	name: string;
	description: string;
	image: string;
	urls: { name: string; url: string }[];
	badges: { name: string; icons: { name: string; icon: Component<SVGAttributes<SVGSVGElement>> }[] }[];
};

const projects: Project[] = [
	{
		name: 'JakPrzyjade',
		description:
			'Microservice-based public transit system implemented as a proof-of-knowledge project for Software System' +
			' Design course at Wrocław Univeristy of Applied Science. App consists of four services and a single' +
			' sidecart that handle multiple aspects of public transport ticketing, such as buying tickets, validating' +
			' them, checking stops and lines, and also reporting accidents.',
		image:
			'https://raw.githubusercontent.com/PWR-ACS-SE-24/SoftwareSystemDesign/refs/heads/main/documentation/course/e2/images/deployment-diagram.drawio.svg',

		urls: [
			{
				name: 'Repository',
				url: 'https://github.com/PWR-ACS-SE-24/SoftwareSystemDesign'
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
				url: 'https://github.com/mlodybercik/workflow-predictor'
			},
			{
				name: 'Presentation (PL)',
				url: 'https://docs.google.com/presentation/d/e/2PACX-1vQUAM-MWpULXNabZ8_ASwfgURyAjYWDoZekuzhNts8DTr64yFveFfHx0V4qVQK-mRqFWfH01yjsi3AI/pub?start=false&loop=true&delayms=10000'
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
					{ name: 'Gunicorn', icon: SimpleIconsGunicorn }
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
	}
];

export default projects;
