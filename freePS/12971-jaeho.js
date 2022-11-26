// 프로그래머스 / 12971 / 스티커 모으기(2) (Lv3 Summer/Winter Coding(~2018))
// https://school.programmers.co.kr/learn/courses/30/lessons/12971
// solve: 60분
// DP
// arr[index] = max(sticker[index] + arr[index - 2], arr[index - 1])

function solution(sticker) {
  const LEN = sticker.length;
  if (LEN === 1) {
    return sticker[0];
  }

  const arr1 = Array.from({ length: LEN }, () => 0);
  const arr2 = Array.from({ length: LEN }, () => 0);
  arr1[0] = sticker[0];
  arr1[1] = arr1[0];
  arr2[1] = sticker[1];

  for (let index = 2; index < LEN - 1; index++) {
    arr1[index] = Math.max(sticker[index] + arr1[index - 2], arr1[index - 1]);
  }

  for (let index = 2; index < LEN; index++) {
    arr2[index] = Math.max(sticker[index] + arr2[index - 2], arr2[index - 1]);
  }

  return Math.max(arr1[LEN - 2], arr2[LEN - 1]);
}
