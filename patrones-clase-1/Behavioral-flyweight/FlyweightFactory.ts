import HouseType from "./HouseType";

export default class FlyweightFactory {
    private static types: Record<string, HouseType> = {};

    public static getHouseType(color: string, roofType: string, numberOfRooms: number): HouseType {
        const key = `${color}-${roofType}-${numberOfRooms}`;
        if (!this.types[key]) {
            this.types[key] = new HouseType(color, roofType, numberOfRooms);
        }
        return this.types[key];
    }

    public static getHouseTypeCount(): number {
        return Object.keys(this.types).length;
    }
}
