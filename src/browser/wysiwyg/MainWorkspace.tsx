import * as React from 'react';
import {ImageComponent} from "./ImageComponent";

class MainWorkspaceState {
    image: any;
}

export class MainWorkspace extends React.Component {
    state: MainWorkspaceState;

    constructor(props: any) {
        super(props);
        this.state = {
            image: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        const image = new Image();
        image.src = URL.createObjectURL(event.target.files[0]);
        image.onload = () => {
            this.setState({
                image: image,
            })
        };

        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
        })
    };

    render() {
        return <div className="main-workspace">
            <input type="file"
                   name="select image"
                   accept={this.state.fileTypes}
                   onChange={this.handleChange}/>
            <ImageComponent image={this.state.image}/>
        </div>;
    }
}