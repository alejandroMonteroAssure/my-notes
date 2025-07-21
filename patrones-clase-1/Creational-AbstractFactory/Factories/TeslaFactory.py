from AbstractClasses.AbstractFactory import AbstractFactory
from ConcreteClasses.PassengerPlane import PassengerPlane
from ConcreteClasses.SUV import SUV

class TeslaFactory(AbstractFactory):
    def create_car(self):
        return SUV()

    def create_plane(self):
        return PassengerPlane()
