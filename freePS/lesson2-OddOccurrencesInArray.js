// Codility / lesson2 / OddOccurrencesInArray
// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// solve: 15분

// 1차 로직: 선형 탐색 O(N)
// 주의점: 짝이 안맞는 요소의 갯수는 1이 아니라 홀수이다.

function solution(A) {
  const object = {};

  for (const key of A) {
    const value = object[key];
    if (value) {
      object[key] = value + 1;
    } else {
      object[key] = 1;
    }
  }

  for (const key in object) {
    if (object[key] % 2 === 1) {
      return Number(key);
    }
  }
}
