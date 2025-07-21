from CityCreator import CityCreator
from SocietyCreator import SocietyCreator

def run_creator(creator):
    graph = creator.factory_method()
    graph.display()
    graph.find_node(2)
    graph.add_edge(3, 4)
    graph.display()

if __name__ == "__main__":
    print("City Creator")
    run_creator(CityCreator())
    print("Society Creator")
    run_creator(SocietyCreator())
