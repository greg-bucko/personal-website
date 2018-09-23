import * as React from "react";

import {Card, CardContent, CardMedia, Divider, Grid, Typography} from "@material-ui/core";

interface IPassionContainerProps {
    title: string;
    image: string;
    description: string;
}

export default class InfoContainer extends React.Component<IPassionContainerProps> {

    public render() {
        return (
            <Card className="card">
                <Grid container={true} alignItems="center" justify="center">
                    <Grid item={true}>
                        <CardMedia image={this.props.image} title={this.props.title} className="media"/>
                    </Grid>
                    <Grid item={true}>
                        <CardContent className="content">
                            <Typography gutterBottom={true} variant="headline" component="h2" align="center">
                                {this.props.title}
                            </Typography>
                            <Divider className="divider"/>
                            <Typography paragraph={true} align="justify">
                                {this.props.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
