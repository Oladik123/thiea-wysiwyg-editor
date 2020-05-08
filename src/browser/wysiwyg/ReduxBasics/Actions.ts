import Indicator from "../Model/Indicator/Indicator";

export enum ActionTypes {
    openSelectionIndicatorDropdown,
    setImage,
    dragEnd,
    dragStart,
    drag,
    resize,
    selectIndicator,
    changeIndicatorProperty,
    chooseEditableItem
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

export function selectIndicator(item: any, newType: any) {
    return {
        type: ActionTypes.selectIndicator,
        data: {
            newType: newType,
            item: item
        }
    }
}

export function openSelectionIndicatorDropdown(event: any, item: any) {
    return {
        type: ActionTypes.openSelectionIndicatorDropdown,
        data: {
            event: event,
            item: item
        }
    }
}

export function updateIndicatorProperties(itemId: string, indicator: Indicator) {
    return {
        type: ActionTypes.openSelectionIndicatorDropdown,
        data: {
            itemId: itemId,
            indicator: indicator
        }
    }
}