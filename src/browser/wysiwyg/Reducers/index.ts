import {combineReducers, createStore} from "redux";
import {changeDragState, setImage} from "./Reducers";

const rootReducer = combineReducers({
    image: setImage,
    dragState: changeDragState
})


export const store = createStore(rootReducer);