// 프로그래머스 / 154539 / 뒤에 있는 큰 수 찾기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// solve: 30분

// 1. result, stack 따로 만들고, 앞에서부터 순회
// 2. 현재 값이랑 stack의 top값이랑 비교 (while문)
// 2-1. 현재 값이 큰 경우, stack의 top값의 index에 현재값 저장
// 2-2. stack의 top값이 큰 경우, break
// 3. 현재 값 stack에 저장

function solution(numbers) {
  const N = numbers.length;
  const result = Array.from({ length: N }, () => -1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length !== 0) {
      const top = stack[stack.length - 1];
      if (top[0] >= numbers[i]) {
        break;
      }
      result[top[1]] = numbers[i];
      stack.pop();
    }
    stack.push([numbers[i], i]);
  }

  return result;
}
