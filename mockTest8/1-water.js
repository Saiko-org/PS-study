// 프로그래머스 / 42840 / 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// solve: 8분

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const countOfCorrectAnswer = [0, 0, 0];
  answers.forEach((number, index) => {
    if (number === first[index % 5]) {
      countOfCorrectAnswer[0] += 1;
    }
    if (number === second[index % 8]) {
      countOfCorrectAnswer[1] += 1;
    }
    if (number === third[index % 10]) {
      countOfCorrectAnswer[2] += 1;
    }
  });

  const maxCountCorrectAnswer = Math.max.apply(null, countOfCorrectAnswer);
  const personOfMaxCorrectQuiz = [];

  countOfCorrectAnswer.forEach((count, index) => {
    if (count === maxCountCorrectAnswer) {
      personOfMaxCorrectQuiz.push(index + 1);
    }
  });
  return personOfMaxCorrectQuiz;
}

console.log(solution([1, 2, 3, 4, 5]));
