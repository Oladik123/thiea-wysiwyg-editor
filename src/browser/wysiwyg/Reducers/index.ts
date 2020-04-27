import {combineReducers, createStore} from "redux";
import {changeDragState, changeDropdownState, getAvailableIndicators, setImage} from "./Reducers";

const rootReducer = combineReducers({
    image: setImage,
    dragState: changeDragState,
    dropdownState: changeDropdownState,
    availableIndicators: getAvailableIndicators
})


export const store = createStore(rootReducer);