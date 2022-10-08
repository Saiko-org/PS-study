/**
 * 프로그래머스 / 131129 / 카운트 다운
 * https://school.programmers.co.kr/learn/courses/30/lessons/131129
 * fail: 1시간
 */

function solution(target) {
  const MAX_SCORE = 20
  const BOOL_SCORE = 50
  let scores = Array.from(new Array(20), (_, index) => MAX_SCORE - index)
  const q = [{ sum: 0, singleCount: 0, boolCount: 0, totalCount: 0 }]

  while (q.length > 0) {
    const { sum, singleCount, boolCount, totalCount } = q.shift()

    if (sum === target) {
      return [totalCount, singleCount + boolCount]
    }

    scores.forEach((score) => {
      const nextTotalCount = totalCount + 1

      if (sum + 2 * score === target) {
        q.unshift({
          sum: sum + 2 * score,
          singleCount,
          boolCount,
          totalCount: nextTotalCount,
        })
      }

      if (sum + 3 * score === target) {
        q.unshift({
          sum: sum + 3 * score,
          singleCount,
          boolCount,
          totalCount: nextTotalCount,
        })
      }

      if (sum + score === target) {
        q.unshift({
          sum: sum + score,
          singleCount: singleCount + 1,
          boolCount,
          totalCount: nextTotalCount,
        })
      }

      if (sum + BOOL_SCORE === target) {
        q.unshift({
          sum: sum + BOOL_SCORE,
          singleCount,
          boolCount: boolCount + 1,
          totalCount: nextTotalCount,
        })
      }

      if (sum + BOOL_SCORE < target) {
        q.push({
          sum: sum + BOOL_SCORE,
          singleCount,
          boolCount: boolCount + 1,
          totalCount: nextTotalCount,
        })
      }

      if (sum + score < target) {
        q.push({
          sum: sum + score,
          singleCount: singleCount + 1,
          boolCount,
          totalCount: nextTotalCount,
        })
      }

      if (sum + 3 * score < target) {
        q.push({
          sum: sum + 3 * score,
          singleCount,
          boolCount,
          totalCount: nextTotalCount,
        })
      }

      if (sum + 2 * score < target) {
        q.push({
          sum: sum + 2 * score,
          singleCount,
          boolCount,
          totalCount: nextTotalCount,
        })
      }
    })
  }
}
