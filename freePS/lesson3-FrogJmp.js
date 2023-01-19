// Codility / lesson3 / FrogJmp
// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// solve: 10분

// 총 거리 = Y - X
// (총 거리 / D) 의 몫 + 1
// 주의점 : 나머지가 없는 경우 +1을 하지 않는다.

function solution(X, Y, D) {
  const timesFloat = (Y - X) / D;
  const timesInt = Math.floor((Y - X) / D);

  if (timesFloat === timesInt) {
    return timesInt;
  }

  return timesInt + 1;
}
