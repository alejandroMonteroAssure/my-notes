"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HouseType {
    constructor(color, roofType, numberOfRooms) {
        this.color = color;
        this.roofType = roofType;
        this.numberOfRooms = numberOfRooms;
    }
    render(x, y) {
        console.log(`Rendering house at (${x}, ${y}) with color ${this.color}, roof type ${this.roofType}, and ${this.numberOfRooms} rooms.`);
    }
}
exports.default = HouseType;
