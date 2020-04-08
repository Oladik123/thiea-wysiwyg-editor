import * as React from 'react';

class ImageComponentState {
    file: any;
}

export class ImageComponent extends React.Component {
    state: ImageComponentState;


    constructor(props: any) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.image === null) {
            return {};
        }

        const image = nextProps.image;
        return {
            file: image.src,
            width: image.width,
            height: image.height
        }
    }


    render() {
        return this.state && this.state.file ?
            <img src={this.state.file} height={this.state.height} width={this.state.width} /> :
            <div/>
    }
}