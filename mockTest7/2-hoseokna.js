// 프로그래머스 / 모의테스트7-2
// solve: 35분

function solution(n, lost, reserve) {
  let max = -1
  const lostedInReserve = reserve.filter((id) => lost.includes(id))

  lost = lost.filter((id) => !lostedInReserve.includes(id))
  reserve = reserve.filter((id) => !lostedInReserve.includes(id))

  const dfs = (index, lost) => {
    if (index === reserve.length) {
      max = Math.max(max, n - lost.length)

      return
    }

    const id = reserve[index]

    if (lost.includes(id - 1)) {
      dfs(
        index + 1,
        lost.filter((_id) => _id !== id - 1)
      )
    }

    if (lost.includes(id + 1)) {
      dfs(
        index + 1,
        lost.filter((_id) => _id !== id + 1)
      )
    }

    dfs(index + 1, lost)
  }

  dfs(0, lost)

  return max
}
