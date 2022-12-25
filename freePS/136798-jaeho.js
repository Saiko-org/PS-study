// 프로그래머스 / 136798 / 기사단원의 무기 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// solve: 15분

function solution(number, limit, power) {
  const board = Array.from({ length: number + 1 }, () => []);

  for (let index = 1; index < board.length; index++) {
    for (let weight = 1; index * weight < board.length; weight++) {
      board[index * weight].push(index);
    }
  }

  return board
    .map((array) => {
      if (limit < array.length) {
        return power;
      }
      return array.length;
    })
    .reduce((total, current) => total + current, 0);
}
