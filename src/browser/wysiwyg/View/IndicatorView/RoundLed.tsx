import * as React from 'react';

class RoundLedProps {
}

class RoundLedState {
}

export class RoundLed extends React.Component {
    props: RoundLedProps;
    state: RoundLedState;

    constructor(props: any) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return <svg height={50} width={50}>
            <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="red"/>
        </svg>

    }

}