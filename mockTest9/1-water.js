// 프로그래머스 / 12948 / 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948
//  solve: 5분

function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution('01033334444'));
