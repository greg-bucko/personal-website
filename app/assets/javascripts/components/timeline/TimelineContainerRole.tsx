import * as React from "react";
import Hexagon from "react-hexagon";

import {Typography} from "@material-ui/core";
import {FaUserTie} from "react-icons/fa";

interface ITimelineContainerRoleProps {
    color: string;
    role: string;
    description: string;
}

export default class TimelineContainerRole extends React.Component<ITimelineContainerRoleProps> {

    public render() {
        return (
            <div className="role">
                <div className="title">
                    <div className="avatar">
                        <div className="icon-wrapper">
                            <FaUserTie className="icon"/>
                            <Hexagon
                                className="hexagon"
                                flatTop={true}
                                style={{ stroke: "none", fill: this.props.color }}
                            />
                        </div>
                    </div>
                    <Typography gutterBottom={true} variant="title" component="h2" className="text">
                        {this.props.role}
                    </Typography>
                </div>
                <Typography gutterBottom={true} variant="body2" component="h1" className="content" align="justify">
                    {this.props.description}
                </Typography>
            </div>
        );
    }
}
