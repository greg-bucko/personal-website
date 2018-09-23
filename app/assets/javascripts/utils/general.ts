import {toastr} from "react-redux-toastr";

export const notification = () => {

    const error = (message: string) => {
        toastr.clean();
        toastr.error("Error", message);
    };

    const info = (message: string) => {
        toastr.clean();
        toastr.info("Info", message);
    };

    const success = (message: string) => {
        toastr.clean();
        toastr.success("Success", message);
    };

    return {
        error,
        info,
        success,
    };
};
