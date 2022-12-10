// 프로그래머스 / 42892 / 길 찾기 게임 (Lv3 2019 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/42892
// solve: 1시간

function solution(nodeinfo) {
  function Node(x, y, index) {
    this.value = [x, y, index];
    this.left = null;
    this.right = null;
  }

  function Tree() {
    this.root = null;
    this.add = (x, y, index) => {
      if (this.root === null) {
        this.root = new Node(x, y, index);
        return;
      }
      let pointer = this.root;
      while (true) {
        if (
          x < pointer.value[0] &&
          pointer.left !== null &&
          y < pointer.left.value[1]
        ) {
          pointer = pointer.left;
        } else if (
          x > pointer.value[0] &&
          pointer.right !== null &&
          y < pointer.right.value[1]
        ) {
          pointer = pointer.right;
        } else {
          if (x < pointer.value[0]) {
            pointer.left = new Node(x, y, index);
          } else if (x > pointer.value[0]) {
            pointer.right = new Node(x, y, index);
          }
          break;
        }
      }
    };
    this.preOrder = () => {
      const result = [];
      const dfs = (pointer) => {
        result.push(pointer.value[2]);
        pointer.left !== null && dfs(pointer.left);
        pointer.right !== null && dfs(pointer.right);
      };
      dfs(this.root);
      return result;
    };
    this.postOrder = () => {
      const result = [];
      const dfs = (pointer) => {
        pointer.left !== null && dfs(pointer.left);
        pointer.right !== null && dfs(pointer.right);
        result.push(pointer.value[2]);
      };
      dfs(this.root);
      return result;
    };
  }

  const tree = new Tree();
  nodeinfo = nodeinfo.map(([x, y], index) => [x, y, index + 1]);
  nodeinfo.sort((a, b) => b[1] - a[1]);
  nodeinfo.forEach(([x, y, index]) => tree.add(x, y, index));

  return [tree.preOrder(), tree.postOrder()];
}
