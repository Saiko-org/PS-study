// 프로그래머스 / 12944 / 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// solve: 3분

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
