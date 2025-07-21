from AbstractClasses.AbstractCar import AbstractCar

class SUV(AbstractCar):
    def __init__(self):
        super().__init__()
        self.rims_type = "steel"
        self.motor_type = "diesel inline-4"
        self.suspension_type = "off-road"
        self.brakes = "disc brakes"

    def turn_on_motor(self):
        print(f"{self.motor_type} motor is starting")

    def drive(self):
        print(f"SUV is driving with its {self.rims_type} rims and {self.suspension_type} suspension")

    def stop(self):
        print(f"SUV is stopping with {self.brakes}")
