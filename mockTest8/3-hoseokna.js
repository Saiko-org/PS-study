// 프로그래머스 / 모의테스트8-3 / 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302
// 40분

function solution(places) {
  const SIZE = 5
  const MIN = 2
  const TYPE = Object.freeze({
    PEOPLE: 'P',
    TABLE: 'O',
    PARTITION: 'X',
  })
  const RESULT = Object.freeze({
    SUCCESS: 1,
    FAIL: 0,
  })

  const getDistance = ({ y: y1, x: x1 }, { y: y2, x: x2 }) =>
    Math.abs(y1 - y2) + Math.abs(x1 - x2)

  const isPossibleDistance = (a, b, place) => {
    if (getDistance(a, b) === 1) {
      return false
    }

    const minX = Math.min(a.x, b.x)
    const maxX = Math.max(a.x, b.x)

    for (let y = a.y; y <= b.y; y++) {
      for (let x = minX; x <= maxX; x++) {
        if (place[y][x] === TYPE.TABLE) {
          return false
        }
      }
    }

    return true
  }

  return places.map((place) => {
    const points = []

    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (place[y][x] === TYPE.PEOPLE) {
          points.push({ y, x })
        }
      }
    }

    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i]

      for (let j = i + 1; j < points.length; j++) {
        const b = points[j]

        if (getDistance(a, b) > MIN) {
          continue
        }

        if (!isPossibleDistance(a, b, place)) {
          return RESULT.FAIL
        }
      }
    }

    return RESULT.SUCCESS
  })
}
