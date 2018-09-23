import * as R from "ramda";
import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppBar, Button, Toolbar} from "@material-ui/core";

export interface INavigationItem {
    name: string;
    ref: any;
}

interface INavigationProps {
    items: INavigationItem[];
}

export default class Navigation extends React.Component<INavigationProps> {

    public render() {
        const renderItems = R.addIndex<INavigationItem>(R.map)((item: INavigationItem, index: number) => {
            const onClick = () => {
                const domNode: any = ReactDOM.findDOMNode(item.ref.current);

                if (domNode) {
                    window.scrollTo({
                        behavior: "smooth",
                        top: domNode.offsetTop,
                    });
                }
            };

            return (
                <Button
                    key={index}
                    onClick={onClick}
                    color="primary"
                    className="button"
                >
                    {item.name}
                </Button>
            );
        }, this.props.items);

        return (
            <div className="navigation">
                <AppBar position="fixed" className="app-bar">
                    <Toolbar>
                        <div className="fill"/>
                        {renderItems}
                        <div className="fill"/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
