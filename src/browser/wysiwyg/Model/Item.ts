export default class Item {
    id: string;
    purpose: string;
    type: string;
    name: string;
    ownerInputPort: string;
    startBit: string;

    constructor(purpose: string, type: string, name: string, ownerInputPort: string, startBit: string) {
        this.purpose = purpose;
        this.type = type;
        this.name = name;
        this.ownerInputPort = ownerInputPort;
        this.startBit = startBit;
        this.id = purpose + ' ' + type + ' ' + name;
    }
}