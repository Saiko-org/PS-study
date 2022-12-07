// 프로그래머스 / 43165 / 타겟 넘버 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// solve: 6분

function solution(numbers, target) {
  let answer = 0;

  const dfs = (index, total) => {
    if (index === numbers.length) {
      if (total === target) {
        answer += 1;
      }
      return;
    }
    const currentValue = numbers[index];

    dfs(index + 1, total + currentValue);
    dfs(index + 1, total - currentValue);
  };

  dfs(0, 0);

  return answer;
}
