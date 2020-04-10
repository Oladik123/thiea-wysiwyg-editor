import State from "../ReduxBasics/State";
import Action, {ActionTypes} from "../ReduxBasics/Actions";

export function setImage(state: State = new State(), action: Action) {
    if (action.type == ActionTypes.setImage) {
        return {
            ...state,
            image: action.data.image
        }
    } else {
        return state;
    }
}
