// 프로그래머스 / 135808 / 과일 장수 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// solve: 5분

function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let index = m - 1; index < score.length; index += m) {
    answer += score[index] * m;
  }

  return answer;
}
