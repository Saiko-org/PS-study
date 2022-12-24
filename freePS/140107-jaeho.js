// 프로그래머스 / 140107 / 점 찍기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/140107
// solve: 30분

function solution(k, d) {
  const getY = (x) => {
    return Math.floor(
      Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2))) / k
    );
  };

  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    answer += getY(x) + 1;
  }

  return answer;
}
