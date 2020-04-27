import IndicatorType from "../IndicatorType";

export default class Indicator {
    type: IndicatorType;
    name: string;
    width: number;
    height: number;

    constructor(type: string) {
        this.type = type;
        this.name = type;
        this.width = 50;
        this.height = 50;
    }
}