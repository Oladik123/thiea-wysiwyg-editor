import * as React from 'react';
import DragSources from "./Model/DragSources";

class VariableInListProps {
}

class VariableInListState {
}

export class VariableInList extends React.Component {
    props: VariableInListProps;
    state: VariableInListState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;

        const getStyles = () => {
            return {
                width: this.props.width || 'auto',
                position: item.stateTarget === DragSources.unusedItems ? 'relative' : 'absolute'
            }
        }


        return <div className="list-item"
                    style={getStyles()}
                    ref={this.props.elementRef}>
            <div className="list-item__labels">
                <div className="list-item__title">
                    {item.name}
                </div>
                <div className="list-item__properties">
                    {item.purpose + ' ' + item.type + ' ' + item.ownerInputPort + ' ' + item.startBit}
                </div>
            </div>
            <div className="list-item__indicator drag-handler">
                <svg height={50} width={50}>
                    <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
                </svg>
            </div>
        </div>

    }
}