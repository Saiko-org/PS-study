/**
 * 프로그래머스 / 131129 / 카운트 다운
 * https://school.programmers.co.kr/learn/courses/30/lessons/131129
 * add
 * 참고링크
 * (https://my-first-programming.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B9%B4%EC%9A%B4%ED%8A%B8-%EB%8B%A4%EC%9A%B4-javascript)
 */

function solution(target) {
  const MAX_TARGET = 100000
  const MAX_SCORE = 20
  const BOOL_SCORE = 50
  const scores = Array.from(new Array(20), (_, index) => MAX_SCORE - index)
  const dp = Array.from(new Array(MAX_TARGET * 3), () => ({
    count: Infinity,
    sumSingleAndBool: 0,
  }))

  dp[0].count = 0

  for (let currentScore = 0; currentScore < target; currentScore++) {
    const updateDp = (addedScore, signleCount) => {
      const nextScore = currentScore + addedScore
      const nextCount = dp[currentScore].count + 1
      if (dp[nextScore].count < nextCount) {
        return
      }

      if (dp[nextScore].count === nextCount) {
        dp[nextScore].sumSingleAndBool = Math.max(
          dp[nextScore].sumSingleAndBool,
          dp[currentScore].sumSingleAndBool + signleCount
        )
      } else {
        dp[nextScore] = {
          count: nextCount,
          sumSingleAndBool: dp[currentScore].sumSingleAndBool + signleCount,
        }
      }
    }

    scores.forEach((score) => {
      ;[
        [1, 1],
        [2, 0],
        [3, 0],
      ].forEach(([v, signleCount]) => {
        updateDp(score * v, signleCount)
      })
    })

    updateDp(BOOL_SCORE, 1)
  }

  const { count, sumSingleAndBool } = dp[target]

  return [count, sumSingleAndBool]
}

solution(58)
