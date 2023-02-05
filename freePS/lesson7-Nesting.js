// Codility / lesson7 / Nesting
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
// solve: 10분

// 시간복잡도 : O(N)

function solution(S) {
  const stack = [];

  for (const s of S) {
    if (s === "(") {
      stack.push(s);
    } else if (0 < stack.length) {
      stack.pop();
    } else {
      return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
