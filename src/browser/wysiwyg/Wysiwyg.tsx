import * as React from 'react';
import ConnectedElementsList from "./ElementsList";
import {Provider} from 'react-redux'
import {store} from "./Reducers"
import ConnectedToolbar from "./ToolBar";
import ConnectedMainWorkspace from "./MainWorkspace";
import {dragEndAction} from "./ReduxBasics/Actions";

class WysiwygState {
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }


    onDragEnd(result : any) {
        store.dispatch(dragEndAction(result));
    }

    render() {
        return <div className="wysiwyg" id={"wysiwyg"}>
            <Provider store={store}>
                    <ConnectedElementsList/>
                    <div className="workspace">
                        <ConnectedToolbar/>
                        <ConnectedMainWorkspace/>
                    </div>
            </Provider>
        </div>;
    }
}