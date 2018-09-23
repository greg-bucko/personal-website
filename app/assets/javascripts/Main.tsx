import * as React from "react";
import { connect, Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { AnyAction, Dispatch, Store } from "redux";

import App from "./containers/App";
import {IStoreState} from "./store";

interface IPropsFromDispatch {
    dispatch: Dispatch<AnyAction>;
}

interface IOwnProps {
    store: Store<IStoreState>;
}

type AllProps =  IPropsFromDispatch & IOwnProps;

class Main extends React.Component<AllProps> {
    public render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div>
                    <ReduxToastr
                        timeOut={30000}
                        newestOnTop={true}
                        preventDuplicates={true}
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar={true}
                    />
                    <App dispatch={this.props.dispatch} />
                </div>
            </Provider>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({dispatch}),
)(Main);
