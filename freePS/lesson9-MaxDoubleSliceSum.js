// Codility / lesson9 / MaxDoubleSliceSum
// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
// solve: 50분

// 시간 복잡도 : O(N)

// 1. 0과 N-1의 값은 신경쓸일없다.
// 2. 1 ~ N-2까지 부분합을 구한다. (부분합 구하는 과정에서 음수로 떨어지면 0으로 처리한다.)
// 3. N-2 ~ 1까지 부분합을 구한다. (부분합 구하는 과정에서 음수로 떨어지면 0으로 처리한다.)
// 4. 1 ~ N-1까지 순회하면서
// 4-1. {좌측 부분합 + 우측 부분합}과 {현재 결과값}을 비교해서 최대값을 결과값으로 저장한다.
// 참고 : https://hwan-shell.tistory.com/124

function solution(A) {
  const N = A.length;
  if (N < 4) {
    return 0;
  }

  let result = 0;
  const left = Array.from({ length: N }, () => 0);
  const right = Array.from({ length: N }, () => 0);

  for (let i = 1; i < N - 1; i++) {
    left[i] = Math.max(left[i - 1] + A[i], 0);
  }

  for (let i = N - 2; i > 0; i--) {
    right[i] = Math.max(right[i + 1] + A[i], 0);
  }

  for (let i = 1; i < N - 1; i++) {
    result = Math.max(left[i - 1] + right[i + 1], result);
  }

  return result;
}
