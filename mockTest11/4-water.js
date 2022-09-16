// 프로그래머스 / 43164 / 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// solve: 55분

function solution(tickets) {
  const airports = new Map();
  for (const [start, destination] of tickets) {
    if (!airports.has(start)) {
      airports.set(start, [destination]);
    } else {
      airports.get(start).push(destination);
    }
  }

  for (const [start, destination] of airports.entries()) {
    destination.sort().reverse();
  }

  const travelRoutes = [];
  const stack = ['ICN'];
  while (stack.length) {
    const city = stack[stack.length - 1];

    if (!airports.has(city) || airports.get(city).length === 0) {
      travelRoutes.push(stack.pop());
    } else {
      stack.push(airports.get(city).pop());
    }
  }
  return travelRoutes.reverse();
}

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
);
