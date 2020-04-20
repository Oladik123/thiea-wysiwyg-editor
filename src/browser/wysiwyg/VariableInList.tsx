import * as React from 'react';

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
        return <div className="list-item"
                    style={getItemStyle(item)}
                    ref={this.props.elementRef}>
            <div className="list-item__labels">
                <div className="list-item__title">
                    {item.name}
                </div>
                <div className="list-item__properties">
                    {item.purpose + ' ' + item.type + ' ' + item.ownerInputPort + ' ' + item.startBit}
                </div>
            </div>
            <div className="list-item__indicator">
                <svg height={50} width={50}>
                    <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
                </svg>
            </div>
        </div>

        function getItemStyle() {
            return !item.fixedInList ? {zIndex: 1} : {zIndex: 0};
        }

    }
}