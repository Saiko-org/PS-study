/**
 * 프로그래머스 / 131701 / 연속 부분 수열 합의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 * solve: 15분
 */

function solution(elements) {
  const SIZE = elements.length
  const circuited = [...elements, ...elements]
  const set = new Set()

  for (let i = 0; i < SIZE; i++) {
    let sum = 0
    for (let j = i; j < i + SIZE; j++) {
      sum += circuited[j]
      set.add(sum)
    }
  }

  return set.size
}
