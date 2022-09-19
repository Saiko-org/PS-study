// 프로그래머스 / 12944 / 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// solve: 3분

function solution(arr) {
  const total = arr.reduce((previous, current) => previous + current, 0);
  return total / arr.length;
}
