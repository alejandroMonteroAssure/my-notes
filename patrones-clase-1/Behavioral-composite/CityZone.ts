import Structure from "./Structure";

export default class CityZone extends Structure {
    private children: Structure[] = [];

    public add(structure: Structure): void {
        this.children.push(structure);
        structure.setParent(this);
    }

    public remove(structure: Structure): void {
        const index = this.children.indexOf(structure);
        this.children.splice(index, 1);
        structure.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public countMembers(): number {
        return this.children.reduce((total, child) => total + child.countMembers(), 0);
    }
}
