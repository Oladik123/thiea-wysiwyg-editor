import Action, {ActionTypes} from "../ReduxBasics/Actions";
import Item from "../Model/Item";
import DragSources from "../Model/DragSources";
import RangedIndicator from "../Model/Indicator/RangedIndicator";
import IndicatorType from "../Model/IndicatorType";
import {BooleanIndicator} from "../Model/Indicator/BooleanIndicator";

export function setImage(state: any = {}, action: Action) {
    return action.type === ActionTypes.setImage ? action.data.image : state
}

const getItems = () => {
    const input = 'INPUT LOG I_DRYER /*name*/ 0 /*owner_input_port*/ 0 /*start_bit*/  \n' +
        'OUTPUT LOG S_HANDS /*name*/ 0 /*owner_output_port*/ 0 /*start_bit*/ ';

    return input.split('\n')
        .map(line => line.split(RegExp('\\/\\*(?:(?!\\*\\/).|[\\n\\r])*\\*\\/'))
            .join('')
            .split(' ')
            .filter(element => element !== ' ' && element !== ''))
        .map(line => new Item(line[0], line[1], line[2], line[3], line[4]));

}

const defaultDragState = {
    sizes: {
        editor: {},
        list: {},
        workspace: {}
    },
    usedItems: [],
    unusedItems: getItems()
}

export function changeDragState(state: any = defaultDragState, action: Action) {
    if (action.type === ActionTypes.resize) {
        return onResize(state, action)
    } else if (action.type === ActionTypes.dragEnd) {
        return onDragEnd(state, action);
    } else if (action.type === ActionTypes.dragStart) {
        return onDragStart(state, action);
    } else if (action.type === ActionTypes.drag) {
        return onDrag(state, action);
    } else if (action.type === ActionTypes.selectIndicator) {
        return onIndicatorSelected(state, action);
    } else {
        return state;
    }
}

function onDragEnd(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    const element = action.data.element;
    const chosen = result.unusedItems.find((element: any) => item.id === element.id) ||
        result.usedItems.find((element: any) => item.id === element.id);

    if (!chosen.dragTarget || chosen.dragTarget === chosen.stateTarget) {
        chosen.fixedInList = chosen.stateTarget === DragSources.unusedItems;
        return result;
    }

    if (chosen.dragTarget === DragSources.unusedItems) {
        chosen.stateTarget = DragSources.unusedItems;
        chosen.fixedInList = true;
        chosen.workspacePosition = {x: 0, y: 0};
        result.usedItems = result.usedItems.filter(item => item.id !== chosen.id);
        result.unusedItems.push(chosen);
    }

    if (chosen.dragTarget === DragSources.usedItems) {
        chosen.stateTarget = DragSources.usedItems;
        chosen.fixedInList = false;
        chosen.workspacePosition = getPositionInWorkspace(state, element);
        result.unusedItems = result.unusedItems.filter(item => item.id !== chosen.id);
        result.usedItems.push(chosen);
    }

    return result;

    function getPositionInWorkspace(state, element) {
        const workspaceRect = state.sizes.workspace;
        const elementRect = element.getBoundingClientRect();
        return {
            x: elementRect.x - workspaceRect.x,
            y: elementRect.y - workspaceRect.y,

        }
    }
}

function onDrag(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    const element = action.data.element;
    const target = getDroppableTarget(state, element);
    const stateItem = result.unusedItems.find((element: any) => item.id === element.id) ||
        result.usedItems.find((element: any) => item.id === element.id);

    stateItem.clientRect = element.getBoundingClientRect()
    stateItem.dragTarget = target;
    return result;

    function getDroppableTarget(state: any, element: any) {
        const elementRect = element.getBoundingClientRect();
        const list = state.sizes.list;
        const workspace = state.sizes.workspace;
        const elCenter = {
            x: elementRect.x + elementRect.width / 2,
            y: elementRect.y + elementRect.height / 2
        }

        if (list.x < elCenter.x && list.x + list.width > elCenter.x &&
            list.y < elCenter.y && list.y + list.height > elCenter.y) {
            return DragSources.unusedItems;
        }

        if (workspace.x < elCenter.x && workspace.x + workspace.width > elCenter.x &&
            workspace.y < elCenter.y && workspace.y + workspace.height > elCenter.y) {
            return DragSources.usedItems;
        }
    }
}

function onDragStart(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    if (result.unusedItems.find((element: any) => item.id === element.id)) {
        result.unusedItems.find((element: any) => item.id === element.id).fixedInList = false;
    }

    return result;
}

function onResize(state: any, action: any) {
    const document = action.data.document;
    const editorElement = document.getElementById('wysiwyg');
    const listElement = document.getElementById('wysiwyg-elements-list');
    const workspaceElement = document.getElementById('wysiwyg-workspace');

    if (!editorElement || !listElement || !workspaceElement) {
        return state;
    }

    const result = {
        ...state
    };

    result.sizes = {
        editor: editorElement.getBoundingClientRect(),
        list: listElement.getBoundingClientRect(),
        workspace: workspaceElement.getBoundingClientRect()
    }

    return result;
}

function onIndicatorSelected(state: any, action: any) {
    const result = {
        ...state
    };

    const actionItem = action.data.item;
    const item = result.unusedItems.find(element => element.id === actionItem.id) ||
        result.usedItems.find(element => element.id === actionItem.id);

    item.indicator = action.data.indicator;
    return result;
}

const defaultDropdownState = {
    shown: false,
    item: undefined,
    top: 0,
    left: 0
}

export function changeDropdownState(state: any = defaultDropdownState, action: Action) {
    const result = {
        ...state
    };

    if (action.type === ActionTypes.openSelectionIndicatorDropdown) {
        result.shown = true;
        result.item = action.data.item;
        result.clientTop = action.data.event.clientY;
        result.clientLeft = action.data.event.clientX
    } else if (action.type === ActionTypes.selectIndicator) {
        result.shown = false;
        result.item = undefined;
    }

    return result;
}

const defaultAvailableIndicators = [
    new RangedIndicator(IndicatorType.horizontalSlide),
    new RangedIndicator(IndicatorType.verticalSlide),
    new RangedIndicator(IndicatorType.meter),
    new RangedIndicator(IndicatorType.numeric),
    new BooleanIndicator(IndicatorType.roundLed),
    new BooleanIndicator(IndicatorType.squareLed)
]

export function getAvailableIndicators(state = defaultAvailableIndicators, action: Action) {
    return state;
}