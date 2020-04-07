import * as React from 'react';
import {ElementsList} from "./ElementsList";
import {MainWorkspace} from "./MainWorkspace";

class WysiwygState {
    class: string;
    label: string;
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div className="wysiwyg">
            <ElementsList/>
            <MainWorkspace/>
        </div>;
    }
}