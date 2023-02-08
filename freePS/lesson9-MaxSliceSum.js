// Codility / lesson9 / MaxSliceSum
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
// solve: 10분

// 시간복잡도 : O(N)

// MaxProfit 문제랑 누적합 문제랑 섞임
// 1. 누적합을 구한다.
// 2. 순회를 하면서 현재 값에서 왼쪽 중에 가장 작은 값을 뺀다.
// 3. 결과 값들 중 가장 큰 값을 구하면 된다.

function solution(A) {
  const N = A.length;
  if (N === 1) {
    return A[0];
  }

  const accumulatedA = [A[0]];
  for (let i = 1; i < N; i++) {
    accumulatedA[i] = accumulatedA[i - 1] + A[i];
  }

  let result = accumulatedA[0];
  let min = accumulatedA[0];
  for (let i = 1; i < N; i++) {
    const local = accumulatedA[i] - min;
    result = Math.max(result, Math.max(local, accumulatedA[i]));

    min = Math.min(min, accumulatedA[i]);
  }

  return result;
}
