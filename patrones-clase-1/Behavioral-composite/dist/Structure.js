"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Structure {
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(structure) { }
    remove(structure) { }
    isComposite() {
        return false;
    }
}
exports.default = Structure;
