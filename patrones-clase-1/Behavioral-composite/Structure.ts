export default abstract class Structure {
    protected parent!: Structure | null;

    public setParent(parent: Structure | null){
        this.parent = parent;
    }

    public getParent(): Structure | null {
        return this.parent;
    }

    public add(structure: Structure) : void { }
    public remove(structure: Structure) : void { }
    public isComposite(): boolean {
        return false;
    }
    public abstract countMembers(): number;
}
