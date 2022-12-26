// 프로그래머스 / 147355 / 크기가 작은 부분문자열 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// solve: 5분

function solution(t, p) {
  const answer = [];

  for (let index = 0; index <= t.length - p.length; index++) {
    const number = parseInt(t.slice(index, index + p.length));
    answer.push(number);
  }

  return answer.filter((e) => e <= parseInt(p)).length;
}
