// 프로그래머스 / 1878 / 나머지 한 점
// https://school.programmers.co.kr/learn/courses/18/lessons/1878
// solve: 6분

function solution(v) {
  const row =
    v[0][0] === v[1][0] ? v[2][0] : v[0][0] === v[2][0] ? v[1][0] : v[0][0];
  const column =
    v[0][1] === v[1][1] ? v[2][1] : v[0][1] === v[2][1] ? v[1][1] : v[0][1];
  return [row, column];
}
