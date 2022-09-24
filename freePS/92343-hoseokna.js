/**
 * 프로그래머스 / 92343 / 양과 늑대
 * https://school.programmers.co.kr/learn/courses/30/lessons/92343
 * solve: 37분
 */

function solution(info, edges) {
  const SIZE = info.length
  const TYPE = Object.freeze({
    SHEEP: 0,
    WOLF: 1,
  })
  const adj = Array.from(new Array(SIZE), () => [])
  let maxSheepCount = 0

  edges.forEach(([from, to]) => adj[from].push(to))

  const dfs = ({ current, sheepCount, wolfCount, nextList }) => {
    const type = info[current]
    const nextSheepCount = sheepCount + (type === TYPE.SHEEP ? 1 : 0)
    const nextWolfCount = wolfCount + (type === TYPE.WOLF ? 1 : 0)

    if (nextSheepCount <= nextWolfCount) {
      return
    }

    if (nextSheepCount > maxSheepCount) {
      maxSheepCount = nextSheepCount
    }

    nextList.forEach((next) => {
      dfs({
        current: next,
        sheepCount: nextSheepCount,
        wolfCount: nextWolfCount,
        nextList: [...nextList.filter((v) => v !== next), ...adj[next]],
      })
    })
  }

  const start = 0

  dfs({ current: start, sheepCount: 0, wolfCount: 0, nextList: adj[start] })

  return maxSheepCount
}
