// Codility / lesson3 / TapeEquilibrium
// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// solve: 20분

// 쉬운 방법 : 완전 탐색

// 방법1
// 왼쪽은 하나씩 더하고, 오른쪽은 하나씩 빼기를 하면서
// 가장 작은 차이를 구한다.

// 방법2
// 누적 배열로 만들고 => 각 요소는 왼쪽 배열 합
// 각 누적된 요소값이랑 맨 뒷값이랑 차이를 구한다. => 차이가 오른쪽 배열 합
// 누적된 요소랑 차이의 차이를 절대값으로 구한다.
// 가장 작은 절대값을 반환한다.

function solution(A) {
  const LEN = A.length;
  const accumulatedA = Array.from({ length: LEN }, () => Infinity);
  accumulatedA[0] = A[0];
  for (let index = 1; index < LEN; index++) {
    accumulatedA[index] = accumulatedA[index - 1] + A[index];
  }

  let result = Infinity;
  const total = accumulatedA[LEN - 1];
  for (let index = 0; index < LEN - 1; index++) {
    const gap = Math.abs(total - accumulatedA[index] * 2);
    result = Math.min(result, gap);
  }

  return result;
}
