import FlyweightFactory from './FlyweightFactory';
import House from './House';

const houses: House[] = [];

function buildNeighborhood() {
    houses.push(new House(10, 20, FlyweightFactory.getHouseType('red', 'gabled', 1)));
    houses.push(new House(15, 25, FlyweightFactory.getHouseType('red', 'gabled', 2)));
    houses.push(new House(20, 30, FlyweightFactory.getHouseType('blue', 'flat', 3)));
    houses.push(new House(25, 35, FlyweightFactory.getHouseType('red', 'gabled', 4)));
    houses.push(new House(30, 40, FlyweightFactory.getHouseType('blue', 'flat', 5)));
}

buildNeighborhood();

for (const house of houses) {
    house.draw();
}

console.log(`Total unique house types (shared): ${FlyweightFactory.getHouseTypeCount()}`);
