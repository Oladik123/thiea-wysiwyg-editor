export enum ActionTypes {
    setImage,
    addIndicator,
    removeIndicator
}

export default class Action {
    type: ActionTypes;
    data: any;
}

export function setImage(image : any) {
    return {
        type: ActionTypes.setImage,
        data: {
            image: image
        }
    }
}