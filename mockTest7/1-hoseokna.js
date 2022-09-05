// 프로그래머스 / 모의테스트7-1
// solve: 2분

function solution(arr) {
  const answer = []
  let prevNumber = null

  arr.forEach((number) => {
    if (number !== prevNumber) {
      answer.push(number)
    }

    prevNumber = number
  })

  return answer
}
