// Codility / lesson8 / Dominator
// https://app.codility.com/programmers/lessons/8-leader/dominator/
// solve: 10분

// 시간복잡도 : O(N)

function solution(A) {
  const criteria = Math.floor(A.length / 2);
  const result = [null, null];
  const map = new Map();
  A.forEach(initialMap);

  const values = Array.from(map.values()).filter((v) => v.length > criteria);
  return values.length === 1 ? values[0][0] : -1;

  function initialMap(key, index) {
    if (map.has(key)) {
      map.get(key).push(index);
    } else {
      map.set(key, [index]);
    }
  }
}
