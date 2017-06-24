# node-polygonal
Javascript version of haxe Polygonal

## Installation

```sh
npm install js-polygonal --save
```

## Usage

```Javascript
const { AStarWaypoint, Graph, AStar, DA, GraphNode } = require('js-polygonal');

var graph = new Graph();

var wp1 = new AStarWaypoint(); wp1.name = "cua thang may tang 1";
var wp2 = new AStarWaypoint(); wp2.name = "cua thang may tang 2";
var wp3 = new AStarWaypoint(); wp3.name = "cai thang may";

wp1.node = graph.addNode(graph.createNode(wp1));
wp2.node = graph.addNode(graph.createNode(wp2));
wp3.node = graph.addNode(graph.createNode(wp3));

graph.addMutualArc(wp1.node, wp3.node);
graph.addMutualArc(wp2.node, wp3.node);

var astar = new AStar(graph);
var path = new DA();
var isPathExist = astar.find(graph, wp1, wp2, path);
console.log(path);
```
