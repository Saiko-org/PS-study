// 프로그래머스 / 12948 / 핸드폰 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// solve: 3분

function solution(phone_number) {
  const index = phone_number.length - 4;
  return "*".repeat(index) + phone_number.slice(index);
}
