// 프로그래머스 / 138476 / 귤 고르기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/138476
// solve: 10분

function solution(k, tangerine) {
  const map = new Map();

  tangerine.forEach((key) => {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  });

  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  let answer = 0;
  for (const element of sorted) {
    answer += 1;
    if (k <= element[1]) {
      return answer;
    }
    k -= element[1];
  }
  return answer;
}
