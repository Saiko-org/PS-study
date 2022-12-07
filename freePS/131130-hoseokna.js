/**
 * 프로그래머스 / 131130 / 혼자 놀기의 달인
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 * solve: 16분
 */

function solution(cards) {
  const SIZE = cards.length
  const ONLY_ONE_GROUP_SCORE = 0
  const groups = []
  const visited = new Array(SIZE).fill(false)

  const dfs = (current, group) => {
    visited[current] = true
    group.push(current)

    const next = cards[current - 1]

    if (visited[next]) {
      groups.push(group)

      return
    }

    dfs(next, group)
  }

  cards.forEach((current) => {
    if (visited[current]) {
      return
    }

    dfs(current, [])
  })

  if (groups.length === 1) {
    return ONLY_ONE_GROUP_SCORE
  }

  const [first, second] = groups
    .map((group) => group.length)
    .sort((a, b) => b - a)

  return first * second
}
