import * as React from 'react';
import {setImageAction} from "../ReduxBasics/Actions";
import {connect} from "react-redux";

class PropertiesListState {
}

export class PropertiesList extends React.Component {
    state: PropertiesListState;

    PropertiesListWidth: number = 301;

    constructor(props: any) {
        super(props);
    }


    render() {
        const getStyle = () => {
            const editorRect = this.props.dragState.sizes.editor;
            console.log(editorRect.x, this.PropertiesListWidth);
            return editorRect && editorRect.width ? {
                    left: editorRect.x + editorRect.width - this.PropertiesListWidth + 'px'
                } :
                {}
        }

        return <div className="properties-list" style={getStyle()}>
            <table className="table">
                <thead>
                <tr>
                    <th className="property-th">Property</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="property-td">name</td>
                    <td className="value-td">
                    </td>
                </tr>
                <tr>
                    <td className="property-td">port type</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">type</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">owner input port</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">start bit</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">indicator type</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">width</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">height</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">position-x</td>
                    <td className="value-td">value</td>
                </tr>
                <tr>
                    <td className="property-td">position-y</td>
                    <td className="value-td">value</td>
                </tr>
                </tbody>
            </table>
        </div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onImageChange: (image: any) => {
            dispatch(setImageAction(image))
        }
    }
}

const ConnectedPropertiesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertiesList);

export default ConnectedPropertiesList;