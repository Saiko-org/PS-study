// 프로그래머스 / 72412 / 순위검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// fail: 1시간

const LANGUAGENAME = ["-", "cpp", "java", "python"];
const POSITIONNAME = ["-", "backend", "frontend"];
const CAREERNAME = ["-", "junior", "senior"];
const FOODNAME = ["-", "chicken", "pizza"];

function solution(info, query) {
  const answer = [];
  const persons = [];

  const map = new Map();

  // 모든 경우의 수에 빈배열 만들기 (안그러면 런타임 아웃 발생)
  for (let l = 0; l < 4; l++) {
    for (let p = 0; p < 3; p++) {
      for (let c = 0; c < 3; c++) {
        for (let f = 0; f < 3; f++) {
          const key = [
            LANGUAGENAME[l],
            POSITIONNAME[p],
            CAREERNAME[c],
            FOODNAME[f],
          ].join("");
          map.set(key, []);
        }
      }
    }
  }

  // 각 지원자 정보 저장
  for (const i of info) {
    const [language, position, career, food, score] = i.split(" ");

    // 깨름칙하지만 나중에 접근할때 빠르도록 모든 경우의 수에 대응하도록 만들기
    for (let l = 0; l < 2; l++) {
      const keyL = l === 0 ? "-" : language;
      for (let p = 0; p < 2; p++) {
        const keyP = p === 0 ? "-" : position;
        for (let c = 0; c < 2; c++) {
          const keyC = c === 0 ? "-" : career;
          for (let f = 0; f < 2; f++) {
            const keyF = f === 0 ? "-" : food;
            const key = [keyL, keyP, keyC, keyF].join("");
            map.set(key, [...map.get(key), parseInt(score)]);
          }
        }
      }
    }
  }

  // 이진 탐색을 위해 정렬
  for (const [key, value] of map) {
    map.set(
      key,
      value.sort((a, b) => a - b)
    );
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

      while (0 <= mid && score <= values[mid]) {
        mid -= 1;
      }

      answer.push(values.length - mid - 1);
    }
  }

  return answer;
}
