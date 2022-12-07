// 프로그래머스 / 42891 / 무지의 먹방 라이브
// https://school.programmers.co.kr/learn/courses/30/lessons/42891?language=javascript
// add: 참고 https://velog.io/@hadam/JS-Q06-%EB%AC%B4%EC%A7%80%EC%9D%98-%EB%A8%B9%EB%B0%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C

function solution(food_times, k) {
  const FAIL = -1
  const SIZE = food_times.length
  const foods = food_times
    .map((time, index) => ({ time, id: index + 1 }))
    .sort((a, b) => a.time - b.time)

  let prevTime = 0

  for (let i = 0; i < SIZE; i++) {
    const currentTime = foods[i].time
    const remainCount = SIZE - i
    const eatTime = (currentTime - prevTime) * remainCount

    if (eatTime > k) {
      const remainFoods = foods.slice(i).sort((a, b) => a.id - b.id)

      return remainFoods[k % remainCount].id
    }

    prevTime = currentTime
    k -= eatTime
  }

  return FAIL
}
