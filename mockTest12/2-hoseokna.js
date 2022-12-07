// 프로그래머스 / 모의테스트12-2 / 나머지 한 점
// https://school.programmers.co.kr/learn/courses/18/lessons/1878
// solve: 3분

function solution(v) {
  return v.reduce((acc, cur) => [acc[0] ^ cur[0], acc[1] ^ cur[1]])
}
