// 리트코드 / 208 / Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/
// solve:

class Node {
    private Map<Character, Node> childNode = new HashMap<>();
    private boolean isEnd = false;

    public Node insert(char key) {
        Node node = new Node();
        childNode.put(key, node);
        return node;
    }
    public boolean isEnd() {
        return isEnd;
    }
    public void setEnd() {
        isEnd = true;
    }

    public boolean contains(char key) {
        return childNode.containsKey(key);
    }

    public Node get(char key) {
        return childNode.get(key);
    }
}
class Trie {

    private Node root;

    public Trie() {
        root = new Node();
    }
    
    public void insert(String word) {
        Node node = this.root;
        for (int i = 0; i < word.length(); i++) {
            char key = word.charAt(i);
            if (!node.contains(key)) {
                node = node.insert(key);
                continue;
            }
            node = node.get(key);
        }
        node.setEnd();
    }
    
    public boolean search(String word) {
        return find(word, false);
    }
    
    public boolean startsWith(String prefix) {
        return find(prefix, true);
    }

    private boolean find(String word, boolean isPrefix) {
        Node node = this.root;

        for (int i = 0; i < word.length(); i++) {
            char key = word.charAt(i);
            if (!node.contains(key)) {
                return false;
            }
            node = node.get(key);
        }

        if (isPrefix) {
            return true;
        }
        return node.isEnd();
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
