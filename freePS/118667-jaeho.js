// 프로그래머스 / 118667 / 두 큐 합 같게 만들기 (Lv2 2022 KAKAO TECH INTERNSHIP)
// https://school.programmers.co.kr/learn/courses/30/lessons/118667
// solve: 30분

function solution(queue1, queue2) {
  let left = queue1.reduce((prev, curr) => prev + curr, 0);
  let right = queue2.reduce((prev, curr) => prev + curr, 0);
  let cnt = 0;

  const queue = queue1.concat(queue2);
  const LEN = queue.length;
  let pointer1 = 0;
  let pointer2 = queue1.length;

  while (cnt <= LEN * 2 && pointer1 !== pointer2) {
    if (left === right) {
      return cnt;
    } else if (left < right) {
      const value = queue[pointer2];
      pointer2 = (pointer2 + 1) % LEN;
      left += value;
      right -= value;
    } else if (right < left) {
      const value = queue[pointer1];
      pointer1 = (pointer1 + 1) % LEN;
      left -= value;
      right += value;
    }
    cnt += 1;
  }

  return -1;
}
