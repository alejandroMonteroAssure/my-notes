from Creator import Creator
from TreeGraph import TreeGraph

class  CityCreator(Creator):
    def __init__(self):
        super().__init__()

    def factory_method(self):
        return TreeGraph()
