// Codility / lesson4 / MissingInteger
// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// solve: 15분

// 공간복잡도 O(N)
// 시간복잡도 O(N)

// 1. 1~100,000까지의 boolean배열을 만든다.
// 2. 최소값을 저장할 변수를 둔다.
// 3. A배열을 순회
// 3-1. 원소가 최소값과 같으면 (배열의 원소가 false일때까지 최소값 += 1)
// 3-2. 원소가 최소값보다 크면 배열에 true 저장

function solution(A) {
  const N = A.length;
  const usedNumber = Array.from({ length: N + 1 }, () => false);
  let result = 1;

  A.forEach(operate);

  return result;

  function operate(value) {
    if (value < 1 || N < value) {
      return;
    }

    usedNumber[value] = true;
    if (value === result) {
      while (usedNumber[result]) {
        result += 1;
      }
    }
  }
}
