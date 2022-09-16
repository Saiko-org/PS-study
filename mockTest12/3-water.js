// 프로그래머스 / 70129 / 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// solve: 10분

function solution(s) {
  let countOfBinaryChange = 0;
  let removedZeroCount = 0;

  const applyConditionA = (s) => {
    let appliedConditionA = s.split('').filter((x) => x === '1');
    removedZeroCount += s.length - appliedConditionA.length;

    return appliedConditionA;
  };

  const applyConditionB = (len) => {
    countOfBinaryChange += 1;
    return len.toString(2);
  };

  while (s !== '1') {
    s = applyConditionB(applyConditionA(s).length);
  }

  return [countOfBinaryChange, removedZeroCount];
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
