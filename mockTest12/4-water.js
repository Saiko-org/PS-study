// 프로그래머스 / 43238 / 입국 심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// solve: 40분

function solution(n, times) {
  times.sort((a, b) => a - b);

  let minTime = 0;
  let left = 1;
  let right = n * Math.max(...times);

  while (left <= right) {
    let midTime = Math.floor((left + right) / 2);
    let peopleCount = 0;

    for (const time of times) {
      peopleCount += Math.floor(midTime / time);
    }

    if (peopleCount >= n) {
      minTime = midTime;
      right = midTime - 1;
    } else {
      left = midTime + 1;
    }
  }

  return minTime;
}

console.log(solution(6, [7, 10]));
