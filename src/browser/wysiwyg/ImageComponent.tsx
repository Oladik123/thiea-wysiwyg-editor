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
    }

    render() {
        let image = this.props.image;
        if (!image) {
            return <div/>
        }

        const height = image.height;
        const width = image.width;

        return <img alt="uploaded image"
                    draggable="false"
                    src={image.src}
                    height={height}
                    width={width}/>
    }
}