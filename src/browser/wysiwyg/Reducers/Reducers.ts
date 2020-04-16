import Action, {ActionTypes} from "../ReduxBasics/Actions";
import Item from "../Model/Item";
import DragSources from "../Model/DragSources";

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
    } else {
        return state;
    }
}

function onDragEnd(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    const stateItem = result.unusedItems.find((element: any) => item.id === element.id);

    if (stateItem) {
        stateItem.fixedInList = true;
        stateItem.dragTarget = DragSources.unusedItems;
    }
    return result;
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