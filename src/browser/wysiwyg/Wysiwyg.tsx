import * as React from 'react';

class WysiwygState {
    class: string;
    label: string;
}

export class Wysiwyg extends React.Component {
    state: WysiwygState;

    constructor(props: any) {
        super(props);
        this.state = {class: "off", label: "Нажми"};

        this.press = this.press.bind(this);
    }

    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }

    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}