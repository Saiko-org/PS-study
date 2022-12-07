// 프로그래머스 / 60058 / 괄호변환 (Lv2 2020 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/60058
// solve: 30분

function solution(p) {
  const getIndex = (str) => {
    if (str === "") {
      return 0;
    }

    let index = 0;
    let countOfLeft = 0;
    let countOfRight = 0;
    while (index < str.length) {
      for (let weight = 0; weight < 2; weight++) {
        if (str[index + weight] === "(") {
          countOfLeft += 1;
        } else if (str[index + weight] === ")") {
          countOfRight += 1;
        }
      }

      if (countOfLeft === countOfRight) {
        break;
      } else {
        index += 2;
      }
    }
    return index + 2;
  };

  const isCorrectString = (str) => {
    const stack = [];

    for (let index = 0; index < str.length; index++) {
      const value = str[index];
      if (value === "(") {
        stack.push(value);
      }
      if (value === ")") {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }

    if (stack.length === 0) {
      return true;
    }
    return false;
  };

  const getReflect = (str) => {
    let value = "";

    for (let index = 0; index < str.length; index++) {
      if (str[index] === "(") {
        value += ")";
      } else {
        value += "(";
      }
    }

    return value;
  };

  const logic = (str) => {
    if (str === "") {
      return "";
    }

    const sliceIndex = getIndex(str);
    const str_u = str.slice(0, sliceIndex);
    const str_v = str.slice(sliceIndex);
    if (isCorrectString(str_u)) {
      return str_u + logic(str_v);
    } else {
      const front = logic(str_v);
      const back = getReflect(str_u.slice(1, str_u.length - 1));
      return "(" + front + ")" + back;
    }
  };

  return logic(p);
}
