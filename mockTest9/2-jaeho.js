// 프로그래머스 / 42748 / K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// solve: 6분

function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    const sortedPartition = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sortedPartition[k - 1]);
  }

  return answer;
}
