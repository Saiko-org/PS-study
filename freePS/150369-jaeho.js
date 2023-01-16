// 프로그래머스 / 150369 / 택배 배달과 수거하기 (Lv2 2023 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/150369
// solve: 45분

function solution(cap, n, deliveries, pickups) {
  const getDistances = (array) => {
    const result = [];
    const reversedArray = array.reverse();
    let totalCount = 0;

    for (let i = 0; i < n; ) {
      if (totalCount === cap) {
        totalCount = 0;
      }

      if (reversedArray[i] === 0) {
        i++;
        continue;
      }

      if (totalCount === 0) {
        result.push(n - i);
      }

      const count = Math.min(cap - totalCount, reversedArray[i]);
      reversedArray[i] -= count;
      totalCount += count;
    }

    return result;
  };

  const getGoDistances = getDistances(deliveries);
  const getBackDistances = getDistances(pickups);
  const LEN = Math.max(getGoDistances.length, getBackDistances.length);

  let result = 0;
  for (let i = 0; i < LEN; i++) {
    const goDistance = i < getGoDistances.length ? getGoDistances[i] : 0;
    const backDistance = i < getBackDistances.length ? getBackDistances[i] : 0;
    result += Math.max(goDistance, backDistance);
  }

  return result * 2;
}
