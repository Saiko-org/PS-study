// 프로그래머스 / 77885 / 2개 이하로 다른 비트
// https://school.programmers.co.kr/learn/courses/30/lessons/77885
// solve: 스터디 시작 전에 풀어 시간 X

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1;
    } else {
      let binaryStr = ('0' + number.toString(2)).split('');
      for (let i = binaryStr.length; i >= 0; i--) {
        if (binaryStr[i] !== '0') continue;

        binaryStr[i] = '1';
        binaryStr[i + 1] = '0';

        return parseInt(binaryStr.join(''), 2);
      }
    }
  });
}

console.log(solution([2, 7], [3, 11]));
