import * as React from "react";

import {Typography} from "@material-ui/core";
import {FaBriefcase} from "react-icons/fa";

import {skills} from "./timeline/Skill";
import TimelineContainer from "./timeline/TimelineContainer";

export default class Experience extends React.Component<{}> {

    private readonly items = [
        {
            color: "#ce0303",
            date: "2017 - Present",
            description: `Co-founded a platform which aims to provide an easy to use solution for building applications.
            Architected and implemented authentication, authorization, billing, events,  notifications, storage,
            monitoring, scaling and user interface.`,
            icon: <FaBriefcase/>,
            institution: "InvisibleGearz",
            location: "Cambridge, United Kingdom",
            role: "Co-founder",
            skills: [
                skills.docker,
                skills.mesos,
                skills.marathon,
                skills.marathon_lb,
                skills.mesos_dns,
                skills.chroson,
                skills.swagger,
                skills.akka,
                skills.minio,
                skills.mongo_db,
                skills.aws,
                skills.postgresql,
            ],
        },
        {
            color: "#ce0303",
            date: "2017 - Present",
            description: `Leading a team of 8 people working on delivering a unified user interface framework for a
            suite of applications. Architected and implemented the initial version of the framework, REST APIs,
            authentication system and micro-services framework architecture. Responsible for organising the work for
            the team, managing scrum meetings and grooming the backlog.`,
            icon: <FaBriefcase/>,
            institution: "Hewlett Packard Enterprise / Microfocus",
            location: "Cambridge, United Kingdom",
            role: "Team leader / Scrum master",
            skills: [
                skills.react,
                skills.redux,
                skills.typescript,
                skills.webpack,
                skills.material_ui,
                skills.play_framework,
                skills.dropwizard,
                skills.keycloak,
            ],
        },
        {
            color: "#ce0303",
            date: "2014 - 2017",
            description: `Responsible for design and implementation of all user interface components, both server and
            client side, as well as backend components of the project such as: authentication, billing, REST API design,
            scheduling worker, database schema, codebase modularisation and abstraction.`,
            icon: <FaBriefcase/>,
            institution: "Hewlett Packard / Hewlett Packard Enterprise",
            location: "Cambridge, United Kingdom",
            role: "Lead developer / Scrum master",
            skills: [
                skills.node,
                skills.npm,
                skills.requirejs,
                skills.express,
                skills.ejs,
                skills.bootstrap,
                skills.lodash,
                skills.async,
                skills.d3,
                skills.jwt,
                skills.rest,
                skills.redis,
                skills.zookeeper,
                skills.cassandra,
                skills.rabbitmq,
                skills.ansible,
                skills.vagrant,
                skills.github,
            ],
            },
        {
            color: "#ce0303",
            date: "2012 - 2014",
            description: `Tasked with frontend and backend development, maintenance of the database schema, unit
            testing, integration testing and bug fixes. Responsible for release cycle, third party library
            modernisation, design and implementation of a clustered object storage, redesign of the user interface.`,
            icon: <FaBriefcase/>,
            institution: "Autonomy / Hewlett Packard",
            location: "Cambridge, United Kingdom",
            role: "Software developer",
            skills: [
                skills.java,
                skills.js,
                skills.tomcat,
                skills.quartz,
                skills.jsp,
                skills.css,
                skills.html,
                skills.jquery,
                skills.jquery_ui,
                skills.mssql,
                skills.perforce,
                skills.agile,
                skills.jenkins,
                skills.jira,
            ],
        },
    ];

    public render() {
        return (
            <div className="experience">
                <Typography
                    variant="display2"
                    component="h1"
                    align="center"
                    className="page-title"
                >
                    Experience
                </Typography>
                <TimelineContainer
                    items={this.items}
                />
            </div>
        );
    }
}
