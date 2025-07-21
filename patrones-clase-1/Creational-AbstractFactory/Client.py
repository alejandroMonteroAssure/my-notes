from Factories.HondaFactory import HondaFactory
from Factories.TeslaFactory import TeslaFactory

def run(factory):
    car = factory.create_car()
    plane = factory.create_plane()

    car.turn_on_motor()
    car.drive()
    car.stop()

    plane.fly()
    plane.attack()
    plane.stop()

if __name__ == "__main__":
    print("Calling Honda factory: ")
    run(HondaFactory())

    print("Calling Tesla factory: ")
    run(TeslaFactory())
