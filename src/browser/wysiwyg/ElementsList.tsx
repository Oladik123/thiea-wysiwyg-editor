import * as React from 'react';
import {connect} from "react-redux";

class ElementsListState {
}

export class ElementsList extends React.Component {
    state: ElementsListState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const elementList = this.props.dragState.unusedItems || [];
        return <div className="elements-list">
        </div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
const ConnectedElementsList = connect(
    mapStateToProps
)(ElementsList);

export default ConnectedElementsList;