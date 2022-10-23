// 프로그래머스 / 67257 / 수식 최화 (Lv2 2020 카카오 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/67257
// solve: 1시간

function solution(expression) {
  let answer = Number.MIN_SAFE_INTEGER;
  const operand = ["+", "-", "*"];
  const splittedExpression = []; // 숫자와 연산자 분리된 배열

  // 숫자와 연산자 분리된 배열 만들기
  const makeSplittedExpression = () => {
    let num = "";
    for (let index = 0; index < expression.length; index++) {
      const target = expression[index];
      if (target === "+" || target === "-" || target === "*") {
        splittedExpression.push(parseInt(num));
        num = "";
        splittedExpression.push(target);
      } else {
        num = num + target;
      }
    }
    splittedExpression.push(parseInt(num));
  };

  // 두 숫자를 연산하기
  const calculate = (num1, command, num2) => {
    switch (command) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
    }
  };

  // 우선순위가 정해진 수식을 계산하기
  const getResult = (f, s, t) => {
    const arr = [...splittedExpression];

    for (const command of [f, s, t]) {
      while (arr.includes(command)) {
        const index = arr.indexOf(command);
        const left = arr[index - 1];
        const right = arr[index + 1];

        const calculatedValue = calculate(left, command, right);

        arr.splice(index - 1, 3, calculatedValue);
      }
    }

    if (answer < Math.abs(arr[0])) {
      answer = Math.abs(arr[0]);
    }
  };

  makeSplittedExpression();

  for (let first = 0; first < 3; first++) {
    for (let second = 0; second < 3; second++) {
      for (let third = 0; third < 3; third++) {
        if (first !== second && second !== third && third !== first) {
          getResult(operand[first], operand[second], operand[third]);
        }
      }
    }
  }

  return answer;
}
