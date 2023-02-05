// Codility / lesson7 / Brackets
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// solve: 10분

// 시간복잡도 : O(N)
// 공간복잡도 : O(N)

function solution(S) {
  const getPair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const N = S.length;
  if (N === 0) {
    return 1;
  }

  const stack = [];
  for (const s of S) {
    if (["(", "[", "{"].includes(s)) {
      stack.push(s);
    } else {
      const length = stack.length;
      if (length < 1 || getPair[stack[length - 1]] !== s) {
        return 0;
      }
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
