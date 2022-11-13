// 프로그래머스 / 42884 / 단속카메라 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42884
// solve: 20분

function solution(routes) {
  let answer = 0;

  routes.sort((a, b) => a[1] - b[1]);

  answer += 1;

  let flag = 0;
  for (let index = 1; index < routes.length; index++) {
    if (routes[flag][1] < routes[index][0]) {
      flag = index;
      answer += 1;
    }
  }

  return answer;
}
