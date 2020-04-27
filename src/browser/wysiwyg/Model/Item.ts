import DragSources from "./DragSources";
import Indicator from "./Indicator/Indicator";
import IndicatorType from "./IndicatorType";

export default class Item {
    id: string;
    purpose: string;
    type: string;
    name: string;
    ownerInputPort: string;
    startBit: string;
    dragTarget: string;
    fixedInList: boolean;
    stateTarget: string;
    indicator: Indicator;
    workspacePosition: {
        x: any,
        y: any
    }

    constructor(purpose: string, type: string, name: string, ownerInputPort: string, startBit: string) {
        this.purpose = purpose;
        this.type = type;
        this.name = name;
        this.ownerInputPort = ownerInputPort;
        this.startBit = startBit;
        this.id = purpose + '-' + type + '-' + name;
        this.dragTarget = DragSources.unusedItems;
        this.stateTarget = DragSources.unusedItems;
        this.fixedInList = true;
        this.workspacePosition = {
            x: 0,
            y: 0
        }
        this.indicator = new Indicator(type.toLowerCase() === 'bool' ? IndicatorType.roundLed : IndicatorType.meter);
    }
}