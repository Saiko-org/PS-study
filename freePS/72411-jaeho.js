// 프로그래머스 / 72411 / 메뉴 리뉴얼 (Lv2 2021 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// solve: 1시간

function solution(orders, course) {
  const answer = [];

  // 중앙 처리 및 저장
  const store = new Map();
  // orders의 요소 중 알파벳 순서가 아닌 경우 존재
  orders = orders.map((value) => value.split("").sort().join(""));
  // 불필요한 작업 제거 (course의 최솟값보다 짧은 order 제거)
  const filteredOrders = orders.filter((value) => course[0] <= value.length);

  // 모든 경우의 조합 저장
  const dfs = (pointer, menus, selectedMenus, id) => {
    // 불필요한 작업 제거 (course의 최댓값보다 긴 조합인 경우)
    if (course[course.length - 1] < selectedMenus.length) {
      return;
    }

    if (course[0] <= selectedMenus.length) {
      const key = selectedMenus.join("");
      const oneOfValue = menus.join("") + id; // order가 중복인 경우가 있으므로 id를 부여
      if (store.has(key)) {
        store.get(key).add(oneOfValue);
      } else {
        const set = new Set();
        set.add(oneOfValue);
        store.set(key, set);
      }
    }

    for (let index = pointer; index < menus.length; index++) {
      selectedMenus.push(menus[index]);
      dfs(index + 1, menus, selectedMenus, id);
      selectedMenus.pop();
    }
  };

  filteredOrders.forEach((order, id) => {
    const menus = order.split("");

    for (let index = 0; index < menus.length; index++) {
      dfs(index, menus, [], id);
    }
  });

  // 2표 이상 받은 메뉴 조합 필터링
  const board = Array.from(store).filter((value) => 1 < value[1].size);
  course.forEach((countOfCourse) => {
    // 득표를 내림차순으로 정렬
    const courseOfBoard = board
      .filter((value) => countOfCourse === value[0].length)
      .sort((a, b) => b[1].size - a[1].size);

    if (courseOfBoard.length) {
      const maxCount = courseOfBoard[0][1].size;
      courseOfBoard
        .filter((value) => maxCount === value[1].size)
        .forEach((value) => answer.push(value[0]));
    }
  });

  // 정답은 사전순
  return answer.sort();
}
