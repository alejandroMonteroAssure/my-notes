"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const House_1 = __importDefault(require("./House"));
const CityZone_1 = __importDefault(require("./CityZone"));
const house1 = new House_1.default(4);
const house2 = new House_1.default(3);
const house3 = new House_1.default(2);
const oruro = new CityZone_1.default();
const villapagador = new CityZone_1.default();
villapagador.add(house1);
villapagador.add(house2);
oruro.add(villapagador);
oruro.add(house3);
console.log(`Total family members in Oruro: ${oruro.countMembers()}`);
console.log(`Total family members in Villapagador: ${villapagador.countMembers()}`);
