// Codility / lesson8 / EquiLeader
// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// solve: 40분

// 시간복잡도 : O(N)

// 1. 전체 배열의 지배자를 구한다.
// 2. 순회하면서 왼쪽 배열의 지배자, 오른쪽 배열의 지배자가 전체 배열의 지배자인지 확인한다.

function solution(A) {
  const result = [];
  const N = A.length;
  const map = new Map();

  if (N === 1) {
    return 0;
  }

  A.forEach(makeMap);

  const leader = getLeader(map);
  if (leader.length !== 1) {
    return 0;
  }

  let leftCount = 0;
  let rightCount = leader[0][1];
  const leaderNumber = leader[0][0];
  A.forEach(operate);

  return result.length;

  function makeMap(key) {
    if (map.has(key)) {
      const value = map.get(key);
      map.set(key, value + 1);
    } else {
      map.set(key, 1);
    }
  }

  function getLeader(map) {
    const half = Math.floor(N / 2);
    return Array.from(map).filter((value) => half < value[1]);
  }

  function operate(value, index) {
    const leftLength = index + 1;
    const rightLength = N - leftLength;

    if (rightLength === 0) {
      return;
    }

    if (value === leaderNumber) {
      leftCount += 1;
      rightCount -= 1;
    }
    if (
      Math.max(leftLength / 2) < leftCount &&
      Math.max(rightLength / 2) < rightCount
    ) {
      result.push(index);
    }
  }
}
