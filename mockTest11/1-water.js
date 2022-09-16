// 프로그래머스 / 모의테스트10-1 / 팰린드롬
// 2018 하반기 공채 대비 코딩테스트 실전모의고사 1회 1번 문제
// solve: 5분

function solution(n, m) {
  let answer = 0;
  for (let i = n; i <= m; i++) {
    if (parseInt(i.toString().split('').reverse().join('')) === i) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(1, 100));
console.log(solution(100, 300));
