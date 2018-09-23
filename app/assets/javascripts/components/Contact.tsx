import * as React from "react";

import {Typography} from "@material-ui/core";

import Footer from "./contact/Footer";
import Message from "./contact/Message";

import {IOperations} from "../store/message/operations";

interface IContactProps {
    messageOps: IOperations;
}

export default class Contact extends React.Component<IContactProps> {

    public render() {
        return (
            <div className="contact">
                <Typography
                    variant="display2"
                    component="h1"
                    align="center"
                    className="page-title"
                >
                    Contact
                </Typography>
                <Message messageOps={this.props.messageOps}/>
                <Footer />
            </div>
        );
    }
}
