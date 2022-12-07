// 프로그래머스 / 모의테스트 10-3 / 메뉴 리뉴얼
// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// solve: 30분

function solution(orders, course) {
  const getCombinations = (array, number) => {
    const result = []

    if (number === 1) {
      return array.map((v) => [v])
    }

    array.forEach((fixed, index) => {
      const rest = array.slice(index + 1)
      const restCombinations = getCombinations(rest, number - 1)
      const combined = restCombinations.map((v) => [fixed, ...v])

      result.push(...combined)
    })

    return result
  }

  const map = new Map()

  orders.forEach((order) => {
    const sortedOrder = order.split('').sort()

    for (let i = 2; i <= sortedOrder.length; i++) {
      getCombinations(sortedOrder, i).forEach((combination) => {
        const key = combination.join('')

        map.set(key, map.get(key) + 1 || 1)
      })
    }
  })

  let max = -1
  let prevLength = -1

  return Array.from(map)
    .sort((a, b) => {
      if (a[0].length !== b[0].length) {
        return a[0].length - b[0].length
      }

      return b[1] - a[1]
    })
    .filter(([key, value]) => {
      if (!course.includes(key.length)) {
        return false
      }

      if (prevLength !== key.length && value >= 2) {
        prevLength = key.length
        max = value

        return true
      }

      if (value === max) {
        return true
      }
    })
    .map(([key]) => key)
    .sort()
}
