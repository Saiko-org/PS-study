// 프로그래머스 / 76502 / 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// solve: 35분

const isRightBracket = (arr) => {
  const stack = [];

  arr.forEach((bracket) => {
    if (stack.length === 0) {
      stack.push(bracket);
    } else if (bracket === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (bracket === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (bracket === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  });

  return stack.length ? false : true;
};

function solution(s) {
  let rotateCount = s.length;
  let sArr = s.split('');

  let isRightBracketCount = 0;

  while (rotateCount--) {
    sArr.push(sArr.shift());

    if (isRightBracket(sArr)) {
      isRightBracketCount += 1;
    }
  }

  return isRightBracketCount;
}

console.log(solution('[](){}'));
