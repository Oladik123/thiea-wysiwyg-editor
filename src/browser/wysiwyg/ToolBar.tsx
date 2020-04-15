import * as React from 'react';
import {setImageAction} from "./ReduxBasics/Actions";
import {connect} from "react-redux";

class ToolBarProps {
    onImageChange: any
}

class ToolBarState {
    image: any;
    fileTypes: string;
    onImageLoaded: any;
}

export class ToolBarStatus {
    image: any;
}

export class ToolBar extends React.Component {
    state: ToolBarState;
    props: ToolBarProps;

    constructor(props: any) {
        super(props);
        this.state = {
            onImageLoaded: props.onImageLoaded,
            image: null,
            fileTypes: "image/*"
        };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(event: any) {
        if (!event.target.files || event.target.files.size === 0) {
            return;
        }

        const image = new Image();
        image.src = URL.createObjectURL(event.target.files[0]);
        image.onload = () => this.props.onImageChange(image);
    };

    render() {
        return <div>
            <input type="file"
                   name="select image"
                   accept={this.state.fileTypes}
                   onChange={this.handleImageChange}/>
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
        onImageChange: (image: any) => {
            dispatch(setImageAction(image))
        }
    }
}

const ConnectedToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolBar);

export default ConnectedToolbar;