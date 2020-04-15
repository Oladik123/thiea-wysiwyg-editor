import Action, {ActionTypes} from "../ReduxBasics/Actions";
import Item from "../Model/Item";

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
    } else {
        return state;
    }
}

function onDragEnd(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    if (result.unusedItems.find(element => item.id === element.id)) {
        result.unusedItems.find(element => item.id === element.id).inList = true;
    }
    return result;
}

function onDragStart(state: any, action: any) {
    const result = {
        ...state
    };

    const item = action.data.item;
    if (result.unusedItems.find(element => item.id === element.id)) {
        result.unusedItems.find(element => item.id === element.id).inList = false;
    }

    return result;
}

function onResize(state: any, action: any) {
    const document = action.data.document;
    const editorElement = document.querySelector('#wysiwyg');
    const listElement = document.querySelector('#wysiwyg-element-list');
    const workspaceElement = document.querySelector('#wysiwyg-workspace');

    if (!editorElement || !listElement || !workspaceElement) {
        return state;
    }

    return {
        ...state,
        sizes: {
            editor: editorElement.getBoundingClientRect(),
            list: listElement.getBoundingClientRect(),
            workspace: workspaceElement.getBoundingClientRect()
        }
    };
}