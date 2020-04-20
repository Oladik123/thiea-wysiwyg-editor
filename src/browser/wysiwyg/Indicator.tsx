import * as React from 'react';
import DragSources from "./Model/DragSources";

class IndicatorProps {
}

class IndicatorState {
}

export class Indicator extends React.Component {
    props: IndicatorProps;
    state: IndicatorState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <div style={getIndicatorStyle(item, this.props.margin)} ref={this.props.elementRef}
                    className="indicator"
                    onMouseDown={() => console.log('down')}>
            {getIndicator()}
        </div>;

        function getIndicator() {
            return <svg height={50} width={50}>
                <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
            </svg>
        }

        function getIndicatorStyle(item: any, indicatorMargin: any) {
            return !item.fixedInList && item.dragTarget !== DragSources.unusedItems ?
                {
                    zIndex: 1,
                    marginLeft: indicatorMargin,
                    marginBottom: '16px'
                } :
                {
                    zIndex: 0,
                    marginLeft: 'auto',
                    marginBottom: 0
                }
        }
    }

}