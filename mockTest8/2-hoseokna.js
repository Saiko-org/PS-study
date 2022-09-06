// 프로그래머스 / 모의테스트8-2 / 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// solve: 25분

function solution(participant, completion) {
  const map = new Map()
  let answer = null

  completion.forEach((name) => {
    map.set(name, map.get(name) + 1 || 1)
  })

  participant.some((name) => {
    if (!map.get(name)) {
      answer = name

      return true
    }

    map.set(name, map.get(name) - 1)
  })

  return answer
}
