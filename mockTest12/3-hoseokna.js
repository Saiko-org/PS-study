// 프로그래머스 / 모의테스트12-3 / 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// solve: 6분

function solution(s) {
  let countConvert = 0
  let countDeletedZero = 0

  while (s !== '1') {
    s = s
      .split('')
      .filter((c) => {
        if (c !== '0') {
          return true
        }

        countDeletedZero++
        return false
      })
      .join('')

    s = s.length.toString(2)
    countConvert++
  }

  return [countConvert, countDeletedZero]
}
