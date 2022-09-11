// 프로그래머스 / 모의테스트11-2 / 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// solve: 4분

function solution(nums) {
  const count = nums.length / 2
  const set = new Set()

  nums.forEach((number) => set.add(number))

  return Math.min(count, set.size)
}
