import * as React from 'react';

class MeterProps {
}

class MeterState {
}

export class Meter extends React.Component {
    props: MeterProps;
    state: MeterState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <svg width="100" height="50">
            <rect x="0" y="0" width="100" height="50" fill="white"/>
            <text x="40%" y="70%" textAnchor="middle">METER</text>
        </svg>
    }

}