import * as React from 'react';
import {RefObject} from 'react';
import {Pencil} from "./Pencil";

class ValueEditorProps {
    value: string;
    onSuccessEdit: Function;
}

class ValueEditorState {
    typingMode: boolean = false;
    editedValue: string;

    constructor(props: ValueEditorProps) {
        this.editedValue = props.value;
    }
}

export class ValueEditor extends React.Component {
    props: ValueEditorProps;
    state: ValueEditorState;
    inputRef: RefObject<any>;

    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef();
        this.state = new ValueEditorState(props);
    }

    render() {
        return (this.state.typingMode ?
                <div className="value">
                    <input ref={this.inputRef}
                           className="text-input"
                           type="text"
                           maxLength={20}
                           spellCheck="false"/>
                </div>
                :
                <div className="value">
                    <span>{this.state.editedValue}</span>
                    <span className="pencil">
                        <Pencil/>
                    </span>
                </div>
        )
    }

}