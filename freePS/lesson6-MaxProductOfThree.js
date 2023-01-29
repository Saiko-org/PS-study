// Codility / lesson6 / MaxProductOfThree
// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// solve: 15분

// 시간복잡도 : O(N * logN)

// 0. 3개라면 바로 반환
// 1. 정렬하기
// 2-1. 양수 3개 뽑기
// 2-2. 음수 2개, 양수 1개 뽑기

function solution(A) {
  const N = A.length;
  if (N === 3) {
    return A.reduce((total, current) => total * current, 1);
  }

  const sortedA = A.sort((a, b) => a - b);
  const threePositive = sortedA
    .slice(N - 3)
    .reduce((total, current) => total * current, 1);
  const onePositive =
    sortedA.slice(0, 2).reduce((total, current) => total * current, 1) *
    sortedA[N - 1];

  return Math.max(threePositive, onePositive);
}
