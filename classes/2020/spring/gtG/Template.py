#!/usr/bin/env python3
# Your Name and Student number here. 

import networkx as nx       #  please leave this line in
import numpy
import matplotlib.pyplot as plt




H=nx.gnm_random_graph(10,17);  
# Make sure the next two lines are uncommented, and the program returns its decision on the graph that they define. 
import TestGraph;           
H=TestGraph.H()




print(H.edges)
