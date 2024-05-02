import React from 'react';
const experience = [
	{
		name: "Front End Intern",
		org: "InternPixel",
		location: "Remote Internship",
		time: "Mar'24 - Apr'24 (1 month)",
        logo : "/icons/org/internpixel_logo.jpg",
        logo_dark : "/icons/org/internpixel_logo.jpg",
        skills : [
            "HTML",
            "CSS",
            "Javascript",
            "Git",
            "GitHub",
        ],
        desc : [
            React.createElement(React.Fragment, {children : "Work on front-end project using git and github."}),
            React.createElement(React.Fragment, {children : "Collaborated with other team members."}),
            React.createElement(React.Fragment, {children : "Lead a team of 13 members."}),
        ]
	},
	{
		name: "Front End Developer",
		org: "Sanganika DDUC",
		location: "Deen Dayal Upadhaya College, Dwarka Sector-3",
		state: "New Delhi, india",
		time: "Dec'23 - Apr'23 (5 months)",
        logo : "/icons/org/sanganika-black.png",
        logo_dark : "/icons/org/sanganika-white.png",
        skills : [
            "React.js",
            "Figma",
            "Tailwind CSS",
            "CSS",
            "Git",
            "GitHub",
            "cPanel",
        ],
        desc : [
            React.createElement(React.Fragment, {children : "Worked on the official website of sanganika DDUC, Department of Computer Science, Deen Dayal Upadhyaya college, Delhi Univertisy"}),
            React.createElement(React.Fragment, {children : "Designed, Developed The whole website from scratch (currently Maintaining.)"}),
            React.createElement(React.Fragment, {children : ["official website link :- ", React.createElement('a', {
                href : "https://dduc.acm.org/sanganika",
                className : "text-basegreen-300 dark:text-darkbasegreen-300 font-semibold",
                children : "dduc.acm.org/sanganika"
            })]}),
        ]
	},
	{
		name: "Python Developer",
		org: "Axe Consultancy and Security Services LLC",
		location: "Remote Intership",
		time: "Nov'23 - Dec'23 (1 month)",
        logo : "/icons/org/axe_consultancy.jpg",
        logo_dark : "/icons/org/axe_consultancy.jpg",
        skills : [
            "python",
            "SQL",
            "REST API",
        ],
        desc : [
            React.createElement(React.Fragment, {children : "Make python Scripts to automate task to upload production details in shopify store"}),
            React.createElement(React.Fragment, {children : "Used shopify API to interact with the shopify store"}),
            React.createElement(React.Fragment, {children : "Used cron job to Automate report generation of product sale."}),
        ]
	},
];

export default experience;