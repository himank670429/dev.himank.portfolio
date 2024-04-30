import MonitorIcon from '@mui/icons-material/Monitor';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import ApiIcon from '@mui/icons-material/Api';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const skills = [
	{
		name: "Front End",
		icon: React.createElement(MonitorIcon),
		skills: [
			{ name: "html", icon: "/icons/skills/html.svg", "dark-icon": "" },
			{ name: "css", icon: "icons/skills/css.svg", "dark-icon": "" },
			{
				name: "javascript",
				icon: "icons/skills/javascript.svg",
				"dark-icon": "",
			},
			{ name: "react", icon: "icons/skills/react.svg", "dark-icon": "" },
			{
				name: "tailwindcss",
				icon: "icons/skills/tailwind.svg",
				"dark-icon": "",
			},
			{
				name: "bootstrap",
				icon: "icons/skills/bootstrap.svg",
				"dark-icon": "",
			},
			{ name: "jquery", icon: "/icons/skills/jquery.svg", "dark-icon": "/icons/skills/jquery_light.svg" },
			{ name: "sass", icon: "icons/skills/sass.svg", "dark-icon": "/icons/skills/sass_light.svg" },
		],
	},
	{
		name: "APIs",
		icon: React.createElement(ApiIcon),
		skills: [
			{
				name: "REST API",
				icon: "icons/skills/REST.svg",
				"dark-icon": "icons/skills/REST_light.svg",
			},
		],
	},
	{
		name: "Back End",
		icon: React.createElement(TerminalIcon),
		skills: [
			{
				name: "node",
				icon: "icons/skills/node.svg",
				"dark-icon": "",
			},
			{
				name: "express",
				icon: "icons/skills/express.svg",
				"dark-icon": "icons/skills/express_light.svg",
			},
			{
				name: "python",
				icon: "icons/skills/python.svg",
				"dark-icon": "",
			},
			{
				name: "flask",
				icon: "icons/skills/flask.svg",
				"dark-icon": "icons/skills/flask_light.svg",
			},
			{
				name: "django",
				icon: "icons/skills/django.svg",
				"dark-icon": "icons/skills/django_light.svg",
			},
			{
				name: "firebase",
				icon: "icons/skills/firebase.svg",
				"dark-icon": "",
			},
			{
				name: "supabase",
				icon: "icons/skills/supabase.svg",
				"dark-icon": "",
			},
		],
	},
	{
		name: "Database",
		icon: React.createElement(StorageIcon),
		skills: [
			{
				name: "MySQL",
				icon: "icons/skills/mysql.svg",
				"dark-icon": "icons/skills/mysql_light.svg",
			},
			{
				name: "PostgreSQL",
				icon: "icons/skills/postgreSQL.svg",
				"dark-icon": "",
			},
			{
				name: "MongoDB",
				icon: "icons/skills/mongo.svg",
				"dark-icon": "",
			},
		],
	},
	{
		name: "Version Control",
		icon: React.createElement(FontAwesomeIcon, {icon : faCodeBranch}),
		skills: [
			{
				name: "Git",
				icon: "icons/skills/git.svg",
				"dark-icon": "",
			},
			{
				name: "GitHub",
				icon: "icons/skills/github.svg",
				"dark-icon": "icons/skills/github_light.svg",
			},
		],
	},
	{
		name: "Miscellaneous",
		icon: React.createElement(MiscellaneousServicesIcon),
		skills: [
			{
				name: "gcc",
				icon: "icons/skills/google_cloud.svg",
				"dark-icon": "",
			},
			{
				name: "figma",
				icon: "icons/skills/figma.svg",
				"dark-icon": "",
			},
			{
				name: "JWT",
				icon: "icons/skills/jwt.svg",
				"dark-icon": "",
			},
		],
	},
];

export default skills;
