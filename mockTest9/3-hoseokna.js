// 프로그래머스 / 모의테스트9-3 / 순위검색
// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// solve: 57분

function solution(info, query) {
  const INFORMATION_LENGTH = 5
  const map = new Map()

  const dfs = (information, key, depth) => {
    if (depth === INFORMATION_LENGTH - 1) {
      const nextValue = map.get(key) || []

      nextValue.push(parseInt(information[information.length - 1], 10))
      map.set(key, nextValue)

      return
    }

    dfs(information, key + information[depth], depth + 1)
    dfs(information, key + '-', depth + 1)
  }

  info.forEach((string) => {
    const [language, position, career, food, score] = string.split(' ')

    dfs([language, position, career, food, score], '', 0)
  })

  map.forEach((value) => {
    value.sort((a, b) => a - b)
  })

  return query.map((string) => {
    const [language, position, career, foodAndScore] = string.split(' and ')
    const [food, score] = foodAndScore.split(' ')
    const scores = map.get(`${language}${position}${career}${food}`)

    if (!scores) {
      return 0
    }

    let left = 0
    let right = scores.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (scores[mid] < score) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return scores.length - left
  })
}
