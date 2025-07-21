from abc import ABC, abstractmethod

class AbstractCar(ABC):
    def __init__(self,):
        self.rims_type = ""
        self.motor_type = ""
        self.suspension_type = ""
        self.brakes = ""

    @abstractmethod
    def turn_on_motor(self):
        pass

    @abstractmethod
    def drive(self):
        pass

    @abstractmethod
    def stop(self):
        pass
