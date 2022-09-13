// 프로그래머스 / 76502 / 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// solve: 12분

const isCorrectString = (str) => {
  const stack = [];
  const strArray = str.split("");

  for (const strElement of strArray) {
    if (strElement === "[" || strElement === "{" || strElement === "(") {
      stack.push(strElement);
    } else if (strElement === "]") {
      const lastStackElement = stack.pop();
      if (lastStackElement !== "[") {
        return false;
      }
    } else if (strElement === "}") {
      const lastStackElement = stack.pop();
      if (lastStackElement !== "{") {
        return false;
      }
    } else if (strElement === ")") {
      const lastStackElement = stack.pop();
      if (lastStackElement !== "(") {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

function solution(s) {
  let answer = 0;

  const len = s.length;

  for (let move = 0; move < len; move++) {
    const movedString = s.slice(len - move) + s.slice(0, len - move);

    if (isCorrectString(movedString)) {
      answer += 1;
    }
  }

  return answer;
}
