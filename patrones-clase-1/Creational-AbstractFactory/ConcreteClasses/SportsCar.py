from AbstractClasses.AbstractCar import AbstractCar

class SportsCar(AbstractCar):
    def __init__(self):
        super().__init__()
        self.rims_type = "alloy"
        self.motor_type = "V8 twin turbo"
        self.suspension_type = "sport tuned"
        self.brakes = "ceramic brakes"

    def turn_on_motor(self):
        print(f"{self.motor_type} motor is starting")

    def drive(self):
        print(f"Car is advancing with its {self.rims_type} rims and using {self.suspension_type} suspension")

    def stop(self):
        print(f"Car is stopping its {self.rims_type} wheels with {self.brakes}")
