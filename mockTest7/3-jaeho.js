// 프로그래머스 / 77885 / 2개 이하로 다른 비트
// https://school.programmers.co.kr/learn/courses/30/lessons/77885
// solve: 50분

const getNextBit = (xbit) => {
  const reversedXBitArray = xbit.split('').reverse();
  reversedXBitArray.push('0'); // 맨 앞자리에 0을 추가

  // (뒤집히기 전 2진수로 생각했을 때)
  // 1의 자리 숫자가 0이면 해당 숫자면 1로 바꾸면 완성
  if (reversedXBitArray[0] === '0') {
      reversedXBitArray[0] = '1';
      return reversedXBitArray.reverse().join('');
  }

  // (뒤집히기 전 2진수로 생각했을 때)
  // 2의 자리 숫자부터 확인한다
  // 0이 나오면 [해당 자리 숫자 1로 바꾸기 + 이전 자리 숫자 0으로 바꾸기]
  for (let index = 1; index < reversedXBitArray.length; index++) {
      if (reversedXBitArray[index] === '0') {
          reversedXBitArray[index - 1] = '0';
          reversedXBitArray[index] = '1';
          break;
      }
  }

  return reversedXBitArray.reverse().join('');
}

function solution(numbers) {
  const answer = [];

  for (const num of numbers) {
      const xBit = num.toString(2);
      const nextBit = getNextBit(xBit);
      answer.push(parseInt(nextBit, 2));
  }

  return answer;
}
