import * as React from 'react';
import {ElementsList} from "./ElementsList";
import {Provider} from 'react-redux'
import {store} from "./Reducers"
import ConnectedToolbar from "./ConnectedToolbar";
import ConnectedMainWorkspace from "./ConnectedMainWorkspace";

class WysiwygState {
    image: any;
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);
        this.state = {
            image: null
        };
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