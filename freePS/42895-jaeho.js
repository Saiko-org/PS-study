// 프로그래머스 / 42895 / N으로 표현 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42895
// solve: 60분
// Dynamic Programming

function solution(N, number) {
  if (number === N) {
    return 1;
  }
  const divide = (n, p) => {
    return Math.floor(n / p);
  };
  const getNumber = (count) => {
    return parseInt(N.toString().repeat(count));
  };

  const board = Array.from({ length: 10 }, () => new Set());
  board[1].add(N);
  for (let target = 2; target <= 9; target++) {
    board[target].add(getNumber(target));
    for (let left = 1; left <= divide(target, 2); left++) {
      const right = target - left;
      for (const leftValue of board[left]) {
        for (const rightValue of board[right]) {
          board[target].add(leftValue + rightValue);
          board[target].add(leftValue - rightValue);
          board[target].add(rightValue - leftValue);
          board[target].add(leftValue * rightValue);
          board[target].add(divide(leftValue, rightValue));
          board[target].add(divide(rightValue, leftValue));
        }
      }
    }
    if (board[target].has(number)) {
      return target;
    }
  }

  return -1;
}
