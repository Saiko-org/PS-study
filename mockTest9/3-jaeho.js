// 프로그래머스 / 72412 / 순위검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// fail: 1시간
// add: 황수경님의 도움으로 해결

const LANGUAGENAME = ["-", "cpp", "java", "python"];
const POSITIONNAME = ["-", "backend", "frontend"];
const CAREERNAME = ["-", "junior", "senior"];
const FOODNAME = ["-", "chicken", "pizza"];

function solution(info, query) {
  const answer = [];
  const map = new Map();

  // 모든 경우의 수에 빈배열 만들기 (안그러면 런타임 아웃 발생)
  for (const keyL of LANGUAGENAME) {
    for (const keyP of POSITIONNAME) {
      for (const keyC of CAREERNAME) {
        for (const keyF of FOODNAME) {
          const key = [keyL, keyP, keyC, keyF].join("");
          map.set(key, []);
        }
      }
    }
  }

  // 각 지원자 정보 저장
  for (const i of info) {
    const [language, position, career, food, score] = i.split(" ");

    for (const keyL of ["-", language]) {
      for (const keyP of ["-", position]) {
        for (const keyC of ["-", career]) {
          for (const keyF of ["-", food]) {
            const key = [keyL, keyP, keyC, keyF].join("");
            map.get(key).push(parseInt(score));
          }
        }
      }
    }
  }

  // 이진 탐색을 위해 정렬
  for (const [key, value] of map) {
    value.sort((a, b) => a - b);
  }

  // 각 조건에 맞는 인원수 구하기
  for (const q of query) {
    const [language, position, career, food, stringScore] = q
      .split(" ")
      .filter((element) => element !== "and");
    const score = parseInt(stringScore);
    const key = [language, position, career, food].join("");
    const values = map.get(key);

    if (values.length === 0) {
      answer.push(0);
    } else {
      // 이진 탐색
      let [start, end] = [0, values.length - 1];
      let mid = Math.floor((start + end) / 2);

      while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (values[mid] === score) {
          break;
        } else if (values[mid] > score) {
          end = mid - 1;
        } else if (values[mid] < score) {
          start = mid + 1;
        }
      }

      // 동일 점수가 되는 곳의 제일 작은 index 찾기
      while (0 <= mid && score <= values[mid]) {
        mid -= 1;
      }

      answer.push(values.length - mid - 1);
    }
  }

  return answer;
}
