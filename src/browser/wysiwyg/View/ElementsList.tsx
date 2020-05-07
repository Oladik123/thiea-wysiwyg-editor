import * as React from 'react';
import {connect} from "react-redux";
import State from "../Model/State";
import ConnectedVariable from "./Variable";

class ElementsListState {
}

export class ElementsList extends React.Component {
    props: State;
    state: ElementsListState;

    constructor(props: any) {
        super(props);
    }


    render() {
        const elementList = this.props.dragState.unusedItems || [];
        return <div className="elements-list" id="wysiwyg-elements-list">
            {elementList.map((element: any) => <ConnectedVariable item={element} key={element.id}/>)}
        </div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const ConnectedElementsList = connect(
    mapStateToProps,
)(ElementsList);

export default ConnectedElementsList;