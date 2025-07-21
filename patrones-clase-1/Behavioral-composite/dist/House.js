"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Structure_1 = __importDefault(require("./Structure"));
class House extends Structure_1.default {
    constructor(familyMembers) {
        super();
        this.familyMembers = familyMembers;
    }
    countMembers() {
        return this.familyMembers;
    }
}
exports.default = House;
