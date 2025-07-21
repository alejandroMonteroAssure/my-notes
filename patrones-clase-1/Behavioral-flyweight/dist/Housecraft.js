"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlyweightFactory_1 = __importDefault(require("./FlyweightFactory"));
const House_1 = __importDefault(require("./House"));
const houses = [];
function buildNeighborhood() {
    houses.push(new House_1.default(10, 20, FlyweightFactory_1.default.getHouseType('red', 'gabled', 2)));
    houses.push(new House_1.default(15, 25, FlyweightFactory_1.default.getHouseType('red', 'gabled', 2)));
    houses.push(new House_1.default(20, 30, FlyweightFactory_1.default.getHouseType('blue', 'flat', 3)));
    houses.push(new House_1.default(25, 35, FlyweightFactory_1.default.getHouseType('red', 'gabled', 2)));
    houses.push(new House_1.default(30, 40, FlyweightFactory_1.default.getHouseType('blue', 'flat', 3)));
}
buildNeighborhood();
for (const house of houses) {
    house.draw();
}
console.log(`Total unique house types (shared): ${FlyweightFactory_1.default.getHouseTypeCount()}`);
