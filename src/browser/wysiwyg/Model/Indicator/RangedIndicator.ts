import Indicator from "./Indicator";

export default class RangedIndicator extends Indicator {
    minRange?: number;
    maxRange?: number;

    constructor(type: string) {
        super(type);
        this.maxRange = 100;
        this.minRange = 100;
        this.width = 100;
    }
}