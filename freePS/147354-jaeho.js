// 프로그래머스 / 147354 / 테이블 해시 함수 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/147354
// solve: 15분
// 비트 연산자 ^

function solution(data, col, row_begin, row_end) {
  const compare = (a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  };
  const sortedData = data.sort(compare);
  console.log(sortedData);
  const selected = [];

  for (let row = row_begin - 1; row < row_end; row++) {
    const calculatedValue = sortedData[row].reduce(
      (total, current) => total + (current % (row + 1)),
      0
    );
    selected.push(calculatedValue);
  }

  return selected.reduce((total, current) => total ^ current, 0);
}
