function solution(food_times, k) {
  if (k < food_times.length) {
    return k
  }

  const sum = food_times.reduce((acc, cur) => acc + cur)

  if (sum <= k) {
    return -1
  }

  food_times = food_times.map((time, index) => ({ time, id: index + 1 }))

  while (true) {
    let min = Infinity

    food_times.forEach(({ time }) => (min = Math.min(min, time)))

    if (food_times.length * min < k) {
      k -= min * food_times.length
      food_times = food_times
        .map(({ time, id }) => ({
          time: (time -= min),
          id,
        }))
        .filter(({ time }) => time !== 0)

      continue
    }

    food_times.forEach((time) => (time -= min))
  }
}
