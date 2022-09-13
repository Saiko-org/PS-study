// 프로그래머스 / 1845 / 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// solve: 8분

function solution(nums) {
  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  if (set.size === nums.length / 2) {
    return set.size;
  } else if (set.size < nums.length / 2) {
    return set.size;
  }

  return nums.length / 2;
}
