// 프로그래머스 / 42748 / K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// solve: 5분

function solution(array, commands) {
  return commands.map(([start, end, k]) => {
    const sliceArray = array.slice(start - 1, end);
    sliceArray.sort((a, b) => a - b);
    return sliceArray[k - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
