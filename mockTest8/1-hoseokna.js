// 프로그래머스 / 모의테스트8-1 / 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// solve: 13분

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  return patterns
    .map((pattern, index) => {
      const solveCount = answers.filter(
        (currentProblem, problemNumber) =>
          currentProblem === pattern[problemNumber % pattern.length]
      ).length

      return { id: index + 1, solveCount }
    })
    .sort((a, b) => {
      if (a.solveCount !== b.solveCount) {
        return b.solveCount - a.solveCount
      }

      return a - b
    })
    .filter(({ solveCount }, _, result) => solveCount === result[0].solveCount)
    .map(({ id }) => id)
}
