import {combineReducers, createStore} from "redux";
import {setImage} from "./ToolbarReducers";

const rootReducer = combineReducers({
    image: setImage
})


export const store = createStore(rootReducer);