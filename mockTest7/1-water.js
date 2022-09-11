// 프로그래머스 / 12906 / 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// solve: 스터디 시작 전에 풀어 시간 X

function solution(arr) {
  return arr.filter((number, index) => number !== arr[index + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
