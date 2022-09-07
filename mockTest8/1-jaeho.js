// 프로그래머스 / 42840 / 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// solve: 14분

const SUPOJA = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];
const LEN = [SUPOJA[0].length,  SUPOJA[1].length, SUPOJA[2].length];

function solution(answers) {
  const count = [0, 0, 0];

  for (let index = 0; index < answers.length; index++) {
    for (let person = 0; person < 3; person++) {
      if (SUPOJA[person][index % LEN[person]] === answers[index]) {
          count[person] += 1;
      }
    }
  }

  const MAXSCORE = Math.max(...count);
  return count.map((score, index) => {
    if (MAXSCORE === score) {
        return index + 1;
    }
  }).filter(element => element);
}
