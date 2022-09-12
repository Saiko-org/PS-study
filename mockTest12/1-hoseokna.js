// 프로그래머스 / 모의테스트12-1 / 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// solve: 10분

function solution(nums) {
  const set = new Set()
  let count = 0

  const isPrime = (number) => {
    if (set.has(number)) {
      return true
    }

    if (number === 1) {
      return false
    }

    for (let i = 2; i <= Math.sqrt(number, 2); i++) {
      if (number % i === 0) {
        return false
      }
    }

    set.add(number)

    return true
  }

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]) && count++
      }
    }
  }

  return count
}
