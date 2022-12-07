// 프로그래머스 / 133501 / 야간 전술보행 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133501
// solve: 40분
// scope 순회만으로 해결하다가 그냥 전체 시간 순회해서 solve

function solution(distance, scope, times) {
  scope.forEach((value) => value.sort((a, b) => a - b));

  for (let clock = 1; clock <= distance; clock++) {
    for (let index = 0; index < scope.length; index++) {
      if (scope[index][0] <= clock && clock <= scope[index][1]) {
        if (
          (clock - 1) % (times[index][0] + times[index][1]) <
          times[index][0]
        ) {
          return clock;
        }
      }
    }
  }

  return distance;
}
