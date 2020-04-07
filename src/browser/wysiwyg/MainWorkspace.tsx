import * as React from 'react';

class MainWorkspaceState {
}

export class MainWorkspace extends React.Component {
    state: MainWorkspaceState;

    constructor(props: any) {
        super(props);
    }


    render() {
        return <div className="main-workspace"/>;
    }
}