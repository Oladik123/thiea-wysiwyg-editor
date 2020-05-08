import {combineReducers, createStore} from "redux";
import {
    changeDropdownState,
    changeItemsState,
    getAvailableIndicators,
    getPropertiesListState,
    setImage
} from "./Reducers";

const rootReducer = combineReducers({
    image: setImage,
    itemsState: changeItemsState,
    dropdownState: changeDropdownState,
    availableIndicators: getAvailableIndicators,
    propertiesListState: getPropertiesListState
})


export const store = createStore(rootReducer);