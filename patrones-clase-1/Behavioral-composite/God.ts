import House from "./House";
import CityZone from "./CityZone";

const house1 = new House(4);
const house2 = new House(3);
const house3 = new House(2);

const oruro = new CityZone();
const villapagador = new CityZone();
villapagador.add(house1)
villapagador.add(house2);
oruro.add(villapagador);
oruro.add(house3);

console.log(`Total family members in Oruro: ${oruro.countMembers()}`);
console.log(`Total family members in Villapagador: ${villapagador.countMembers()}`);
