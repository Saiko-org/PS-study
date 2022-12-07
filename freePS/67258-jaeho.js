// 프로그래머스 / 67258 / 보석 쇼핑 (Lv3 2020 카카오 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/67258
// solve: 60분
// 투 포인터 (슬라이딩 윈도우)
// 순회하는 indexOf, slice, new Set(arr) 등을 이용하면 시간초과

function solution(gems) {
  let answerLen = Infinity;
  let answer = [1, 1];
  let left = 0;
  let right = 0;
  const TOTAL = new Set(gems).size;
  const map = new Map();

  if (TOTAL === 1) {
    return answer;
  }

  for (; right < gems.length; right++) {
    const value = map.get(gems[right]) || 0;
    map.set(gems[right], value + 1);

    if (map.size === TOTAL) {
      while (true) {
        const value = map.get(gems[left]);

        if (value === 1) {
          break;
        } else {
          map.set(gems[left], value - 1);
          left += 1;
        }
      }

      const len = right - left + 1;
      if (len < answerLen) {
        answerLen = len;
        answer = [left + 1, right + 1];
      }
    }
  }

  return answer;
}
