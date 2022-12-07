/**
 * 프로그래머스 / 42894/ 블록 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/42894
 * add: 위의 막혀 있는 벽돌 체크하는 조건을 비어있는 공간일 때만 체크하도록 수정 (emptyPoints)
 */

function solution(board) {
  const SIZE = board.length
  const visisted = Array.from(new Array(SIZE), () =>
    new Array(SIZE).fill(false)
  )
  const map = new Map()
  let count = 0

  const createBlocks = (y, x) => {
    const dy = [1, -1, 0, 0]
    const dx = [0, 0, -1, 1]
    const q = [{ y, x }]
    const type = board[y][x]

    visisted[y][x] = true

    if (!map.has(type)) {
      map.set(type, [])
    }

    map.get(type).push({ y, x })

    while (q.length > 0) {
      const { y, x } = q.shift()

      for (let i = 0; i < 4; i++) {
        const nextY = y + dy[i]
        const nextX = x + dx[i]

        if (nextY < 0 || nextY >= SIZE || nextX < 0 || nextX >= SIZE) {
          continue
        }

        if (visisted[nextY][nextX]) {
          continue
        }

        if (board[nextY][nextX] === 0) {
          continue
        }

        visisted[nextY][nextX] = true
        q.push({ y: nextY, x: nextX })

        const key = board[nextY][nextX]

        if (!map.has(key)) {
          map.set(key, [])
        }

        map.get(key).push({ y: nextY, x: nextX })
      }
    }
  }

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (visisted[y][x]) {
        continue
      }

      if (board[y][x] === 0) {
        continue
      }

      createBlocks(y, x)
    }
  }

  map.forEach((value) =>
    value.sort((a, b) => {
      if (a.y !== b.y) {
        return a.y - b.y
      }

      return a.x - b.x
    })
  )

  let isDeleted = false

  while (true) {
    isDeleted = false
    Array.from(map).forEach(([key, values], index) => {
      let minX = Infinity
      let maxX = -1
      let minY = Infinity
      let maxY = -1

      values.forEach(({ y, x }) => {
        minY = Math.min(minY, y)
        minX = Math.min(minX, x)
        maxY = Math.max(maxY, y)
        maxX = Math.max(maxX, x)
      })

      const type = parseInt(key, 10)
      const emptyPoints = []

      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          if (board[y][x] === 0 && y === maxY) {
            return
          }

          if (board[y][x] !== 0 && board[y][x] !== type) {
            return
          }

          if (board[y][x] === 0) {
            emptyPoints.push({ y, x })
          }
        }
      }

      for (let y = 0; y < minY; y++) {
        for (let x = minX; x <= maxX; x++) {
          if (
            board[y][x] !== 0 &&
            !emptyPoints.every(({ x: _x }) => x !== _x)
          ) {
            return
          }
        }
      }

      values.forEach(({ y, x }) => {
        board[y][x] = 0
      })

      count++
      isDeleted = true
    })

    if (!isDeleted) {
      break
    }
  }

  return count
}
