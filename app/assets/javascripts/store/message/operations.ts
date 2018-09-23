import { AnyAction, Dispatch } from "redux";

import * as generalUtils from "../../utils/general";
import {IMessage} from "./types";

export interface IOperations {
    send: (message: IMessage) => any;
}

export const operations = (dispatch: Dispatch<AnyAction>): IOperations => {

    const send: any = (message: IMessage) => {
        fetch("http://api.gregbucko.com/message", {
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then((response) => {
            console.log("response", response);

            if (response.status === 200) {
                generalUtils
                    .notification()
                        .success("Your message was sent.");
            } else {
                generalUtils
                    .notification()
                        .error("There was an error while sending your message. Try again later.");
            }
        });
    };

    return {
        send,
    };
};
