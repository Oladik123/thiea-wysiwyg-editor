import * as React from 'react';
import {connect} from "react-redux";
import {selectIndicator} from "../ReduxBasics/Actions";
import IndicatorType from "../Model/IndicatorType";
import {RoundLed} from "../IndicatorView/RoundLed";
import {SquareLed} from "../IndicatorView/SquareLed";
import {Numeric} from "../IndicatorView/Numeric";
import {Meter} from "../IndicatorView/Meter";
import {VSlide} from "../IndicatorView/VSlide";
import {HSlide} from "../IndicatorView/HSlide";

class SelectIndicatorDropdownProps {
}

class SelectIndicatorDropdownState {
    lastMouseoutTime: DOMTimeStamp = 0
    lastMouseoverTime: DOMTimeStamp = 1
}

export class SelectIndicatorDropdown extends React.Component {
    props: SelectIndicatorDropdownProps;
    state: SelectIndicatorDropdownState;
    lastMouseoutTime: DOMTimeStamp = 0
    lastMouseoverTime: DOMTimeStamp = 1

    constructor(props: any) {
        super(props);
        this.state = new SelectIndicatorDropdownState();
        this.onMouseout = this.onMouseout.bind(this);
        this.onMouseover = this.onMouseover.bind(this);
        this.hide = this.hide.bind(this);
        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onMouseout(event) {
        this.setState({
            lastMouseoutTime: event.timeStamp
        })
        setTimeout(this.hide, 500)
    }

    hide() {
        const item = this.props.dropdownState.item;
        if (!item || this.state.lastMouseoverTime >= this.state.lastMouseoutTime) {
            return
        }
        this.props.onIndicatorSelected(item, null)
    }

    onMouseover(event) {
        this.setState({
            lastMouseoverTime: event.timeStamp
        })
    }

    onItemSelected(type: IndicatorType) {
        this.props.onIndicatorSelected(this.props.dropdownState.item, type)
    }

    render() {
        const state = this.props.dropdownState;
        const sizes = this.props.dragState.sizes;
        if (!state.item) {
            return null
        }
        return <div className="dropdown"
                    style={getStyle(state, sizes)}
                    onMouseOut={this.onMouseout}
                    onMouseOver={this.onMouseover}>
            <div className="dropdown__content">
                {this.props.availableIndicators.filter(indicator => indicator.type !== state.item.indicator.type)
                    .map(indicator => {
                        switch (indicator.type) {
                            case IndicatorType.roundLed:
                                return {view: <RoundLed/>, key: indicator.type};
                            case IndicatorType.squareLed:
                                return {view: <SquareLed/>, key: indicator.type};
                            case IndicatorType.numeric:
                                return {view: <Numeric/>, key: indicator.type};
                            case IndicatorType.meter:
                                return {view: <Meter/>, key: indicator.type};
                            case IndicatorType.verticalSlide:
                                return {view: <VSlide/>, key: indicator.type};
                            case IndicatorType.horizontalSlide:
                                return {view: <HSlide/>, key: indicator.type};
                        }
                    })
                    .map(indicator => <div className="dropdown__item" key={indicator.key}
                                           onClick={() => this.onItemSelected(indicator.key)}>
                        {indicator.view}
                    </div>)
                }
            </div>
        </div>

        function getStyle(state, sizes) {
            return {
                visibility: state.shown ? 'visible' : 'hidden',
                top: sizes.editor.y ? (state.clientTop - sizes.editor.y) - 5 + 'px' : 0,
                left: sizes.editor.x ? state.clientLeft - sizes.editor.x - 5 + 'px' : 0
            }
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
        onIndicatorSelected: (item: any, indicator: any) => {
            dispatch(selectIndicator(item, indicator))
        }
    }
}


const ConnectedSelectIndicatorDropdown = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectIndicatorDropdown);

export default ConnectedSelectIndicatorDropdown;