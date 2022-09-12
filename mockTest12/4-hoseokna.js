// 프로그래머스 / 모의테슽트12-4 / 입국 심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// solve: 29분

function solution(n, times) {
  const maxTime = Math.max(...times)
  let min = Infinity
  let left = 1
  let right = maxTime * n

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    const count = times.reduce((acc, cur) => (acc += Math.floor(mid / cur)), 0)

    if (count < n) {
      left = mid + 1
    } else {
      min = Math.min(min, mid)
      right = mid
    }
  }

  return left
}
