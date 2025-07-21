from AbstractClasses.AbstractPlane import AbstractPlane

class FighterJet(AbstractPlane):
    def __init__(self):
        super().__init__()
        self.passenger_capacity = 1
        self.fuselage_length = 19.0
        self.max_speed_kmh = 2500.0

    def fly(self):
        print(f"FighterJet takes off with top speed of {self.max_speed_kmh} km/h and length {self.fuselage_length} m")

    def attack(self):
        print(f"FighterJet attacks with missiles single pilot onboard ({self.passenger_capacity} seat)")

    def stop(self):
        print(f"Activating inverse motor")
