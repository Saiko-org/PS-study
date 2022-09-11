// 프로그래머스 / 12916 / 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// solve: 5분

function solution(s) {
  const countOfP = s
    .toLowerCase()
    .split("")
    .filter((element) => element === "p");
  const countOfY = s
    .toLowerCase()
    .split("")
    .filter((element) => element === "y");

  return countOfP.length === countOfY.length;
}
