from AbstractClasses.AbstractFactory import AbstractFactory
from ConcreteClasses.FighterJet import FighterJet
from ConcreteClasses.SportsCar import SportsCar

class HondaFactory(AbstractFactory):
    def create_car(self):
        return SportsCar()

    def create_plane(self):
        return FighterJet()
