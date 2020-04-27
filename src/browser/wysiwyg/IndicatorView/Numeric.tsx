import * as React from 'react';

class NumericProps {
}

class NumericState {
}

export class Numeric extends React.Component {
    props: NumericProps;
    state: NumericState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <svg width="30" height="20">
            <rect x="0" y="0" width="30" height="20" fill="white">
            </rect>
            <text x="40%" y="70%" textAnchor="middle">127</text>
        </svg>
    }

}