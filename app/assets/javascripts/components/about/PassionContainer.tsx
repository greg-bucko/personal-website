import * as React from "react";
import Hexagon from "react-hexagon";

import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";

interface IPassionContainerProps {
    title: string;
    icon: JSX.Element;
    description: string;
}

export default class PassionContainer extends React.Component<IPassionContainerProps> {

    public render() {
        return (
            <Card className="card">
                <div className="icon-wrapper">
                    {this.props.icon}
                    <Hexagon className="hexagon" flatTop={true} style={{ stroke: "none", fill: "#4285f4" }}/>
                </div>
                <CardHeader title={this.props.title} className="header"/>
                <CardContent>
                    <Typography component="p" align="justify">{this.props.description}</Typography>
                </CardContent>
            </Card>
        );
    }
}
