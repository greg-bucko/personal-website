import * as React from "react";

import {Grid, Typography} from "@material-ui/core";
import Particles from "react-particles-js";

export default class Home extends React.Component<{}> {

    private readonly particlesParams = {
        particles: {
            color: {
                value: "#828282",
            },
            line_linked: {
                enable: false,
            },
            move: {
                attract: {
                    enable: false,
                },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 600,
                },
                value: 30,
            },
            opacity: {
                anim: {
                    enable: false,
                },
                random: true,
                value: 0.2,
            },
            shape: {
                polygon: {
                    nb_sides: 6,
                },
                stroke: {
                    color: "#000",
                    width: 0,
                },
                type: "polygon",
            },
            size: {
                anim: {
                    enable: true,
                    size_min: 300,
                    speed: 1,
                    sync: false,
                },
                random: true,
                value: 60,
            },
        },
    };

    public render() {
        return (
            <div className="home">
                <Particles
                    className="canvas_wrapper"
                    canvasClassName="canvas"
                    width="130%"
                    height="130%"
                    params={this.particlesParams}
                />
                <div className="wrapper">
                    <div className="fill">
                        <Grid container={true} direction="column" alignItems="center" justify="center">
                            <Grid item={true} className="grid">
                                <Typography variant="display3" className="text">
                                    Hello, my name is <span className="highlight">Greg Bucko</span>.
                                </Typography>
                                <Typography variant="display1" className="text">
                                    <span className="highlight">Software Architect</span> by experience.
                                </Typography>
                                <Typography variant="display1" className="text">
                                    <span className="highlight">AI researcher</span> by passion.
                                </Typography>
                                <Typography variant="display1" className="text">
                                    <span className="highlight">Physicist</span> by education.
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}
