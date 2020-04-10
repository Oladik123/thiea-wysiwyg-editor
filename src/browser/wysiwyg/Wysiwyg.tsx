import * as React from 'react';
import {ElementsList} from "./ElementsList";
import {Provider} from 'react-redux'
import {store} from "./Reducers"
import ConnectedToolbar from "./ToolBar";
import ConnectedMainWorkspace from "./MainWorkspace";

class WysiwygState {
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div className="wysiwyg">
            <Provider store={store}>
                <ElementsList/>
                <div className="workspace">
                    <ConnectedToolbar/>
                    <ConnectedMainWorkspace/>
                </div>
            </Provider>
        </div>;
    }
}