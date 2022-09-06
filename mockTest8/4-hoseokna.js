// 프로그래머스 / 모의테스트8-4 / 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886
// fail: 1시간

function solution(board, r, c) {
  const SIZE = 4
  const dy = [1, -1, 0, 0]
  const dx = [0, 0, -1, 1]

  const copyBoard = (board) => board.map((columns) => [...columns])

  const isPossiblePoint = (y, x) => y >= 0 && y < SIZE && x >= 0 && x < SIZE

  const ctrlMove = ({ y, x, direct, board }) => {
    let visitedCard = false
    let nextY = y
    let nextX = x
    let lastY = null
    let lastX = null

    while (isPossiblePoint(nextY + dy[direct], nextX + dx[direct])) {
      nextY += dy[direct]
      nextX += dx[direct]

      if (board[nextY][nextX] !== 0) {
        visitedCard = true
        lastY = nextY
        lastX = nextX
      }
    }

    return visitedCard
      ? { y: lastY, x: lastX }
      : { y: nextY - dy[direct], x: nextX - dx[direct] }
  }

  const isFinish = (board) => {
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (board[y][x] !== 0) {
          return false
        }
      }
    }

    return true
  }

  const bfs = (y, x, board) => {
    const q = [{ y, x, board, filpped: [], count: 0 }]

    while (q.length > 0) {
      const { y, x, board, filpped, count } = q.shift()

      if (isFinish(board)) {
        return count
      }

      if (filpped.length < 2) {
        const nextFlipped = [...filpped, { y, x }]
        const nextBoard = copyBoard(board)

        if (nextFlipped.length === 2) {
          if (
            nextBoard[nextFlipped[0].y][nextFlipped[0].x] ===
            nextBoard[nextFlipped[1].y][nextFlipped[1].x]
          ) {
            nextBoard[nextFlipped[0].y][nextFlipped[0].x] = 0
            nextBoard[nextFlipped[1].y][nextFlipped[1].x] = 0
          }

          nextFlipped.pop()
          nextFlipped.pop()
        }

        q.push({
          y,
          x,
          board: nextBoard,
          filpped: nextFlipped,
          count: count + 1,
        })
      }

      for (let i = 0; i < 4; i++) {
        const { nextY, nextX } = ctrlMove({ y, x, direct: i, board })

        q.push({
          y: nextY,
          x: nextX,
          board: copyBoard(board),
          filpped: [...filpped],
          count: count + 1,
        })
      }

      for (let i = 0; i < 4; i++) {
        const nextY = y + dy[i]
        const nextX = x + dx[i]

        if (!isPossiblePoint(nextY, nextX)) {
          continue
        }

        q.push({
          y: nextY,
          x: nextX,
          board: copyBoard(board),
          filpped: [...filpped],
          count: count + 1,
        })
      }
    }
  }

  return bfs(r, c, copyBoard(board))
}
