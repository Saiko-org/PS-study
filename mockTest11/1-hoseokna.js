// 프로그래머스 / 모의고사11-1 / 팰린드롬 개수 구하기
// solve: 5분

function solution(n, m) {
  const isPallindrome = (string) => {
    const LENGTH = string.length
    const mid = Math.floor(LENGTH / 2)

    for (let i = 0; i < mid; i++) {
      if (string[i] !== string[LENGTH - 1 - i]) {
        return false
      }
    }

    return true
  }

  let count = 0

  while (n <= m) {
    if (isPallindrome(String(n))) {
      count++
    }

    n++
  }

  return count
}
