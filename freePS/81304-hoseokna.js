/**
 * 프로그래머스 / 81304 / 미로탈출
 * https://school.programmers.co.kr/learn/courses/30/lessons/81304
 * solve: 1시간
 */

function solution(n, start, end, roads, traps) {
  const TRAP_SIZE = traps.length
  const MAX_TRAP_MASKING = 1 << (TRAP_SIZE + 1)
  const adj = Array.from(new Array(n + 1), () => ({ origin: [], reverse: [] }))

  roads.forEach(([from, to, cost]) => {
    adj[from].origin.push({ next: to, cost })
    adj[to].reverse.push({ next: from, cost })
  })

  const isTrapOn = (index, masking) => {
    if (!traps.includes(index)) {
      return false
    }

    const bitOn = masking & (1 << traps.indexOf(index))

    return bitOn > 0
  }

  const isOriginalDirect = (trapOnA, trapOnB) =>
    (trapOnA && trapOnB) || (!trapOnA && !trapOnB)

  const getNextMasking = (index, masking) => {
    return traps.includes(index)
      ? masking ^ (1 << traps.indexOf(index))
      : masking
  }

  const distances = Array.from(new Array(MAX_TRAP_MASKING), () =>
    new Array(n + 1).fill(Infinity)
  )

  const q = [{ current: start, distance: 0, masking: 1 << TRAP_SIZE }]
  let min = Infinity

  while (q.length > 0) {
    const { current, distance, masking } = q.shift()

    if (current === end) {
      min = Math.min(min, distance)

      continue
    }

    if (distance >= min) {
      continue
    }

    const isTrapOnCurrent = isTrapOn(current, masking)

    adj[current].origin.forEach(({ next, cost }) => {
      const isTrapOnNext = isTrapOn(next, masking)

      if (!isOriginalDirect(isTrapOnCurrent, isTrapOnNext)) {
        return
      }

      const nextDistance = distance + cost

      if (distances[masking][next] <= nextDistance) {
        return
      }

      distances[masking][next] = nextDistance

      q.push({
        current: next,
        distance: nextDistance,
        masking: getNextMasking(next, masking),
      })
    })

    adj[current].reverse.forEach(({ next, cost }) => {
      const isTrapOnNext = isTrapOn(next, masking)

      if (isOriginalDirect(isTrapOnCurrent, isTrapOnNext)) {
        return
      }

      const nextDistance = distance + cost

      if (distances[masking][next] <= nextDistance) {
        return
      }

      distances[masking][next] = nextDistance

      q.push({
        current: next,
        distance: nextDistance,
        masking: getNextMasking(next, masking),
      })
    })
  }

  return min
}
