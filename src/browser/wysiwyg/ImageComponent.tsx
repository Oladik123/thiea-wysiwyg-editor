import * as React from 'react';

class ImageComponentProps {
    image: any;
}

class ImageComponentState {
    image: any;
    height: number;
    width: number;
}

export class ImageComponent extends React.Component {
    state: ImageComponentState;
    props: ImageComponentProps;

    constructor(props: any) {
        super(props);

        this.state = new ImageComponentState();
    }

    static getDerivedStateFromProps(nextProps: any) {
        if (nextProps.image === null) {
            return {};
        }

        const image = nextProps.image;
        return {
            image: image.src,
            width: image.width,
            height: image.height
        }
    }


    render() {
        return this.state && this.state.image ?
            <img alt="uploaded image"
                 draggable="false"
                 src={this.state.image}
                 height={this.state.height}
                 width={this.state.width}/> :
            <div/>
    }
}