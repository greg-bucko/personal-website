import {reducer as toastrReducer, ToastrState} from "react-redux-toastr";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

export interface IStoreState {
    toastr: ToastrState;
}

const rootReducer = combineReducers<IStoreState>({
    toastr: toastrReducer,
});

export const configureStore = (initialState?: IStoreState): Store<IStoreState> => {
    const middleware = [
        thunk,
        createLogger(),
    ];

    return createStore(
        rootReducer as any,
        initialState as any,
        applyMiddleware(...middleware),
    ) as Store<IStoreState>;
};
