"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Structure_1 = __importDefault(require("./Structure"));
class CityZone extends Structure_1.default {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    add(structure) {
        this.children.push(structure);
        structure.setParent(this);
    }
    remove(structure) {
        const index = this.children.indexOf(structure);
        this.children.splice(index, 1);
        structure.setParent(null);
    }
    isComposite() {
        return true;
    }
    countMembers() {
        return this.children.reduce((total, child) => total + child.countMembers(), 0);
    }
}
exports.default = CityZone;
