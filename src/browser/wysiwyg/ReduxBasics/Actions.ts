export enum ActionTypes {
    openSelectionIndicatorDropdown,
    setImage,
    dragEnd,
    dragStart,
    drag,
    resize,
    selectIndicator
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

export function dragEndAction(item: any, element: any) {
    return {
        type: ActionTypes.dragEnd,
        data: {
            item: item,
            element: element
        }
    }
}

export function dragStartAction(item: any, element: any) {
    return {
        type: ActionTypes.dragStart,
        data: {
            item: item,
            element: element
        }
    }
}

export function dragAction(item: any, element: any) {
    return {
        type: ActionTypes.drag,
        data: {
            item: item,
            element: element
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

export function selectIndicator(item: any, indicator: any) {
    return {
        type: ActionTypes.selectIndicator,
        data: {
            indicator: indicator,
            item: item
        }
    }
}

export function openSelectionIndicatorDropdown(event, item: any) {
    return {
        type: ActionTypes.openSelectionIndicatorDropdown,
        data: {
            event: event,
            item: item
        }
    }
}