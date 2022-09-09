// 프로그래머스 / 모의테스트9-1 / 핸드폰 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// solve: 3분

function solution(phone_number) {
  const REAL_NUMBER_LENGTH = 4
  const MIN_INDEX = phone_number.length - REAL_NUMBER_LENGTH

  return phone_number
    .split('')
    .map((number, index) => (index < MIN_INDEX ? '*' : number))
    .join('')
}
