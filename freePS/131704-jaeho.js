// 프로그래머스 / 131704 / 택배상자 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/131704
// solve: 25분

function solution(order) {
  const answer = []; // 트럭
  const stack = []; // 보조 컨베이어 벨트
  const ORDER_LEN = order.length; // 최대 상자 수
  let containerBoxNumber = 1; // 기존 컨베이어 벨트

  // 보조 컨베이어 벨트 -> 트럭
  const pushBoxFromStack = () => {
    const box = stack.pop();
    answer.push(box);
  };

  // 기존 컨베이어 벨트 -> 트럭
  const pushBoxFromContainer = () => {
    answer.push(containerBoxNumber);
    containerBoxNumber += 1;
  };

  // 기존 컨베이어 벨트 -> 보조 컨베이어 벨트
  const containerToStack = () => {
    stack.push(containerBoxNumber);
    containerBoxNumber += 1;
  };

  // 박스 숫자가 유효범위에 있는 경우
  const validateBoxNumber = () => {
    return containerBoxNumber <= ORDER_LEN;
  };

  // 보조 컨베이어 벨트 마지막 상자 === order 배열 상자
  const isSameAsStackLastBox = (num) => {
    return stack.length && stack[stack.length - 1] === num;
  };

  // 기존 컨베이어 벨트 맨 앞 상자 === order 배열 상자
  const isSameAsContainerFrontBox = (num) => {
    return containerBoxNumber === num;
  };

  for (let index = 0; index < ORDER_LEN; ) {
    const orderBoxNumber = order[index];
    if (isSameAsStackLastBox(orderBoxNumber)) {
      pushBoxFromStack();
      index += 1;
    } else if (isSameAsContainerFrontBox(orderBoxNumber)) {
      pushBoxFromContainer();
      index += 1;
    } else {
      if (!validateBoxNumber()) {
        break;
      }

      while (
        validateBoxNumber() &&
        !isSameAsContainerFrontBox(orderBoxNumber)
      ) {
        containerToStack();
      }
    }
  }

  return answer.length;
}
