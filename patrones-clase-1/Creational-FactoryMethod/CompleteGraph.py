#a complete graph is a graph (duh) with n choose 2 edges
from Graph import Graph
class CompleteGraph(Graph):
    def __init__(self):
        super().__init__()
        self.nodes = [1, 2, 3]
        self.edges = [(1, 2), (2, 3), (1, 3)]

    def add_edge(self, first_node, second_node):
        edge = (first_node, second_node)
        if edge not in self.edges:
            self.edges.append(edge)
        self.nodes += [n for n in (first_node, second_node) if n not in self.nodes]

    def display(self):
        print(f"This is the complete graph: {self.edges}")

    def find_node(self, node):
        if node in self.nodes:
            print(f"Node {node} found.")
            return node
        else:
            print(f"Node {node} not found.")
            return None
