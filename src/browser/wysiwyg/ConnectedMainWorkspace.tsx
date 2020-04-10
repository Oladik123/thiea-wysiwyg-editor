import {connect} from "react-redux";
import {MainWorkspace} from "./MainWorkspace";


const mapStateToProps = state => {
    return {
        ...state
    }
}

const ConnectedMainWorkspace = connect(
    mapStateToProps
)(MainWorkspace);

export default ConnectedMainWorkspace;