export enum ActionTypes {
    setImage,
    dragEnd,
    resize
}

export default class Action {
    type: ActionTypes;
    data: any;
}

export function setImageAction(image: any) {
    return {
        type: ActionTypes.setImage,
        data: {
            image: image
        }
    }
}

export function dragEndAction(result: any) {
    return {
        type: ActionTypes.dragEnd,
        data: {
            result: result
        }
    }
}

export function resizeAction(document: Document) {
    return {
        type: ActionTypes.resize,
        data: {
            document: document
        }
    }

}