import * as React from 'react';
import {connect} from "react-redux";
import State from "./Model/State";
import {dragEndAction, dragStartAction} from "./ReduxBasics/Actions";
import ConnectedListItem from "./ListItem";

class ElementsListState {
}

export class ElementsList extends React.Component {
    props: State;
    state: ElementsListState;

    constructor(props: any) {
        super(props);
    }


    render() {
        const elementList = this.props.dragState.unusedItems || [];
        return <div className="elements-list" id="wysiwyg-elements-list">
            {elementList.map(element => <ConnectedListItem item={element} key={element.id}/>)}
        </div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDragEnd: (item: any) => {
            dispatch(dragEndAction(item))
        },
        onDragStart: (item: any) => {
            dispatch(dragStartAction(item))
        }
    }
}

const ConnectedElementsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementsList);

export default ConnectedElementsList;