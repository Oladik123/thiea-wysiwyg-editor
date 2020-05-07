import * as React from 'react';
import ConnectedMainImage from "./ImageComponent";
import Draggable from 'react-draggable';
import {connect} from "react-redux";
import ConnectedVariable from "./Variable";

class MainWorkspaceProps {
    image: any;
}

class MainWorkspaceState {
    image: any;
}

export class MainWorkspace extends React.Component {
    state: MainWorkspaceState;
    props: MainWorkspaceProps;

    constructor(props: any) {
        super(props);
        this.state = {
            image: null
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.getDraggableImageStyles = this.getDraggableImageStyles.bind(this);
    }

    handleStart() {
        console.log('start');
    }

    handleDrag() {
        console.log('drag');
    }

    handleStop() {
        console.log('stop');
    }

    getDraggableImageStyles() {
        const image = this.props.image;
        return image === null ? {} : {
            height: image.height,
            width: image.width,
        }
    }

    render() {
        const dragState = this.props.dragState;

        const getBounds = (item) => {
            const listRect = dragState.sizes.list;
            const workspaceRect = dragState.sizes.workspace;
            return {
                left: -(workspaceRect.x - listRect.x),
                top: 0,
            }
        }

        return <div className="main-workspace" id="wysiwyg-workspace">
            <Draggable bounds="parent">
                <div className="draggable-image" style={this.getDraggableImageStyles()}>
                    <ConnectedMainImage/>
                </div>
            </Draggable>
            {dragState.usedItems.map(item => <ConnectedVariable className="indicator" item={item} key={item.id}/>)

            }
            {/*{dragState.usedItems.map(item =>*/}
            {/*    <Draggable defaultPosition={{x: item.workspacePosition.x, y: item.workspacePosition.y}}*/}
            {/*               key={item.id} bounds={getBounds(item)}>*/}
            {/*        <div className="indicator">*/}
            {/*            <svg height="50" width="50">*/}
            {/*                <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </Draggable>*/}
            {/*)}*/}
        </div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const ConnectedMainWorkspace = connect(
    mapStateToProps
)(MainWorkspace);

export default ConnectedMainWorkspace;