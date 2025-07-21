"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HouseType_1 = __importDefault(require("./HouseType"));
class FlyweightFactory {
    static getHouseType(color, roofType, numberOfRooms) {
        const key = `${color}-${roofType}-${numberOfRooms}`;
        if (!this.types[key]) {
            this.types[key] = new HouseType_1.default(color, roofType, numberOfRooms);
        }
        return this.types[key];
    }
    static getHouseTypeCount() {
        return Object.keys(this.types).length;
    }
}
FlyweightFactory.types = {};
exports.default = FlyweightFactory;
