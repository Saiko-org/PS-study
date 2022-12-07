// 프로그래머스 / 134240 / 푸드 파이트 대회 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// solve: 15분

function solution(food) {
  let answer = "0";

  food.reverse().forEach((value, index) => {
    const count = Math.floor(value / 2);
    answer =
      (food.length - index - 1).toString().repeat(count) +
      answer +
      (food.length - index - 1).toString().repeat(count);
  });

  return answer;
}
