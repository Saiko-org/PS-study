// 프로그래머스 / 모의테스트 11-4 / 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// solve: 29분

function solution(tickets) {
  const START = 'ICN'

  tickets.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] < b[1] ? -1 : 1
    }

    if (a[0] === START) {
      return -1
    }

    if (b[0] === START) {
      return 1
    }

    return a[0] < b[0] ? -1 : 1
  })

  const visited = new Array(tickets.length).fill(false)
  const q = []

  tickets.forEach(([from, to], index) => {
    if (from !== START) {
      return
    }

    const nextVisited = [...visited]

    nextVisited[index] = true
    q.push({ current: [from, to], visited: nextVisited, routes: [START] })
  })

  while (q.length > 0) {
    const {
      current: [from, to],
      routes,
      visited,
    } = q.shift()

    if (routes.length === tickets.length) {
      routes.push(to)

      return routes
    }

    tickets.forEach(([nextFrom, nextTo], index) => {
      if (visited[index]) {
        return
      }

      if (to !== nextFrom) {
        return
      }

      const nextVisited = [...visited]

      nextVisited[index] = true
      q.push({
        current: [nextFrom, nextTo],
        visited: nextVisited,
        routes: [...routes, nextFrom],
      })
    })
  }
}
