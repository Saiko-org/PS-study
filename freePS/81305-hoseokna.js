/**
 * 프로그래머스 / 81305 / 시험장 나누기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81305
 * fail: 1시간
 */

const getCombination = (array, number) => {
  const result = []

  if (number === 1) {
    return array.map((v) => [v])
  }

  array.forEach((fixed, index) => {
    const rest = array.slice(fixed)
    const restCombination = getCombination(rest, number - 1)
    const combined = restCombination.map((v) => [fixed, ...v])

    result.push(...combined)
  })

  return result
}

function solution(k, num, links) {
  const N = num.length

  if (k === 1) {
    return num.reduce((acc, cur) => (acc += cur))
  }

  if (k === N) {
    return Math.max(...num)
  }

  const graph = Array.from(new Array(N), () => [])
  const lines = []

  links.forEach(([left, right], index) => {
    if (left !== -1) {
      graph[index].push(left)
      graph[left].push(index)
      lines.push([index, left])
    }

    if (right !== -1) {
      graph[index].push(right)
      graph[right].push(index)
      lines.push([index, right])
    }
  })

  const indexList = Array.from(new Array(N), (_, index) => index + 1)
  console.log(indexList)

  let min = Infinity
  const combinations = getCombination(indexList, k - 1)

  console.log(combinations)
}
