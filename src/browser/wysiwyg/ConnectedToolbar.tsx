import {setImage} from "./ReduxBasics/Actions";
import {connect} from "react-redux";
import {ToolBar} from "./ToolBar";

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onImageChange: image => {
            dispatch(setImage(image))
        }
    }
}

const ConnectedToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolBar);

export default ConnectedToolbar;