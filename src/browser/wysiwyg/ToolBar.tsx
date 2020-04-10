import * as React from 'react';

class ToolBarProps {
    onImageChange: any
}

class ToolBarState {
    image: any;
    fileTypes: string;
    onImageLoaded: any;
}

export class ToolBarStatus {
    image: any;
}

export class ToolBar extends React.Component {
    state: ToolBarState;
    props: ToolBarProps;

    constructor(props: any) {
        super(props);
        this.state = {
            onImageLoaded: props.onImageLoaded,
            image: null,
            fileTypes: "image/*"
        };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(event: any) {
        const image = new Image();
        image.src = URL.createObjectURL(event.target.files[0]);
        image.onload = () => this.props.onImageChange(image);
    };

    render() {
        return <div>
            <input type="file"
                   name="select image"
                   accept={this.state.fileTypes}
                   onChange={this.handleImageChange}/>
        </div>;
    }
}