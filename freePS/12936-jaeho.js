// 프로그래머스 / 12936 / 줄 서는 방법 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12936
// solve: 30분
// dfs로 하나하나 방문해서 답안을 찾을까하다가 마지막 k를 찾기위해서는 너무 불필요한 연산이 많아 팩토리얼을 이용한 가중치로 찾아보았습니다.

function solution(n, k) {
  if (n === 1) {
    return [1];
  }

  const answer = [];
  const board = Array.from({ length: n + 1 }, (_, index) => index + 1); // 사용하지 않은 숫자 목록

  // 팩토리얼 구하는 함수
  const getFactorial = (num) => {
    let total = 1;
    while (1 < num) {
      total *= num;
      num -= 1;
    }
    return total;
  };

  // 각 자릿수마다 가중치와 인덱스를 구해서
  // 사용하지 않는 숫자 목록의 인덱스의 숫자를 answer에 저장
  for (let index = 0; index < n - 1; index++) {
    const weight = getFactorial(n - index - 1);

    let num = 0;
    while ((num + 1) * weight < k) {
      num += 1;
    }
    k -= num * weight;

    answer.push(board[num]);
    board.splice(num, 1);
  }

  // 마지막 숫자는 남은 숫자 저장
  answer.push(board[0]);

  return answer;
}
