import * as React from 'react';
import {connect} from "react-redux";
import Draggable from "react-draggable";
import {dragEndAction, dragStartAction} from "./ReduxBasics/Actions";

class ListItemState {
}

export class ListItem extends React.Component {
    state: ListItemState;

    constructor(props: any) {
        super(props);
    }


    render() {
        const item = this.props.item;

        return <Draggable position={getItemPosition(item)}
                          onStop={() => this.props.onDragEnd(item)}
                          onStart={() => this.props.onDragStart(item)}>
            <div className="list-item"
                 style={getItemStyle(item)}>
                <div className="list-item__labels">
                    <div className="list-item__title">
                        {item.name}
                    </div>
                    <div className="list-item__properties">
                        { item.purpose + ' ' + item.type + ' ' + item.ownerInputPort + ' ' + item.startBit}
                    </div>
                </div>
                <div className="list-item__indicator">
                    <svg height="50" width="50">
                        <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
                    </svg>
                </div>
            </div>
        </Draggable>;

        function getItemPosition(item: any) {
            return item.inList ? {x: 0, y: 0} : null
        }

        function getItemStyle(item: any) {
            return !item.inList ? {zIndex: 1} : {zIndex: 0};
        }

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

const ConnectedListItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

export default ConnectedListItem;