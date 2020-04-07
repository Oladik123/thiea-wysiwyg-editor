import * as React from 'react';

class ElementsListState {
}

export class ElementsList extends React.Component {
    state: ElementsListState;

    constructor(props: any) {
        super(props);
    }


    render() {
        return <div className="elements-list"/>;
    }
}