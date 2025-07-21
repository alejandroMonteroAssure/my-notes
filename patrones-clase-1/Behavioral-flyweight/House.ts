import HouseType from './HouseType';

export default class House {
    constructor(
        private x: number,
        private y: number,
        private type: HouseType
    ) {}

    public draw() {
        this.type.render(this.x, this.y);
    }
}
