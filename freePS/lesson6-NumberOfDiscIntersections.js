// Codility / lesson6 / NumberOfDiscIntersections
// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
// solve: 30분

// 시간복잡도 : O(N * logN)

function solution(A) {
  const N = A.length;
  const upper = [];
  const lower = [];

  A.forEach(setUpperLower);

  upper.sort((a, b) => a - b);
  lower.sort((a, b) => a - b);

  let intersection = 0;
  let lowerIndex = 0;
  for (let upperIndex = 0; upperIndex < N; upperIndex++) {
    while (lowerIndex < N && upper[upperIndex] >= lower[lowerIndex]) {
      intersection += lowerIndex;
      intersection -= upperIndex;
      lowerIndex += 1;
    }
  }

  return intersection > 10000000 ? -1 : intersection;

  function setUpperLower(value, index) {
    lower.push(index - value);
    upper.push(index + value);
  }
}
