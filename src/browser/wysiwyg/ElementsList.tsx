import * as React from 'react';
import {DragDropContext} from 'react-beautiful-dnd'

class ElementsListState {
}

export class ElementsList extends React.Component {
    state: ElementsListState;

    constructor(props: any) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd() {
        console.log(100);
    }

    render() {
        return <div className="elements-list">
            <DragDropContext onDragEnd={this.onDragEnd}>
            </DragDropContext>
        </div>;
    }
}