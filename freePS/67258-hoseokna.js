/**
 * 프로그래머스 / 67258 / 보석 쇼핑
 * https://school.programmers.co.kr/learn/courses/30/lessons/67258
 * solve: 56분
 */

function solution(gems) {
  const SIZE = new Set(gems).size
  const gemsMap = new Map()
  let answer = [0, gems.length]

  gems.forEach((gem, index) => {
    gemsMap.delete(gem)
    gemsMap.set(gem, index)

    if (gemsMap.size === SIZE) {
      const start = gemsMap.values().next().value
      const end = index

      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1]
      }
      gemsMap.delete(gems[start])
    }
  })

  return answer
}
