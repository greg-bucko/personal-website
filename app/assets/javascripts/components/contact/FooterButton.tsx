import * as React from "react";

import {IconButton, Tooltip} from "@material-ui/core";

interface IFooterButtonProps {
    icon: JSX.Element;
    title: string;
    url: string;
}

export default class FooterButton extends React.Component<IFooterButtonProps> {

    public render() {
        return (
            <Tooltip title={this.props.title} placement="top">
                <IconButton component="span" color="primary" onClick={this.onClick}>
                    {this.props.icon}
                </IconButton>
            </Tooltip>
        );
    }

    private readonly onClick = () => {
        const win = window.open(this.props.url, "_blank");

        if (win) {
            win.focus();
        }
    }
}
