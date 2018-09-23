import * as React from "react";

import {Grid, Typography} from "@material-ui/core";
import {FaGithub, FaLinkedin, FaSoundcloud, FaUserTie} from "react-icons/fa";

import FooterButton from "./FooterButton";

export default class Footer extends React.Component<{}> {

    public render() {
        return (
            <div className="footer">
                <Grid container={true} spacing={16}>
                    <Grid item={true} xs={12}>
                        <Grid container={true} spacing={24} justify="center">
                            <Grid item={true}>
                                <FooterButton
                                    url="https://www.linkedin.com/in/greg-bucko-b03314155"
                                    icon={<FaLinkedin />}
                                    title="LinkedIn"
                                />
                            </Grid>
                            <Grid item={true}>
                                <FooterButton
                                    url="https://github.com/greg-bucko"
                                    icon={<FaGithub />}
                                    title="GitHub"
                                />
                            </Grid>
                            <Grid item={true}>
                                <FooterButton
                                    url="https://soundcloud.com/gregjitta"
                                    icon={<FaSoundcloud />}
                                    title="SoundCloud"
                                />
                            </Grid>
                            <Grid item={true}>
                                <FooterButton
                                    url="/assets/files/CV.pdf"
                                    icon={<FaUserTie />}
                                    title="CV"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Typography
                            gutterBottom={true}
                            variant="subheading"
                            component="h1"
                            className="author"
                        >
                            Greg Bucko &copy; 2018
                        </Typography>
                        <Typography
                            gutterBottom={true}
                            variant="caption"
                            component="span"
                            className="icons-copyright"
                        >
                            Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                            Smashicons</a> from{" "}
                            <a
                                href="https://www.flaticon.com/"
                                title="Flaticon"
                            >
                                www.flaticon.com
                            </a>
                            {" "}are licensed by{" "}
                            <a
                                href="http://creativecommons.org/licenses/by/3.0/"
                                title="Creative Commons BY 3.0"
                                target="_blank"
                            >
                                CC 3.0 BY
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
