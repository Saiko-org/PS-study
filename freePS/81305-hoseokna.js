/**
 * 프로그래머스 / 81305 / 시험장 나누기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81305
 * add: https://ltk3934.tistory.com/184
 *
 * js에서는 효율성에서 런타임 에러(스택 초과).
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

  const rootId = trees.findIndex(({ parent }) => parent === -1)

  let groupCount = 1

  const dfs = (id, max) => {
    const left = trees[id].left
    const leftSum = left !== -1 ? dfs(left, max) : 0
    const right = trees[id].right
    const rightSum = right !== -1 ? dfs(right, max) : 0

    if (num[id] + leftSum + rightSum <= max) {
      return num[id] + leftSum + rightSum
    }

    if (num[id] + Math.min(leftSum, rightSum) <= max) {
      groupCount += 1

      return num[id] + Math.min(leftSum, rightSum)
    }

    groupCount += 2

    return num[id]
  }

  const MAX = Math.max(...num)
  let left = MAX
  let right = MAX * N

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    groupCount = 1
    dfs(rootId, mid)

    if (groupCount <= k) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
