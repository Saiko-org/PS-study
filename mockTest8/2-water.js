// 프로그래머스 / 42576 / 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// solve: 10분

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.filter((people, index) => people !== completion[index])[0];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
