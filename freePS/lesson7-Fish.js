// Codility / lesson7 / Fish
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
// solve: 30분

// 시간복잡도 : O(N)

// 상류0 -> 상류0 마지막 물고기 저장
// 하류1 -> 하류1 마지막 물고기 저장
// 상류0 -> 하류1 마지막 물고기 저장 (반대 방향이라 괜찮음)
// 하류1 -> 상류0 어디까지 잡아먹는지 확인

function solution(A, B) {
  const N = A.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    const [fish, flow] = getFish(i);

    if (flow === 0) {
      while (stack.length) {
        const [lastFish, lastFlow] = getFish(stack[stack.length - 1]);
        if (lastFish < fish && lastFlow === 1) {
          stack.pop();
        } else {
          break;
        }
      }

      if (stack.length === 0 || B[stack[stack.length - 1]] === 0) {
        stack.push(i);
      }
    } else {
      stack.push(i);
    }
  }

  return stack.length;

  function getFish(index) {
    return [A[index], B[index]];
  }
}
