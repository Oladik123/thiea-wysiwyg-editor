import DragSources from "./DragSources";

export default class Item {
    id: string;
    purpose: string;
    type: string;
    name: string;
    ownerInputPort: string;
    startBit: string;
    dragTarget: string;
    fixedInList: boolean;
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
        this.fixedInList = true;
        this.workspacePosition = {
            x: 0,
            y: 0
        }
    }
}