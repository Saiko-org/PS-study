// 프로그래머스 / 148653 / 마법의 엘리베이터 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/148653
// solve: 60분

function solution(storey) {
  const answer = [];
  const arr = storey
    .toString()
    .split("")
    .reverse()
    .map((e) => parseInt(e));

  let weight = 0;
  for (let i = 0; i < arr.length; i++) {
    const floor = arr[i] + weight;

    if (floor > 5) {
      weight = 1;
      answer.push(10 - floor);
    } else if (floor === 5 && i !== arr.length - 1) {
      weight = 0;
      if (arr[i + 1] >= 5) {
        weight = 1;
      }
      answer.push(floor);
    } else {
      weight = 0;
      answer.push(floor);
    }
  }

  answer.push(weight);

  return answer.reduce((total, current) => total + current, 0);
}
