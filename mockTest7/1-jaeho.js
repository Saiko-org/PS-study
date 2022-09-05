// 프로그래머스 / 12906 / 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// solve: 4분

function solution(arr) {
  let prev = arr[0];
  const answer = [prev];

  for (let index = 1; index < arr.length; index++) {
      const curr = arr[index];

      if (prev === curr) {
          continue;
      } else {
          answer.push(curr);
          prev = curr;
      }
  }

  return answer;
}
