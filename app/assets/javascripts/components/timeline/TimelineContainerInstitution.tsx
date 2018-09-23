import * as React from "react";

import {Typography} from "@material-ui/core";

interface ITimelineContainerInstitutionProps {
    institution: string;
    location: string;
}

export default class TimelineContainerInstitution extends React.Component<ITimelineContainerInstitutionProps> {

    public render() {
        return (
            <div className="institution">
                <Typography gutterBottom={true} variant="title" component="h2">{this.props.institution}</Typography>
                <Typography gutterBottom={true} variant="subheading" component="h1">{this.props.location}</Typography>
            </div>
        );
    }
}
