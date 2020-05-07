import * as React from 'react';
import {connect} from "react-redux";
import Draggable, {DraggableBounds} from "react-draggable";
import {dragAction, dragEndAction, dragStartAction} from "./ReduxBasics/Actions";
import DragSources from "./Model/DragSources";
import {VariableInList} from "./VariableInList";
import ConnectedIndicator from "./Indicator";

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
        if (this.props.item.dragTarget === DragSources.usedItems) {
            return
        }

        this.setState({
            indicatorMargin: event.clientX - this.elementRef.current.getBoundingClientRect().x - this.state.indicatorWidth / 2
        });
    }

    render() {
        const dragState = this.props.dragState;
        const item = this.props.item;

        return <Draggable ref={this.draggableRef}
                          position={getItemPosition(item)}
                          onDrag={() => this.props.onDrag(item, this.elementRef.current)}
                          onStop={() => this.props.onDragEnd(item, this.elementRef.current)}
                          onStart={() => this.props.onDragStart(item, this.elementRef.current)}
                          onMouseDown={this.onMouseDown}
                          defaultPosition={{x: item.workspacePosition.x, y: item.workspacePosition.y}}
                          bounds={getBounds(item)}
                          handle={'.drag-handler'}>
            <div style={getStyle(item)}>
                {!item.dragTarget || item.dragTarget === DragSources.unusedItems && item.stateTarget === DragSources.unusedItems ?
                    <VariableInList item={item} elementRef={this.elementRef}
                                    width={dragState.sizes.list.width - 24}/> :
                    <ConnectedIndicator item={item} elementRef={this.elementRef} margin={this.state.indicatorMargin}/>
                }
            </div>
        </Draggable>;

        function getStyle(item) {
            return {
                zIndex: !item.fixedInList ? 1 : 0,
                position: item.stateTarget === DragSources.unusedItems ? 'relative' : 'absolute'
            };
        }

        function getItemPosition(item: any) {
            return item.fixedInList ? {x: 0, y: 0} : undefined

        }

        function getBounds(item: any) {
            const listRect = dragState.sizes.list;
            const workspaceRect = dragState.sizes.workspace;
            return {
                left: -(workspaceRect.x - listRect.x),
                top: item.stateTarget === DragSources.usedItems ? 0 : null
            } as DraggableBounds;
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