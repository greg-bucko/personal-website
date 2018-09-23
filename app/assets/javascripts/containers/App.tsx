import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import * as React from "react";
import { AnyAction, Dispatch } from "redux";

import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Navigation from "../components/Navigation";

import * as messageOps from "../store/message/operations";

const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: "#fff",
            dark: "#2286c3",
            light: "#9be7ff",
            main: "#ffffff",
        },
        secondary: {
            contrastText: "#fff",
            dark: "#c41c00",
            light: "#ff8a50",
            main: "#ca4242",
        },
    },
    typography: {
        fontFamily: [
            "'Merriweather Sans'",
            "sans-serif",
        ].join(","),
    },
});

interface IAppProps {
    dispatch: Dispatch<AnyAction>;
}

export default class App extends React.Component<IAppProps> {
    private readonly homeRef: any;
    private readonly aboutRef: any;
    private readonly experienceRef: any;
    private readonly educationRef: any;
    private readonly contactRef: any;

    constructor(props: IAppProps) {
        super(props);

        this.homeRef = React.createRef();
        this.aboutRef = React.createRef();
        this.experienceRef = React.createRef();
        this.educationRef = React.createRef();
        this.contactRef = React.createRef();
    }

    public render() {
        const items = [
            { name: "Home", ref: this.homeRef },
            { name: "About", ref: this.aboutRef },
            { name: "Experience", ref: this.experienceRef },
            { name: "Education", ref: this.educationRef },
            { name: "Contact", ref: this.contactRef },
        ];

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Navigation items={items}/>
                <Home ref={this.homeRef}/>
                <About ref={this.aboutRef}/>
                <Experience ref={this.experienceRef}/>
                <Education ref={this.educationRef}/>
                <Contact ref={this.contactRef} messageOps={messageOps.operations(this.props.dispatch)}/>
            </MuiThemeProvider>
        );
    }
}
