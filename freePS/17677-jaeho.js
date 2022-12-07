// 프로그래머스 / 17677 / [1차] 뉴스 클러스터링 (Lv2 2018 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/17677
// solve: 40분
// 문제에서 설명하는 다중 집합을 잘못 이해하여 불필요한 시간 소요..

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const validation = (element) => {
    if ("a" <= element && element <= "z") {
      return true;
    }

    return false;
  };

  const makeCards = (str) => {
    const returnArray = [];

    // 2글자씩 뽑아보기
    for (let index = 0; index < str.length - 1; index++) {
      const word1 = str.substring(index, index + 1);
      const word2 = str.substring(index + 1, index + 2);

      if (!word2) {
        continue;
      }

      if (validation(word1) && validation(word2)) {
        returnArray.push(word1 + word2);
      }
    }

    return returnArray;
  };

  const cards1 = makeCards(str1).sort();
  const cards2 = makeCards(str2).sort();

  if (cards1.length === 0 && cards2.length === 0) {
    // 문제에서 정해둔 값
    return 65536;
  }
  if (cards1.length === 0 || cards2.length === 0) {
    // 분자가 0 이므로
    return 0;
  }

  const [intersection, union] = [[], []];
  let [index1, index2] = [0, 0];

  // 투포인터로 교집합과 합집합 구하기
  while (index1 < cards1.length && index2 < cards2.length) {
    const card1 = cards1[index1];
    const card2 = cards2[index2];

    if (card1 === card2) {
      intersection.push(card1);
      union.push(card1);
      index1 += 1;
      index2 += 1;
    } else if (card1 < card2) {
      union.push(card1);
      index1 += 1;
    } else {
      union.push(card2);
      index2 += 1;
    }
  }

  // 투 포인터 중 남은 포인터의 요소를 합집합에 추가
  while (index1 < cards1.length) {
    union.push(cards1[index1]);
    index1 += 1;
  }
  while (index2 < cards2.length) {
    union.push(cards2[index2]);
    index2 += 1;
  }

  return Math.floor((intersection.length * 65536) / union.length);
}
