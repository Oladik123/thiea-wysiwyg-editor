export enum ActionTypes {
    setImage,
    dragEnd,
    dragStart,
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

export function dragEndAction(item: any) {
    return {
        type: ActionTypes.dragEnd,
        data: {
            item: item
        }
    }
}

export function dragStartAction(item: any) {
    return {
        type: ActionTypes.dragStart,
        data: {
            item: item
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