// 프로그래머스 / 12979 / 기지국 설치 (Lv3 Summer/Winter Coding(~2018))
// https://school.programmers.co.kr/learn/courses/30/lessons/12979
// solve: 60분

function solution(n, stations, w) {
  let answer = 0;
  let startIndex = 0;
  const RANGE = 2 * w + 1;

  // Math.ceil(전파 없는 범위 / 기지국의 전파 도달 범위)
  for (const station of stations) {
    answer += Math.ceil((station - w - 1 - startIndex) / RANGE);
    startIndex = station + w;
  }

  answer += Math.ceil((n - startIndex) / RANGE);

  return answer;
}
