// Codility / lesson5 / PassingCars
// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// solve: 15분

// 시간 복잡도 : O(N)

// 1. 1의 총개수 구하기
// 2. A를 순회
// 2-1. 0을 만나면, 1의 총개수 만큼 total에 더하기
// 2-2. 1을 만나면, 1의 총개수 -= 1

function solution(A) {
  let oneCounts = A.filter((a) => a === 1).length;
  let result = 0;

  A.forEach(operate);

  if (1000000000 < result) {
    return -1;
  }

  return result;

  function operate(value) {
    if (value === 0) {
      result += oneCounts;
    }

    if (value === 1) {
      oneCounts -= 1;
    }
  }
}
