// 프로그래머스 / 72411 / 메뉴 리뉴얼
// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// solve: 1시간

function solution(orders, course) {
  const answer = [];
  const map = new Map();

  // 모든 메뉴 세트의 경우의 수에 count 기록하는 DFS
  const makeMapByDFS = (order, index, key, id) => {
    if (map.has(key)) {
      if (map.get(key).includes(id) === false) {
        map.get(key).push(id);
      }
    } else {
      map.set(key, [id]);
    }

    if (order.length === index) {
      return;
    }

    makeMapByDFS(order, index + 1, key + order[index], id);
    makeMapByDFS(order, index + 1, key, id);
  };

  // orders를 가지고 map을 만들기
  orders.forEach((order, id) => {
    const splittedOrder = order.split("");

    splittedOrder.sort();
    makeMapByDFS(splittedOrder, 0, "", id);
  });

  // count 내림차순으로 정렬
  const mapToArray = [...map].map((element) => [element[0], element[1].length]);
  mapToArray.sort((a, b) => {
    if (b[1] === a[1]) {
      return b[0].length - a[0].length;
    } else {
      return b[1] - a[1];
    }
  });

  for (const c of course) {
    // 코스요리의 단품메뉴 갯수에 맞춰 필터링
    const filteredMap = mapToArray.filter(
      (element) => c === element[0].length && 1 < element[1]
    );

    // 단품메뉴 갯수에 맞는 필터링된 코스요리가 없는 경우
    if (filteredMap.length === 0) {
      continue;
    }

    // 일단 첫번째꺼 추가
    answer.push(filteredMap[0][0]);

    // 가장 많이 함께 주문된 메뉴 구성이 여러개인 경우 찾기
    for (let index = 1; index < filteredMap.length; index++) {
      if (filteredMap[0][1] !== filteredMap[index][1]) {
        break;
      } else {
        answer.push(filteredMap[index][0]);
      }
    }
  }

  return answer.sort();
}
