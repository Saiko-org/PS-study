// Codility / lesson5 / MinAvgTwoSlice
// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// solve: 15분

// 시간 복잡도 : O(N)
// 평균은 범위의 가장 작은 수보다 크거나 같다라는 점을 이용한다.

// 1. A[0]과 A[1]의 평균을 시작으로 둔다.
// 2. 2개 묶음 평균이 반환값보다 작은지 확인.
// 3. 3개 묶음 평균이 반환값보다 작은지 확인.

function solution(A) {
  const N = A.length;
  let result = (A[0] + A[1]) / 2;
  let resultIndex = 0;

  for (let start = 2; start < N; start++) {
    const three = (A[start - 2] + A[start - 1] + A[start]) / 3;
    const two = (A[start - 1] + A[start]) / 2;

    if (three < result) {
      result = three;
      resultIndex = start - 2;
    }
    if (two < result) {
      result = two;
      resultIndex = start - 1;
    }
  }

  return resultIndex;
}
