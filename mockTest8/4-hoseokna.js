// 프로그래머스 / 모의테스트8-4 / 카드 짝 맞추기
// https://school.programmers.co.kr/learn/courses/30/lessons/72415
// fail: 1시간

function solution(board, r, c) {
  const SIZE = 4
  const dy = [1, -1, 0, 0]
  const dx = [0, 0, -1, 1]
  const cardMap = new Map()
  let min = Infinity

  const getPermutaions = (array, number) => {
    const result = []

    if (number === 1) {
      return array.map((v) => [v])
    }

    array.forEach((fixed, index) => {
      const rest = [...array.slice(0, index), ...array.slice(index + 1)]
      const restPermutaions = getPermutaions(rest, number - 1)
      const combined = restPermutaions.map((v) => [fixed, ...v])

      result.push(...combined)
    })

    return result
  }

  const copyBoard = (board) => board.map((columns) => [...columns])

  const isPossiblePoint = (y, x) => y >= 0 && y < SIZE && x >= 0 && x < SIZE

  const ctrlMove = ({ y, x, direct, board }) => {
    let nextY = y + dy[direct]
    let nextX = x + dx[direct]

    while (isPossiblePoint(nextY, nextX)) {
      if (board[nextY][nextX] !== 0) {
        return { y: nextY, x: nextX }
      }

      nextY += dy[direct]
      nextX += dx[direct]
    }

    return { y: nextY - dy[direct], x: nextX - dx[direct] }
  }

  const bfs = ({ start, target, board, count }) => {
    const visited = Array.from(Array(SIZE), () => Array(SIZE).fill(false))
    const q = [{ from: start, count }]

    while (q.length > 0) {
      const {
        from: { y, x },
        count,
      } = q.shift()

      if (y === target.y && x === target.x) {
        board[y][x] = 0

        return { position: target, count: count + 1 }
      }

      for (let i = 0; i < dy.length; i++) {
        const nextY = y + dy[i]
        const nextX = x + dx[i]

        if (!isPossiblePoint(nextY, nextX)) {
          continue
        }

        if (visited[nextY][nextX]) {
          continue
        }

        visited[nextY][nextX] = true
        q.push({ from: { y: nextY, x: nextX }, count: count + 1 })
      }

      for (let i = 0; i < dy.length; i++) {
        const { y: nextY, x: nextX } = ctrlMove({ y, x, direct: i, board })

        if (visited[nextY][nextX]) {
          continue
        }

        visited[nextY][nextX] = true
        q.push({ from: { y: nextY, x: nextX }, count: count + 1 })
      }
    }

    return { position: start, count: Infinity }
  }

  const dfs = ({ start, cardMap, cardNumbers, depth, count, board }) => {
    if (depth === cardNumbers.length) {
      if (count < min) {
        min = count
      }

      return
    }

    const [firstCard, secondCard] = cardMap.get(cardNumbers[depth])
    const normalBoard = copyBoard(board)
    let normal = bfs({ start, target: firstCard, board: normalBoard, count })

    normal = bfs({
      start: normal.position,
      target: secondCard,
      board: normalBoard,
      count: normal.count,
    })

    dfs({
      start: normal.position,
      cardMap,
      cardNumbers,
      depth: depth + 1,
      count: normal.count,
      board: copyBoard(normalBoard),
    })

    const reverseBoard = copyBoard(board)
    let reverse = bfs({ start, target: secondCard, board: reverseBoard, count })

    reverse = bfs({
      start: reverse.position,
      target: firstCard,
      board: reverseBoard,
      count: reverse.count,
    })

    dfs({
      start: reverse.position,
      cardMap,
      cardNumbers,
      depth: depth + 1,
      count: reverse.count,
      board: copyBoard(reverseBoard),
    })
  }

  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const cardNumber = board[y][x]

      if (cardNumber === 0) {
        continue
      }

      const position = { y, x }

      !cardMap.has(cardNumber)
        ? cardMap.set(cardNumber, [position])
        : cardMap.get(cardNumber).push(position)
    }
  }

  const cardNumbers = [...cardMap].map(([cardNumber, _]) => cardNumber)
  const combinations = getPermutaions(cardNumbers, cardNumbers.length)

  combinations.forEach((currentCardNumbers) => {
    dfs({
      start: { y: r, x: c },
      cardMap,
      cardNumbers: currentCardNumbers,
      depth: 0,
      count: 0,
      board,
    })
  })

  return min
}
