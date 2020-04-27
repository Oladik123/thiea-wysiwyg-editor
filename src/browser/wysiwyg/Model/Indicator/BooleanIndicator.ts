import Indicator from "./Indicator";

export class BooleanIndicator extends Indicator {
    colorTrue: string;
    colorFalse: string;

    constructor(type: string) {
        super(type);
        this.colorFalse = '000000';
        this.colorTrue = 'FF00';
    }

}