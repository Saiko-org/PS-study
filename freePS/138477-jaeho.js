// 프로그래머스 / 138477 / 명예의 전당(1) (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477
// solve: 10분

function solution(k, score) {
  const answer = [];

  score.forEach((_, index) => {
    const todayScores = score.slice(0, index + 1);

    todayScores.sort((a, b) => b - a);

    if (index <= k - 1) {
      answer.push(todayScores[index]);
    } else {
      answer.push(todayScores[k - 1]);
    }
  });

  return answer;
}
