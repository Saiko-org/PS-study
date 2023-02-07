// Codility / lesson9 / MaxProfit
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
// solve: 10분

// 시간 복잡도 : O(N)

// 1. 순회하면서 (기존의 작은 숫자 = A[0])
// 1-1. {현재 숫자 - 기존의 작은 숫자}를 업데이트
// 1-2. {기존의 작은 숫자와 현재 숫자 중에 작은 수}를 업데이트
function solution(A) {
  let result = 0;
  let minValue = A[0];

  for (let i = 1; i < A.length; i++) {
    const local = A[i] - minValue;
    result = Math.max(result, local);

    if (A[i] < minValue) {
      minValue = A[i];
    }
  }

  return result;
}
