// 프로그래머스 / 모의테스트10-1 / 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// solve: 1분

function solution(arr) {
  return arr.reduce((acc, cur) => (acc += cur)) / arr.length
}
