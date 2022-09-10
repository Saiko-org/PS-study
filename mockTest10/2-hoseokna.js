// 프로그래머스 / 모의테스트 10-2 / 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// solve: 2분

function solution(s) {
  let count = 0

  for (const c of s.toLowerCase()) {
    if (c === 'p') {
      count++
    }
    if (c === 'y') {
      count--
    }
  }

  return count === 0
}
