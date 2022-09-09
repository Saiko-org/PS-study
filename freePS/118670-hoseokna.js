// 프로그래머스 / 118670 / 행렬과 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/118670
// fail: 1시간

function solution(rc, operations) {
  const COMMAND = Object.freeze({
    SHIFT_ROW: 'ShiftRow',
    ROTATE: 'Rotate',
  })
  const Y_LENGTH = rc.length
  const X_LENGTH = rc[0].length

  const getShiftRow = (rc) => {
    const nextRC = Array.from(new Array(Y_LENGTH), () =>
      new Array(X_LENGTH).fill(0)
    )

    for (let y = 0; y < Y_LENGTH; y++) {
      for (let x = 0; x < X_LENGTH; x++) {
        y !== Y_LENGTH - 1
          ? (nextRC[y + 1][x] = rc[y][x])
          : (nextRC[0][x] = rc[y][x])
      }
    }

    return nextRC
  }

  const getRotated = (rc) => {
    const nextRC = rc.map((columns) => [...columns])

    for (let x = 0; x < X_LENGTH - 1; x++) {
      nextRC[0][x + 1] = rc[0][x]
    }

    for (let y = 0; y < Y_LENGTH - 1; y++) {
      nextRC[y + 1][X_LENGTH - 1] = rc[y][X_LENGTH - 1]
    }

    for (let x = X_LENGTH - 1; x > 0; x--) {
      nextRC[Y_LENGTH - 1][x - 1] = rc[Y_LENGTH - 1][x]
    }

    for (let y = Y_LENGTH - 1; y > 0; y--) {
      nextRC[y - 1][0] = rc[y][0]
    }

    return nextRC
  }

  operations.forEach((operation) => {
    if (operation === COMMAND.SHIFT_ROW) {
      rc = getShiftRow(rc)

      return
    }

    rc = getRotated(rc)
  })

  return rc
}
