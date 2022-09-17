// 프로그래머스 / 43238 / 입국 심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// solve: 50분

function solution(n, times) {
  let answer = 0;
  const binarySearch = (totalWorkTime) => {
    let count = 0;

    for (const time of times) {
      count += Math.floor(totalWorkTime / time);
    }

    if (n <= count) {
      return { goLeft: true, goRight: false };
    } else {
      return { goLeft: false, goRight: true };
    }
  };

  let left = Math.min(...times);
  let right = Math.max(...times) * n;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    const { goLeft, goRight } = binarySearch(mid);

    if (goLeft) {
      right = mid - 1;
      answer = mid;
    } else if (goRight) {
      left = mid + 1;
    }
  }

  return answer;
}
