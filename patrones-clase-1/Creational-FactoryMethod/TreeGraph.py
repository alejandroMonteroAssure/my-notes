from Graph import Graph
class TreeGraph(Graph):
    def __init__(self):
        super().__init__()
        self.edges = [(1, 2), (1, 3)]
        self.nodes = [1,2,3]

    def add_edge(self, first_node, second_node):
        self.edges.append((first_node, second_node))
        self.nodes += [n for n in (first_node, second_node) if n not in self.nodes]

    def display(self):
        print(f"This is the tree: {self.edges}")

    def find_node(self, node):
        if node in self.nodes:
            print(f"Node {node} found.")
            return node
        else:
            print(f"Node {node} not found.")
            return None
