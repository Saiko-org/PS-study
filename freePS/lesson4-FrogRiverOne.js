// Codility / lesson4 / FrogRiverOne
// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// solve: 10분

// 1 ~ X까지 모든 숫자가 발견되었을때(잎이 떨어졌을때)를 구하는 것이다.
// 발견된 숫자를 기록하면서 선형 탐색으로 구한다.

function solution(X, A) {
  const LEN = A.length;
  const hasLeaf = Array.from({ length: LEN }, () => false);
  let count = 0;

  for (let index = 0; index < LEN; index++) {
    const a = A[index];
    if (!hasLeaf[a]) {
      hasLeaf[a] = true;
      count += 1;
    }

    if (count === X) {
      return index;
    }
  }

  return -1;
}
