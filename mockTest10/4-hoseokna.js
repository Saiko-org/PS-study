// solve: 34분

function solution(n, s, a, b, fares) {
  const adj = Array.from(new Array(n + 1), () => [])

  fares.forEach(([from, to, cost]) => {
    adj[from].push({ to, cost })
    adj[to].push({ to: from, cost })
  })

  const setDistances = (start, distances) => {
    const q = [{ current: start }]

    distances[start] = 0

    while (q.length > 0) {
      const { current } = q.shift()

      adj[current].forEach(({ to, cost }) => {
        if (distances[to] > distances[current] + cost) {
          distances[to] = distances[current] + cost
          q.push({ current: to })
        }
      })
    }
  }

  const distances = new Array(n + 1).fill(Infinity)

  setDistances(s, distances)
  let min = distances[a] + distances[b]

  for (let i = 1; i <= n; i++) {
    if (i === s) {
      continue
    }

    const _distances = new Array(n + 1).fill(Infinity)

    setDistances(i, _distances)
    min = Math.min(min, distances[i] + _distances[a] + _distances[b])
  }

  return min
}
