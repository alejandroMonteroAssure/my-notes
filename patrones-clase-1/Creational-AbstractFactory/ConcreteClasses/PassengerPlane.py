from AbstractClasses.AbstractPlane import AbstractPlane

class PassengerPlane(AbstractPlane):
    def __init__(self):
        super().__init__()
        self.passenger_capacity = 180
        self.fuselage_length = 44.5
        self.max_speed_kmh = 900.0

    def fly(self):
        print(f"PassengerPlane is flying at {self.max_speed_kmh} km/h with {self.passenger_capacity} passengers")

    def attack(self):
        print(f"PassengerPlane is a civilian aircraft, no weapons")

    def stop(self):
        print(f"Activating flaps and releasing wheels")
