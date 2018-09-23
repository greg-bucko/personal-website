import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Hexagon from "react-hexagon";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
} from "@material-ui/core";

import {
    FaEnvelope,
} from "react-icons/fa";

import {IOperations} from "../../store/message/operations";

interface IMessageProps {
    messageOps: IOperations;
}

interface IMessageState {
    captchaValid: boolean;
    disabled: boolean;
    email: string;
    message: string;
    name: string;
}

export default class Message extends React.Component<IMessageProps, IMessageState> {
    private readonly formRef: any;
    private readonly recaptchaRef: any;

    constructor(props: IMessageProps) {
        super(props);

        this.formRef = React.createRef();
        this.recaptchaRef = React.createRef();

        this.state = {
            captchaValid: false,
            disabled: true,
            email: "",
            message: "",
            name: "",
        };
    }

    public render() {
        const nameValidators = [
            "required",
            "minStringLength:1",
            "maxStringLength:50",
        ];

        const nameErrorMessages = [
            "This field is required",
            "This field cannot be empty",
            "This field cannot have more than 50 characters",
        ];

        const emailValidators = [
            "required",
            "isEmail",
            "minStringLength:1",
            "maxStringLength:255",
        ];

        const emailErrorMessages = [
            "This field is required",
            "Email is not valid",
            "This field cannot be empty",
            "This field cannot have more than 255 characters",
        ];

        const messageValidators = [
            "required",
            "minStringLength:1",
            "maxStringLength:500",
        ];

        const messageErrorMessages = [
            "This field is required",
            "This field cannot be empty",
            "This field cannot have more than 500 characters",
        ];

        return (
            <div className="message">
                <Grid container={true} direction="column" alignItems="center" justify="center">
                    <Grid item={true}>
                        <Card className="card">
                            <div className="icon-wrapper">
                                <FaEnvelope className="icon"/>
                                <Hexagon
                                    className="hexagon"
                                    flatTop={true}
                                    style={{ stroke: "none", fill: "#ce0303" }}
                                />
                            </div>
                            <CardHeader title="Get in touch" className="header"/>
                            <CardContent className="content">
                                <ValidatorForm
                                    ref={this.formRef}
                                    onSubmit={this.onSubmit}
                                    instantValidate={true}
                                    onError={this.onError}
                                >
                                    <TextValidator
                                        id="name"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        margin="normal"
                                        fullWidth={true}
                                        name="name"
                                        validators={nameValidators}
                                        errorMessages={nameErrorMessages}
                                        validatorListener={this.validatorListener}
                                    />
                                    <TextValidator
                                        id="email"
                                        label="Email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        margin="normal"
                                        fullWidth={true}
                                        name="email"
                                        validators={emailValidators}
                                        errorMessages={emailErrorMessages}
                                        validatorListener={this.validatorListener}
                                    />
                                    <TextValidator
                                        id="message"
                                        label="Message"
                                        value={this.state.message}
                                        onChange={this.onChangeMessage}
                                        margin="normal"
                                        rows="5"
                                        multiline={true}
                                        fullWidth={true}
                                        name="message"
                                        validators={messageValidators}
                                        errorMessages={messageErrorMessages}
                                        validatorListener={this.validatorListener}
                                    />
                                    <ReCAPTCHA
                                        ref={this.recaptchaRef}
                                        className="recaptcha"
                                        sitekey="6LeVxnAUAAAAAMQKCa31q1Ar1dVgiTe9A3VyG8Bv"
                                        onChange={this.captchaSuccess}
                                        onErrored={this.captchaFailure}
                                        onExpired={this.captchaFailure}
                                    />
                                </ValidatorForm>
                            </CardContent>
                            <CardActions className="actions">
                                <Button
                                    size="small"
                                    fullWidth={true}
                                    disabled={this.state.disabled}
                                    onClick={this.send}
                                >
                                    Send
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }

    private readonly validatorListener = () => {
        const valid = this.formRef.current.isFormValid() && this.state.captchaValid;

        this.setState({
            disabled: !valid,
        });
    }

    private readonly onError = () => {
        this.setState({
            disabled: true,
        });
    }

    private readonly onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.target.value,
        });
    }

    private readonly onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value,
        });
    }

    private readonly onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            message: event.target.value,
        });
    }

    private readonly captchaSuccess = () => {
        const valid = this.formRef.current.isFormValid();

        this.setState({
            captchaValid: true,
            disabled: !valid,
        });
    }

    private readonly captchaFailure = () => this.setState({
        captchaValid: false,
        disabled: true,
    })

    private readonly onSubmit = () => { return; };

    private readonly send = () => {
        if (this.formRef.current.isFormValid()) {
            this.props.messageOps.send({
                email: this.state.email,
                message: this.state.message,
                name: this.state.name,
                response: this.recaptchaRef.current.getValue(),
            });

            this.recaptchaRef.current.reset();
            this.setState({ disabled: true });
        }
    }
}
