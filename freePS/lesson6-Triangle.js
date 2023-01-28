// Codility / lesson6 / Triangle
// https://app.codility.com/programmers/lessons/6-sorting/triangle/
// solve: 30분

// 시간복잡도 : O(N * logN)

// 포인트
// 1. 정렬해서 인접한 3개의 수를 가지고 판단하면 된다.
// 2. 뽑아낸 3개 수에서 가장 작은 2개의 수가 가장 큰 수보다 크면 된다.
// 3. 두 수의 합이 Overflow될 수 있으므로 빼기를 이용한다.

function solution(A) {
  const N = A.length;
  if (N < 3) {
    return 0;
  }

  const sortedA = A.sort((a, b) => a - b);

  for (let index = 0; index < N - 2; index++) {
    if (isTriangular(index)) {
      return 1;
    }
  }

  return 0;

  function isTriangular(index) {
    const p = sortedA[index];
    const q = sortedA[index + 1];
    const r = sortedA[index + 2];

    return p > r - q;
  }
}
