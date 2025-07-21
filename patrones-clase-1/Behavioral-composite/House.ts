import Structure from "./Structure";

export default class House extends Structure {

    constructor(private familyMembers: number){
        super();
    }

    public countMembers(): number {
        return this.familyMembers;
    }
}
