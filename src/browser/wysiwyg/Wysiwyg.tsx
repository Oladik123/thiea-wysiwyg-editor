import * as React from 'react';
import {ElementsList} from "./ElementsList";
import {MainWorkspace} from "./MainWorkspace";
import {ToolBar} from "./ToolBar";

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

        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    onImageLoaded(image: any) {
        this.setState({
            image: image
        })
    }

    render() {
        return <div className="wysiwyg">
            <ElementsList/>
            <div className="workspace">
                <ToolBar onImageLoaded={this.onImageLoaded}/>
                <MainWorkspace image={this.state.image}/>
            </div>
        </div>;
    }
}