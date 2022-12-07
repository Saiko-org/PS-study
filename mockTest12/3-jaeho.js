// 프로그래머스 / 70129 / 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// solve: 18분

const factory = (x) => {
  const countOfZero = x.split("").filter((element) => element === "0").length;
  const filteredX = parseInt(x.length - countOfZero).toString(2);
  return [filteredX, countOfZero];
};

function solution(s) {
  let x = s;
  let countOfZero = 0;
  let countOfFactory = 0;

  while (true) {
    if (x === "1") {
      break;
    }

    const [returnedFilteredX, returnedCountOfZero] = factory(x);
    x = returnedFilteredX;
    countOfZero += returnedCountOfZero;
    countOfFactory += 1;
  }

  return [countOfFactory, countOfZero];
}
