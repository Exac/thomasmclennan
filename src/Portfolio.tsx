import * as React from 'react';
import chocan480x480 from './img/chocan@480x480.png';
import chocan720x480 from './img/chocan@720x480.png';
import chollima480x480 from './img/chollima2@480x480.jpg';
import chollima720x480 from './img/chollima2@720x480.jpg';
import conbfuscate480x480 from './img/conbfuscate@480x480.png';
import conbfuscate720x480 from './img/conbfuscate@720x480.png';
import mk480x480 from './img/mk@480x480.png';
import mk720x480 from './img/mk@720x480.png';
import skada480x480 from './img/skadainline@480x480.jpg';
import skada720x130 from './img/skadainline@720x130.png';
import './Portfolio.css';


class Portfolio extends React.Component {

    private projects: any[] = [
        {
            title: "Chollima",
            url: { 
                code: "https://github.com/exac/comp-manager",
                live: null
            },
            // tslint:disable-next-line:object-literal-sort-keys
            tech: [
                "Node",
                "Angular 6",
                "TypeScript",
                "PostgreSQL",
                "ES6",
                "Lodash",
                "Karma",
                "Mocha",
                "Jasmine",
                "Sinon.js",
                "Rewire",
                "WebPack",
                "ts-node",
                "Passport.js",
                "Bcrypt",
                "Express",
                "node-mailer",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "Visio",
                "Illustrator",
                "Photoshop"
            ],
            year: "2018",
            company: "BC Speed Skating",
            description: "Chollima is a fully-fledged meet management app for speed skating competitions.",
            imageSquare: chollima480x480,
            imageWide: chollima720x480
        },
        {
            title: "MK App",
            url: { 
                code: "https://github.com/exac/mark-prod",
                live: "http://mk.thomasmclennan.ca"
            },
            // tslint:disable-next-line:object-literal-sort-keys
            tech: [
                "Angular 4",
                "Angular 2",
                "TypeScript",
                "Lodash",
                "Karma",
                "Gulp",
                "Illustrator"
            ],
            year: "2017-2018",
            company: "BC Speed Skating",
            description: "Mark is a web app used by the BC Speed Skating Association to assist video referees in-province.",
            imageSquare: mk480x480,
            imageWide: mk720x480
        },
        {
            title: "Conbfuscate",
            url: { 
                code: "https://github.com/exac/conbfuscate",
                live: null
            },
            // tslint:disable-next-line:object-literal-sort-keys
            tech: [
                "Node",
                "TypeScript 3",
                "Express",
                "node-mailer",
                "Karma",
                "ts-node",
                "Heroku"
            ],
            year: "2018",
            company: "Open Source",
            description: "Conbfuscate is a simple Heroku reflection service. A visitor to your site inputs their email and a message for you, then the Conbfuscate server is pinged over HTML and sends an email to you. Conbfuscate allows you to have users email you without knowing your email, and without paying for a back-end server. ",
            imageSquare: conbfuscate480x480,
            imageWide: conbfuscate720x480
        },
        {
            title: "Skada Inline",
            url: { 
                code: "https://github.com/exac/skadainline",
                live: "https://www.curseforge.com/wow/addons/skada"
            },
            // tslint:disable-next-line:object-literal-sort-keys
            tech: [
                "LUA"
            ],
            year: "2016",
            company: "Open Source",
            description: "SkadaInline is a WoW Addon that has been downloaded 11 million times since I released it. It displays data to players in a minimalistic fashion. In June 2016, Skada Inline was merged into the mainline addon.",
            imageSquare: skada480x480,
            imageWide: skada720x130
        },
        {
            title: "Chocoholics Anonymous",
            url: { 
                code: "https://github.com/Exac/COMP370",
                live: null
            },
            // tslint:disable-next-line:object-literal-sort-keys
            tech: [
                "PHP",
                "MySQL",
                "Linux",
                "Git",
                "Shell Scripts",
                "PHPUnit",
                "HTML",
                "CSS"
            ],
            year: "2016",
            company: "UFV, COMP 370: Software Engineering",
            description: "This is my term project for UFV's Software Engineering course. I worked in conjunction with Navi Gill, and  Farzin Dhanji. Easily the top project in the class. We ran the server at my house on an old laptop running CentOS.",
            imageSquare: chocan480x480,
            imageWide: chocan720x480
        },
    ];

    public createProjects = () => {
        const projectsList = this.projects.map((project, index) => {
            return (
                <section key={index}>
                    <section className="name">
                        <h2>{project.title}</h2>
                        <p>{project.year}, {project.company}</p>
                        <a className="code" href={project.url.code ? project.url.code : ""}/>
                        <a className="live" href={project.url.live ? project.url.live : ""}/>
                        {this.createUl(project.tech)}
                    </section>
                    <section className="description">
                        <p>{project.description}</p>
                    </section>
                    <section className="image">
                        <picture>
                            <source media="(max-width: 800px)" srcSet={project.imageWide} />
                            <source media="(min-width: 800px)" srcSet={project.imageSquare} />
                            <img src={conbfuscate480x480} alt="" />
                        </picture>
                    </section>
                </section>
            );
        });
        return <div className="Portfolio">{projectsList}</div>;
    }

    public createUl = (listItem: string[]) => {
        const list = listItem.map((li, index) => {
            return (
                <li key={index}>{li}</li>
            );
        });
        return <ul>{list}</ul>
    };

    public render() {
        return (
            <div>{this.createProjects()}</div>
        )
    }
}

export default Portfolio;