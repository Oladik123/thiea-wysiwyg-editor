import * as React from 'react';
import {connect} from "react-redux";

class ImageComponentProps {
    image: any;
}

class ImageComponentState {
    image: any;
    height: number;
    width: number;
}

export class MainImage extends React.Component {
    state: ImageComponentState;
    props: ImageComponentProps;

    constructor(props: any) {
        super(props);
    }

    render() {
        const image = this.props.image;

        if (!image || !image.src) {
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

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {}
}

const ConnectedMainImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainImage);

export default ConnectedMainImage;