// Codility / lesson7 / StoneWall
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// solve: 30분

// 시간복잡도 : O(N)

// 단일 순회하면서
// 현재 높이보다 낮은 이전 높이를 만날때까지 stack.pop
// 스택에 비거나 스택의 peek에 있는 높이보다 큰 현재 높이인 경우 (result++, stack.push)
// 참고 : https://jobjava00.github.io/algorithm/codility/lesson7/StoneWall/

function solution(H) {
  let result = 0;
  const stack = [];

  H.forEach(operate);

  return result;

  function operate(value) {
    while (stack.length !== 0 && stack[stack.length - 1] > value) {
      stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] < value) {
      result += 1;
      stack.push(value);
    }
  }
}
