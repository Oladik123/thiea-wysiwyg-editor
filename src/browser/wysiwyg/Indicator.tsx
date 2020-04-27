import * as React from 'react';
import DragSources from "./Model/DragSources";
import {Meter} from "./IndicatorView/Meter";
import {openSelectionIndicatorDropdown} from "./ReduxBasics/Actions";
import {connect} from "react-redux";

class IndicatorProps {
}

class IndicatorState {
}

export class Indicator extends React.Component {
    props: IndicatorProps;
    state: IndicatorState;

    constructor(props: any) {
        super(props);
        this.dialogRef = React.createRef();
        this.state = {
            modalShown: false
        }
    }

    render() {
        const item = this.props.item;
        return <div style={getIndicatorStyle(item, this.props.margin)} ref={this.props.elementRef}
                    className="indicator drag-handler"
                    onContextMenu={(event) => this.props.onIndicatorRightClick(event, item)}>
            {getIndicator()}
        </div>;

        function getIndicator() {
            return <Meter item={item}/>
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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIndicatorRightClick: (event, item: any) => {
            event.preventDefault();
            dispatch(openSelectionIndicatorDropdown(event, item))
        }
    }
}


const ConnectedIndicator = connect(
    mapStateToProps,
    mapDispatchToProps
)
(Indicator);

export default ConnectedIndicator;