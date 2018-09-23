import * as R from "ramda";
import * as React from "react";
import Hexagon from "react-hexagon";

import {Avatar, Chip, Grid, Typography} from "@material-ui/core";
import {FaCog, FaUserCog} from "react-icons/fa";

import {ISkill} from "./Skill";

interface ITimelineContainerSkillsProps {
    items: ISkill[];
    color: string;
}

export default class TimelineContainerSkills extends React.Component<ITimelineContainerSkillsProps> {

    private readonly renderItems = R.addIndex<ISkill>(R.map)((skill: ISkill, index: number) => {
        const onClick = (event: React.MouseEvent<HTMLElement>) => {
            if (skill.url) {
                const win = window.open(skill.url, "_blank");

                if (win) {
                    win.focus();
                }
            }
        };

        const renderAvatar: JSX.Element = (
            <Avatar className="avatar">
                {skill.icon ? skill.icon : <FaCog/>}
            </Avatar>
        );

        return (
            <Grid item={true} key={index}>
                <Chip
                    className="chip"
                    avatar={renderAvatar}
                    label={skill.name}
                    onClick={typeof skill.url !== "undefined" ? onClick : undefined}
                    clickable={typeof skill.url !== "undefined"}
                />
            </Grid>
        );
    }, this.props.items);

    public render() {
        return (
            <div className="skills">
                <div className="title">
                    <div className="avatar">
                        <div className="icon-wrapper">
                            <FaUserCog className="icon"/>
                            <Hexagon
                                className="hexagon"
                                flatTop={true}
                                style={{ stroke: "none", fill: this.props.color }}
                            />
                        </div>
                    </div>
                    <Typography gutterBottom={true} variant="title" component="h2" className="text">Skills</Typography>
                </div>
                <div className="content">
                    <Grid container={true} spacing={8} direction="row">
                    {this.renderItems}
                    </Grid>
                </div>
            </div>
        );
    }
}
