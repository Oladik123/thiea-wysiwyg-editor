import Action, {ActionTypes} from "../ReduxBasics/Actions";

export function setImage(state: any = {}, action: Action) {
    return action.type == ActionTypes.setImage ? action.data.image : state
}
