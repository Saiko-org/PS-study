// 프로그래머스 / 142086 / 가장 가까운 같은 글자 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// solve: 5분

function solution(s) {
  const map = new Map();

  const getValue = (key, index) => {
    if (map.has(key)) {
      const prevIndex = map.get(key);
      map.set(key, index);
      return index - prevIndex;
    }
    map.set(key, index);
    return -1;
  };

  return s.split("").map(getValue);
}
