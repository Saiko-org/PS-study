// Codility / lesson2 / CyclicRotation
// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// solve: 10분

// K를 배열A의 길이로 나눈 나머지를 저장 => point
// 나머지만큼 rotate를 한다.
// 배열을 잘라서 붙이자. (slice, concat)
// 앞배열 : (배열A의 길이 - point)
// 뒷배열 : (0, 배열A의 길이 - point)

function solution(A, K) {
  const LEN = A.length;
  const point = K % LEN;

  if (point === 0) {
    return [...A];
  }

  const frontArray = A.slice(LEN - point);
  const backArray = A.slice(0, LEN - point);
  return frontArray.concat(backArray);
}
