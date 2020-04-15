import Action, {ActionTypes} from "../ReduxBasics/Actions";

export function setImage(state: any = {}, action: Action) {
    return action.type === ActionTypes.setImage ? action.data.image : state
}

const defaultDragState = {
    usedItems: [],
    unusedItems: [
        {"id": "item-0-0", "content": "item 0-0"},
        {"id": "item-1-0", "content": "item 1-0"},
        {"id": "item-2-0", "content": "item 2-0"},
        {"id": "item-3-0", "content": "item 3-0"},
        {"id": "item-4-0", "content": "item 4-0"}
    ]
}

export function changeDragState(state: any = defaultDragState, action: Action) {
    if (action.type !== ActionTypes.dragEnd) {
        return state;
    }

    const dragResult = action.data.result;
    if (dragResult.destination && dragResult.source.droppableId === dragResult.destination.droppableId) {
        return state;
    }

    const dragState = {
        ...state
    }

    const source = dragState[dragResult.source.droppableId];
    const item = source.find((item: any) => item.id === dragResult.draggableId);

    dragState[dragResult.source.droppableId] = source.filter((item: any) => item.id !== dragResult.draggableId); //?????
    dragState[dragResult.destination.droppableId].push(item);

    return dragState;
}

function onDragEnd(state, result) {

}

function onResize(state, document) {

}