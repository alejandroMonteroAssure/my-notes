from abc import ABC, abstractmethod
class Graph(ABC):
    def __init__(self):
        self.edges = []
        self.nodes = []

    @abstractmethod
    def add_edge(self, first_node, second_node):
        pass

    @abstractmethod
    def display(self):
        pass

    @abstractmethod
    def find_node(self, node):
        pass
