import * as React from 'react';

class HSlideProps {
}

class HSlideState {
}

export class HSlide extends React.Component {
    props: HSlideProps;
    state: HSlideState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <svg width="50" height="50">
            <rect x="25" y="25" width="25" height="25"/>
        </svg>
    }

}