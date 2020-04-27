import * as React from 'react';

class SquareLedProps {
}

class SquareLedState {
}

export class SquareLed extends React.Component {
    props: SquareLedProps;
    state: SquareLedState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <svg width="30" height="20">
            <rect x="0" y="0" width="30" height="20"/>
        </svg>
    }

}