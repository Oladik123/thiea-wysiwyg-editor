import * as React from 'react';
import {connect} from "react-redux";
import Draggable from "react-draggable";
import {dragAction, dragEndAction, dragStartAction} from "./ReduxBasics/Actions";
import DragSources from "./Model/DragSources";

class VariableState {
}

export class Variable extends React.Component {
    state: VariableState;
    elementRef: any;

    constructor(props: any) {
        super(props);
        this.elementRef = React.createRef();
        this.draggableRef = React.createRef();
        this.state = {
            indicatorMargin: 0,
            indicatorWidth: 50,
            indicatorHeight: 50
        };
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.item.fixedInList) {
            this.draggableRef.current.setState({
                x: 0,
                y: 0
            })
        }
    }

    onMouseDown(event) {
        this.state.indicatorMargin = event.clientX - this.elementRef.current.getBoundingClientRect().x - this.state.indicatorWidth / 2;
    }

    render() {
        const item = this.props.item;
        return <Draggable ref={this.draggableRef}
                          position={getItemPosition(item)}
                          onDrag={() => this.props.onDrag(item, this.elementRef.current)}
                          onStop={() => this.props.onDragEnd(item, this.elementRef.current)}
                          onStart={() => this.props.onDragStart(item, this.elementRef.current)}
                          onMouseDown={this.onMouseDown}>
            {item.dragTarget === DragSources.unusedItems ?
                <div className="list-item"
                     style={getItemStyle(item)}
                     ref={this.elementRef}>
                    <div className="list-item__labels">
                        <div className="list-item__title">
                            {item.name}
                        </div>
                        <div className="list-item__properties">
                            {item.purpose + ' ' + item.type + ' ' + item.ownerInputPort + ' ' + item.startBit}
                        </div>
                    </div>
                    <div className="list-item__indicator">
                        {getIndicator(this.state.indicatorHeight, this.state.indicatorWidth)}
                    </div>
                </div> :
                <div style={getIndicatorStyle(item, this.state.indicatorMargin)} ref={this.elementRef}
                     className="list-item__indicator">
                    {getIndicator(this.state.indicatorHeight, this.state.indicatorWidth)}
                </div>
            }
        </Draggable>;

        function getIndicator(width, height) {
            return <svg height={width} width={height}>
                <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
            </svg>
        }

        function getItemPosition(item: any) {
            return item.fixedInList ? {x: 0, y: 0} : null
        }

        function getItemStyle(item: any) {
            return !item.fixedInList ? {zIndex: 1} : {zIndex: 0};
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
                    marginLeft: 'auto'
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
        onDragEnd: (item: any, element: any) => {
            setTimeout(() => dispatch(dragEndAction(item, element)), 100)
        },
        onDragStart: (item: any, element: any) => {
            dispatch(dragStartAction(item, element))
        },
        onDrag: (item: any, element: any) => {
            dispatch(dragAction(item, element))
        }
    }
}

const ConnectedVariable = connect(
    mapStateToProps,
    mapDispatchToProps
)(Variable);

export default ConnectedVariable;