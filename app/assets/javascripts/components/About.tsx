import * as React from "react";
import ReactSVG from "react-svg";

import {Grid, Typography} from "@material-ui/core";

import InfoContainer from "./about/InfoContainer";
import PassionContainer from "./about/PassionContainer";

export default class About extends React.Component<{}> {

    public render() {
        return (
            <div className="about">
                <Typography
                    gutterBottom={true}
                    variant="display2"
                    component="h1"
                    align="center"
                    className="page-title"
                >
                    About
                </Typography>
                <div className="info-wrapper">
                    <Grid container={true} alignItems="center" justify="center">
                        <InfoContainer
                            image="assets/images/greg_bucko.jpg"
                            title="Greg Bucko"
                            description="My passion for computers started since I was 6 when my father bought my first
                            ever PC. Since then I have found out that my passion for technology is ever growing and led
                            me to start my journey with a Physics with Technological Physics degree from The University
                            of Manchester. The degree gave me an opportunity to learn about a range of technologies such
                            as electronics, programming, photonics any many more. Once my degree was over I have chosen
                            software development as my career path as it was always one of the subjects I enjoyed the
                            most. Now I am a software architect working in the technology industry for over 6 years. I
                            have been involved in multiple enterprise level software projects at various positions
                            such as software developer, scrum master, lead developer and team leader. I am also a
                            co-founder of InvisibleGearz project which aims to provide a platform for building scalable
                            applications."
                        />
                    </Grid>
                </div>
                <div className="passions-wrapper">
                    <Grid container={true} spacing={40} direction="row" justify="center">
                        <Grid item={true}>
                            <PassionContainer
                                icon={<ReactSVG src="assets/icons/boxing.svg" className="icon"/>}
                                title="Muay Thai"
                                description="I have started my adventure with martial arts since childhood. It was
                                always a great way to stay fit, learn self discipline and overcome challenges. Thai
                                boxing taught me how to remain calm and strengthened me mentally."
                            />
                        </Grid>
                        <Grid item={true}>
                            <PassionContainer
                                icon={<ReactSVG src="assets/icons/dj.svg" className="icon"/>}
                                title="Music production"
                                description="Music has been a part of my life since I can remember. I have always
                                been fascinated by the infinite possibilities of sound creation and arrangement.
                                This has led me to start my journey with music production, predominantly in electronic
                                music genre."
                            />
                        </Grid>
                        <Grid item={true}>
                            <PassionContainer
                                icon={<ReactSVG src="assets/icons/disco-ball.svg" className="icon"/>}
                                title="Salsa dancing"
                                description="I have never been a dancer, however the mind and body coordination
                                required for dancing has always been appealing to me. This inspired me to start
                                salsa dancing which proved to be a great way to learn, relax and meet new amazing
                                people."
                            />
                        </Grid>
                        <Grid item={true}>
                            <PassionContainer
                                icon={<ReactSVG src="assets/icons/artificial-intelligence.svg" className="icon"/>}
                                title="Artificial Intelligence"
                                description="I was always a big fan of Sci-Fi movies and the prospect of Artificial
                                Intelligence. In fact if not for my amazing Physics teacher in college I would have
                                enrolled for AI course at the university instead. I believe that it will be the future
                                of humanity and I plan to be a part of building it."
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
