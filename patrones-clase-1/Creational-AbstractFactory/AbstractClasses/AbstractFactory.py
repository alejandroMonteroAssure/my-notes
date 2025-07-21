from abc import ABC, abstractmethod

class AbstractFactory(ABC):
    @abstractmethod
    def create_car(self):
        pass
    @abstractmethod
    def create_plane(self):
        pass