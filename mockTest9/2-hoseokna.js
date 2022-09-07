// 프로그래머스 / 모의테스트9-2 / K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// solve: 3분

function solution(array, commands) {
  return commands.map(
    ([from, to, target]) =>
      array.slice(from - 1, to).sort((a, b) => a - b)[target - 1]
  )
}
