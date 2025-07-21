"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw() {
        this.type.render(this.x, this.y);
    }
}
exports.default = House;
