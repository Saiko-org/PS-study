// 프로그래머스 / 42839 / 소수찾기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/42839
// solve: 30분

function solution(numbers) {
  const answer = new Set();
  const board = Array.from({ length: 10000000 }, () => true);
  board[0] = false;
  board[1] = false;

  // 에라토스테네스의 체 만들기 -> 정답 확인 후 메모리 차지 너무 많긴함 -> 다른 사람 풀이에서는 매번 소수찾는 방법을 사용하긴함
  for (let index = 2; index < Math.sqrt(board.length) + 1; index++) {
    if (board[index] === false) {
      continue;
    }

    for (let weight = 2; index * weight < board.length; weight++) {
      board[index * weight] = false;
    }
  }

  numbers = numbers.split("");

  const visited = Array.from({ length: numbers.length }, () => false);
  const dfs = (count, total) => {
    if (count === numbers.length) {
      if (board[parseInt(total)]) {
        answer.add(parseInt(total));
      }
      return;
    }

    // 순열로 추출해야하므로 매번 맨 앞부터 loop
    for (let index = 0; index < numbers.length; index++) {
      if (visited[index] === false) {
        visited[index] = true;
        dfs(count + 1, total);
        dfs(count + 1, total.concat(numbers[index]));
        visited[index] = false;
      }
    }
  };

  dfs(0, "");

  return answer.size;
}
