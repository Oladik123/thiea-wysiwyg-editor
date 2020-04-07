import * as React from 'react';

class WysiwygState {
    class: string;
    label: string;
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div/>;
    }
}