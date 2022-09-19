// 프로그래머스 / 12977 / 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// solve: 10분

function solution(nums) {
  let answer = 0;

  const board = Array.from({ length: 50001 }, () => true);
  board[0] = false;
  board[1] = false;

  const makeDecimal = () => {
    for (let index = 2; index < Math.sqrt(50001) + 1; index++) {
      for (let weight = 2; index * weight < 50001; weight++) {
        board[index * weight] = false;
      }
    }
  };

  makeDecimal();

  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length && a !== b; b++) {
      for (let c = 0; c < nums.length && a !== c && b !== c; c++) {
        if (board[nums[a] + nums[b] + nums[c]]) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}
