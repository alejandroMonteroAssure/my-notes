from abc import ABC, abstractmethod

class AbstractPlane(ABC):
    def __init__(self):
        self.passenger_capacity = 0
        self.fuselage_length = 0.0
        self.max_speed_kmh = 0.0

    @abstractmethod
    def fly(self):
        pass

    @abstractmethod
    def attack(self):
        pass

    @abstractmethod
    def stop(self):
        pass
