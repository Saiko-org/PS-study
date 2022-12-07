// 프로그래머스 / 131127 / 할인 행사 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/131127
// solve: 15분

function solution(want, number, discount) {
  let answer = 0;

  for (let day = 0; day < discount.length - 9; day++) {
    let flags = 0;
    const discountProducts = discount.slice(day, day + 10);
    for (const [index, product] of want.entries()) {
      const countOfDiscountProduct = discountProducts.filter(
        (value) => value === product
      ).length;
      if (countOfDiscountProduct !== number[index]) {
        break;
      }
      flags += 1;
    }

    if (flags === want.length) {
      answer += 1;
    }
  }

  return answer;
}
