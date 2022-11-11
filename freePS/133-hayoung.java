// 리트코드  / 133 / Clone Graph
// https://leetcode.com/problems/clone-graph/
// solve: 
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/
import java.util.*;

class Solution {
    public Node cloneGraph(Node node) {
        System.out.println(node);

        
        if (node == null) {
            return null;
        }

        HashMap<Integer, Node> map = new HashMap<>();
        Node cloneNode = new Node(node.val);
        map.put(cloneNode.val, cloneNode);

        solve(cloneNode, node, map);
        return cloneNode;
    }
    private void solve(Node cloneNode, Node node, Map<Integer, Node> map) {
        ArrayList<Node> cloneNeighbors = new ArrayList<>();

        for (int i = 0; i < node.neighbors.size(); i++) {
            Node neighbor = node.neighbors.get(i);
            if (neighbor == null) {
                continue;
            }
            if (map.containsKey(neighbor.val)) {
                cloneNeighbors.add(map.get(neighbor.val));
                continue;
            }
            Node cloneNeighbor = new Node(neighbor.val);
            map.put(cloneNeighbor.val, cloneNeighbor);
            cloneNeighbors.add(cloneNeighbor);
            solve(cloneNeighbor, neighbor, map);
        }
        cloneNode.neighbors = cloneNeighbors;
  }
}

