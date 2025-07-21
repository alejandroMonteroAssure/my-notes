export default class HouseType{
    constructor(
        public color: string,
        public roofType: string,
        public numberOfRooms: number,
    ){}

    public render(x: number, y: number): void {
        console.log(`Rendering house at (${x}, ${y}) with color ${this.color}, roof type ${this.roofType}, and ${this.numberOfRooms} rooms.`);
    }
}