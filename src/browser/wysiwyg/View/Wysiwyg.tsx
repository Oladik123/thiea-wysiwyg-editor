import * as React from 'react';
import ConnectedElementsList from "./ElementsList";
import {Provider} from 'react-redux'
import {store} from "../Reducers"
import ConnectedToolbar from "./ToolBar";
import ConnectedMainWorkspace from "./MainWorkspace";
import {resizeAction} from "../ReduxBasics/Actions";
import ConnectedSelectIndicatorDropdown from "./SelectIndicatorDropdown";
import ConnectedPropertiesList from "./PropertiesList";

class WysiwygProps {
    setCallback: Function;
}

class WysiwygState {
}

export class Wysiwyg extends React.Component {
    props: WysiwygProps;
    state: WysiwygState;

    constructor(props: any) {
        super(props);

        this.onResize = this.onResize.bind(this);
        this.props.setCallback(this.onResize);
    }

    componentDidMount() {
        this.onResize();
    }

    onResize() {
        store.dispatch(resizeAction(document));
    }

    render() {
        return <div className="wysiwyg" id="wysiwyg">
            <Provider store={store}>
                <ConnectedElementsList/>
                <div className="workspace">
                    <ConnectedToolbar/>
                    <ConnectedMainWorkspace/>
                </div>
                <ConnectedPropertiesList/>
                <ConnectedSelectIndicatorDropdown/>
            </Provider>
        </div>;
    }
}