from Creator import Creator
from CompleteGraph import CompleteGraph

class  SocietyCreator(Creator):
    def __init__(self):
        super().__init__()

    def factory_method(self):
        return CompleteGraph()
