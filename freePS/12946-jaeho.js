// 프로그래머스 / 12946 / 하노이의 탑 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12946
// solve: 13분

function solution(n) {
  const answer = [];

  const hanoi = (count, start, sub, end) => {
    if (count === 1) {
      answer.push([start, end]);
      return;
    }
    hanoi(count - 1, start, end, sub);
    answer.push([start, end]);
    hanoi(count - 1, sub, start, end);
  };

  hanoi(n, 1, 2, 3);

  return answer;
}
