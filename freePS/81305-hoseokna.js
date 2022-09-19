/**
 * 프로그래머스 / 81305 / 시험장 나누기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81305
 * add: https://ltk3934.tistory.com/184
 *
 * js에서는 효율성에서 런타임 에러(스택 초과).
 * dfs 반복문으로 수정(https://degurii.tistory.com/231)
 */

function Tree(id) {
  this.id = id
  this.parent = -1
  this.left = -1
  this.right = -1
}

function solution(k, num, links) {
  const N = num.length
  const trees = Array.from(new Array(N), (_, index) => new Tree(index))

  links.forEach(([left, right], index) => {
    trees[index].left = left
    trees[index].right = right

    if (left !== -1) {
      trees[left].parent = index
    }

    if (right !== -1) {
      trees[right].parent = index
    }
  })

  const dfs = (rootId, max) => {
    const stack = [trees[rootId]]
    const result = new Map()

    result.set(-1, { sum: 0, groupCount: 0 })

    while (stack.length > 0) {
      const { id, left, right } = stack[stack.length - 1]

      if (!result.has(left)) {
        stack.push(trees[left])

        continue
      }

      if (!result.has(right)) {
        stack.push(trees[right])

        continue
      }

      stack.pop()

      const currentResult = {
        sum: num[id],
        groupCount: result.get(left).groupCount + result.get(right).groupCount,
      }
      const leftSum = result.get(left).sum
      const rightSum = result.get(right).sum

      result.set(id, currentResult)

      if (num[id] + leftSum + rightSum <= max) {
        currentResult.sum += leftSum + rightSum

        continue
      }

      if (num[id] + Math.min(leftSum, rightSum) <= max) {
        currentResult.sum += Math.min(leftSum, rightSum)
        currentResult.groupCount += 1

        continue
      }

      currentResult.groupCount += 2
    }

    return result.get(rootId).groupCount + 1
  }

  const rootId = trees.findIndex(({ parent }) => parent === -1)
  const MAX = Math.max(...num)
  let left = MAX
  let right = MAX * N

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (dfs(rootId, mid) <= k) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
