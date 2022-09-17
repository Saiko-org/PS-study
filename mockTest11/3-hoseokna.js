// 프로그래머스 / 모의테스트11-3 / 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// solve: 13분

function solution(s) {
  const openTag = ['[', '(', '{']
  const closeTag = [']', ')', '}']
  let count = 0

  const isRightBracket = (brackets, stack) =>
    brackets.every((c) => {
      if (openTag.includes(c)) {
        stack.push(closeTag[openTag.indexOf(c)])

        return true
      }

      if (stack.length === 0) {
        return false
      }

      if (c !== stack.pop()) {
        return false
      }

      return true
    }) && stack.length === 0

  for (let i = 0; i < s.length; i++) {
    const stack = []
    const nextS = s.slice(i) + s.slice(0, i)

    if (isRightBracket(nextS.split(''), stack)) {
      count++
    }
  }

  return count
}
