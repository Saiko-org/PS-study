// Codility / lesson4 / MaxCounters
// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// solve: 15분

// 시간복잡도 : O(N + M)

// 1. 길이가 N인 배열만들기
// 2. 순회하면서 로직 적용
// 2-1. A의 값이 N+1이면 모든 요소를 최대값으로 적용
// 2-2. 그 외 1 증가하기
// 주의점 : index 조심
// 주의점 : 새 배열을 할당하게 되면 O(N * M)의 시간복잡도를 갖게된다.

function solution(N, A) {
  let maxCounter = 0;
  let counters = Array.from({ length: N }, () => maxCounter);

  A.forEach(operate);

  return counters;

  function operate(value) {
    if (value === N + 1) {
      if (maxCounter === 0) {
        return;
      }
      for (let index = 0; index < N; index++) {
        counters[index] = maxCounter;
      }
    } else {
      counters[value - 1] += 1;
      maxCounter = Math.max(maxCounter, counters[value - 1]);
    }
  }
}
