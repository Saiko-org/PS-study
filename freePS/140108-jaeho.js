// 프로그래머스 / 140108 / 문자열 나누기 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/140108
// solve: 10분

function solution(s) {
  const answer = [];
  let index = 0;
  while (index < s.length) {
    const x = s[index];
    let weight = 0;
    let same = 0;
    let notSame = 0;
    while (index + weight < s.length) {
      const value = s[index + weight];
      if (x === value) {
        same += 1;
      }
      if (x !== value) {
        notSame += 1;
      }
      if (same === notSame) {
        break;
      }
      weight += 1;
    }
    answer.push(s.slice(index, index + weight + 1));
    index = index + weight + 1;
  }

  return answer.length;
}
