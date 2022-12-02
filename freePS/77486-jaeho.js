// 프로그래머스 / 77486 / 다단계 칫솔 판매 (Lv3 2021 Dev-Matching: 웹 백엔드 개발자(상반기))
// https://school.programmers.co.kr/learn/courses/30/lessons/77486
// solve: 30분

function solution(enroll, referral, seller, amount) {
  const answer = Array.from({ length: enroll.length }, () => 0);
  const map = new Map();

  enroll.forEach((name, index) => map.set(name, index));

  for (let pointer = 0; pointer < seller.length; pointer++) {
    let money = amount[pointer] * 100;
    let name = seller[pointer];
    let ref = referral[map.get(name)];

    while (ref !== undefined && 0 < money) {
      const money10 = Math.floor(money * 0.1);
      answer[map.get(name)] += money - money10;

      money = money10;
      name = ref;
      ref = referral[map.get(name)];
    }

    answer[map.get(name)] += money;
  }

  return answer;
}
