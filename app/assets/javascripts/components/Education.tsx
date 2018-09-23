import * as React from "react";

import {Typography} from "@material-ui/core";
import {FaGraduationCap} from "react-icons/fa";

import {skills} from "./timeline/Skill";
import TimelineContainer from "./timeline/TimelineContainer";

export default class Education extends React.Component<{}> {

    private readonly items = [
        {
            color: "#4285f4",
            date: "2008 - 2012",
            description: `Developed excellent knowledge of key concepts underpinning most of the major fields of
            physics, especially photonics and solid state physics. Completed three programming modules and have a good
            practical experience in using C, C++, C# and Matlab to design and develop software applications. Broadened
            analytical and numerical skills throughout numerous research assignments over the course of study. Gained
            excellent presentation technique through a series of presentations that were given to senior members of
            academic staff about performed experiments and research.`,
            icon: <FaGraduationCap/>,
            institution: "University of Manchester",
            location: "Manchester, United Kingdom",
            role: "MPhys Physics with Technological Physics",
            skills: [
                skills.c,
                skills.c_plus_plus,
                skills.c_sharp,
                skills.matlab,
                skills.photonics,
                skills.mechanics,
                skills.quantum_mechanics,
                skills.particle_physics,
                skills.fluid_dynamics,
                skills.solid_state,
                skills.astronomy,
                skills.renewable_energy,
                skills.experimental_physics,
                skills.electronics,
            ],
        },
        {
            color: "#4285f4",
            date: "2005 - 2008",
            description: `Developed good programming technique – during my final Computing project I have produced a
            software application for a transport company to calculate quotations that were given to the clients.
            Achieved awards in both Mathematics and Further Mathematics.`,
            icon: <FaGraduationCap/>,
            institution: "Portsmouth College",
            location: "Portsmouth, United Kingdom",
            role: "Student",
            skills: [
                skills.maths,
                skills.physics,
                skills.computing,
                skills.further_maths,
                skills.business,
                skills.english,
            ],
        },
    ];

    public render() {
        return (
            <div className="education">
                <Typography
                    variant="display2"
                    component="h1"
                    align="center"
                    className="page-title"
                >
                    Education
                </Typography>
                <TimelineContainer items={this.items}/>
            </div>
        );
    }
}
