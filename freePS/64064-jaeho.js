// 프로그래머스 / 64064 / 불량 사용자 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/64064
// solve: 30분

function solution(user_id, banned_id) {
  const set = new Set();

  const isValid = (id1, id2) => {
    if (id1.length !== id2.length) {
      return false;
    }

    for (let index = 0; index < id1.length; index++) {
      const spell1 = id1[index];
      const spell2 = id2[index];

      if (spell1 === "*" || spell2 === "*") {
        continue;
      }
      if (spell1 !== spell2) {
        return false;
      }
    }
    return true;
  };

  const dfs = (currentIndex, visited) => {
    if (currentIndex === banned_id.length) {
      set.add([...visited].sort().join(""));
      return;
    }

    const bannedId = banned_id[currentIndex];
    for (let index = 0; index < user_id.length; index++) {
      const userId = user_id[index];

      if (!visited.includes(userId) && isValid(userId, bannedId)) {
        visited.push(userId);
        dfs(currentIndex + 1, visited);
        visited.pop(userId);
      }
    }
  };

  banned_id.sort(
    (a, b) =>
      a.split("").filter((value) => value === "*").length -
      b.split("").filter((value) => value === "*").length
  );

  dfs(0, []);

  return set.size;
}
